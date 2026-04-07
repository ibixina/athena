import { getTodayProblem } from '../data/problems';
import { saveScratchpad, markProblemSolved, isProblemSolved, getScratchpad } from '../data/state';
import type { Problem } from '../types';

let currentProblem: Problem;
let openHints: Set<number> = new Set();
let solutionOpen = false;
let readerOpen = false;
let openConceptIndexes: number[] = [];
let paneWidths = [33, 34, 33];
let vPaneHeights: number[] = [];

declare global {
  interface Window {
    openReaderByLink: (e: MouseEvent | null, url: string, title: string) => void;
  }
}

function parseMarkdown(text: string): string {
  if (!text) return '';
  // First, escape some HTML characters to be safe
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Then do replacements
  html = html
    .replace(/^### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^## (.*$)/gim, '<h3>$1</h3>')
    .replace(/^# (.*$)/gim, '<h2>$1</h2>')
    .replace(/\$(.*?)\$/g, (_, p1) => {
      // Basic LaTeX-like replacements inside math blocks
      const rendered = p1
        .replace(/\\dots/g, '&hellip;')
        .replace(/\\blacksquare/g, '&#9632;')
        .replace(/\^\{(.*?)\}/g, '<sup>$1</sup>')
        .replace(/\^(.)/g, '<sup>$1</sup>')
        .replace(/_\{(.*?)\}/g, '<sub>$1</sub>')
        .replace(/_(.)/g, '<sub>$1</sub>');
      return `<code class="math">${rendered}</code>`;
    })
    .replace(/\[(.*?)\]\((.*?)\)/g, (_, p1, p2) => {
      // Strip tags from p1 for use in data-title to avoid breaking attributes
      const plainTitle = p1.replace(/<[^>]*>?/gm, '');
      return `<a href="${p2}" data-reader-link="true" data-url="${p2}" data-title="${plainTitle}">${p1}</a>`;
    })
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Wrap non-header blocks in paragraphs
  const blocks = html.split('\n\n');
  const result = blocks.map(block => {
    if (/^<(h\d|ul|ol|li|blockquote|pre)>/.test(block.trim())) {
      return block;
    }
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');
  console.log('Parsed Markdown Result:', result);
  return result;
}

function renderProblemPane(): string {
  const p = currentProblem;
  const solved = isProblemSolved(p.id);

  return `
    <div class="problem-card">
      <div class="problem-header">
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <h2 class="problem-title">${p.title}</h2>
          ${renderActions(p, solved)}
          ${solved ? renderCompletedBanner() : ''}
        </div>
        <div class="problem-meta">
          <span class="difficulty ${p.difficulty.toLowerCase()}">${p.difficulty}</span>
          <span class="time-estimate">${p.estimatedTime}</span>
        </div>
      </div>
      <div class="problem-statement">${parseMarkdown(p.statement)}</div>
      ${renderConcepts(p)}
      ${renderHints(p)}
      ${renderSolution(p)}
    </div>
  `;
}

function renderConcepts(p: Problem): string {
  if (!p.concepts || p.concepts.length === 0) return '';

  return `
    <div class="concepts-section">
      <div class="section-title">Concepts to Learn</div>
      <div class="concept-grid">
        ${p.concepts.map((c, i) => `
          <div class="concept-card">
            <div class="concept-name">${c.name}</div>
            <div class="concept-desc">${c.description}</div>
            <button class="concept-link-btn" onclick="window.openReader(${i})">
              ${c.resourceTitle}<span class="read-time">· ${c.readTime}</span>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderHints(p: Problem): string {
  if (!p.hints || p.hints.length === 0) return '';

  return `
    <div class="hints-section">
      <div class="section-title">Hints</div>
      <div class="hint-accordion">
        ${p.hints.map(h => `
          <div class="hint-item ${openHints.has(h.order) ? 'open' : ''}" data-hint="${h.order}">
            <div class="hint-header" onclick="window.toggleHint(${h.order})">
              <span class="hint-label">
                <span class="hint-number">${h.order}</span>
                Hint ${h.order}
              </span>
              <span class="hint-arrow">▼</span>
            </div>
            <div class="hint-content">
              <div class="hint-text">${parseMarkdown(h.content)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSolution(p: Problem): string {
  return `
    <div class="solution-section">
      <button class="solution-toggle" onclick="window.toggleSolution()">
        <span class="icon">🔓</span>
        <span>${solutionOpen ? 'Hide Solution' : 'Reveal Solution'}</span>
      </button>
      <div class="solution-content ${solutionOpen ? 'open' : ''}">
        <div class="solution-text">${parseMarkdown(p.solution)}</div>
      </div>
    </div>
  `;
}

function renderActions(p: Problem, solved: boolean): string {
  if (solved) return '';
  return `
    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="window.markSolved('${p.id}')">
      ✓ Mark as Solved
    </button>
  `;
}

function getTimeUntilNextProblem(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

let countdownInterval: ReturnType<typeof setInterval> | null = null;

function renderCompletedBanner(): string {
  return `
    <div class="completed-badge" style="display: flex; align-items: center; gap: 1rem; border: 2px solid var(--success); color: var(--success); padding: 0.5rem 1rem; font-family: var(--font-mono); font-weight: 800; text-transform: uppercase; font-size: 0.85rem;">
      <span>🎉 Completed!</span>
      <div class="countdown-timer" style="display: flex; gap: 0.5rem; padding-top: 0; border-top: none; align-items: center; width: auto;">
        <span class="countdown-label" style="font-size: 0.75rem;">Next:</span>
        <span class="countdown-value" id="countdown" style="font-size: 1rem;">${getTimeUntilNextProblem()}</span>
      </div>
    </div>
  `;
}

function startCountdown(): void {
  if (countdownInterval) clearInterval(countdownInterval);
  const el = document.getElementById('countdown');
  if (!el) return;
  countdownInterval = setInterval(() => {
    const timeLeft = getTimeUntilNextProblem();
    el.textContent = timeLeft;
    if (timeLeft === '00:00:00') {
      clearInterval(countdownInterval!);
      countdownInterval = null;
      refreshApp();
    }
  }, 1000);
}

export function startCountdownIfSolved(): void {
  if (isProblemSolved(currentProblem.id)) {
    startCountdown();
  }
}

function renderNotesPane(): string {
  const savedContent = getScratchpad(currentProblem.id);
  return `
    <div class="notes-card">
      <div class="notes-header">
        <span class="notes-title">Notes</span>
      </div>
      <div 
        class="scratchpad" 
        contenteditable="true"
        data-placeholder="Write your reasoning, work, and notes here..."
        oninput="window.saveScratchpad('${currentProblem.id}', this.innerHTML)"
        onpaste="window.handleNotesPaste(event, '${currentProblem.id}')"
        style="overflow-y: auto; outline: none; border-radius: 0; border: none; background: transparent; flex: 1; padding: 1rem;"
      >${savedContent}</div>
    </div>
  `;
}

function renderReaderPanes(): string {
  if (!readerOpen || openConceptIndexes.length === 0) return '';

  const gridRows = vPaneHeights.map((h, i) =>
    i < vPaneHeights.length - 1 ? `${h}fr 8px` : `${h}fr`
  ).join(' ');

  return `
    <div style="display: grid; grid-template-rows: ${gridRows}; height: 100%; width: 100%;">
      ${openConceptIndexes.map((index, i) => {
    const concept = currentProblem.concepts[index];
    return `
          <div class="reader-pane" style="height: 100%; min-height: 0; display: flex; flex-direction: column;">
            <div class="reader-header-bar">
              <span class="reader-title-bar">${concept.resourceTitle}</span>
              <button class="reader-close-btn" onclick="window.closeReader(${index})">✕</button>
            </div>
            <iframe 
              class="reader-iframe" 
              src="${concept.resourceUrl}" 
              sandbox="allow-same-origin allow-scripts allow-forms"
              style="height: 100%; flex: 1; border: none; background: #ffffff;"
            ></iframe>
          </div>
          ${i < openConceptIndexes.length - 1 ? `
            <div class="v-resizer" data-vindex="${i}" style="cursor: row-resize; background: transparent; position: relative;">
              <div style="position: absolute; left: 20%; right: 20%; top: 50%; transform: translateY(-50%); height: 4px; border-radius: 2px; background: var(--border-glass); transition: background 0.2s;"></div>
            </div>
          ` : ''}
        `;
  }).join('')}
    </div>
  `;
}

function renderWorkspace(): string {
  const hasReader = readerOpen;
  const gridCols = hasReader
    ? `${paneWidths[0]}% 8px ${paneWidths[1]}% 8px ${paneWidths[2]}%`
    : `${paneWidths[0]}% 8px ${paneWidths[1]}%`;

  return `
    <main class="workspace" style="grid-template-columns: ${gridCols}">
      <div class="pane problem-pane" style="width: 100%">
        ${renderProblemPane()}
      </div>
      <div class="resizer" data-index="0"></div>
      <div class="pane notes-pane" style="width: 100%">
        ${renderNotesPane()}
      </div>
      ${hasReader ? `
        <div class="resizer" data-index="1"></div>
        <div class="pane reader-container" style="width: 100%; min-height: 0;">
          ${renderReaderPanes()}
        </div>
      ` : ''}
    </main>
  `;
}

export function renderApp(): string {
  currentProblem = getTodayProblem();

  return `
    <header>
      <div class="logo">ATH<span>ENA</span></div>
      <div class="tagline">Daily Problem</div>
    </header>
    ${renderWorkspace()}
  `;
}

(window as any).toggleHint = (order: number) => {
  const hintEl = document.querySelector(`.hint-item[data-hint="${order}"]`);
  if (hintEl) {
    if (openHints.has(order)) {
      openHints.delete(order);
      hintEl.classList.remove('open');
    } else {
      openHints.add(order);
      hintEl.classList.add('open');
    }
  }
};

(window as any).toggleSolution = () => {
  solutionOpen = !solutionOpen;
  const btnText = document.querySelector('.solution-toggle span:last-child');
  const solutionContent = document.querySelector('.solution-content');
  if (btnText) btnText.textContent = solutionOpen ? 'Hide Solution' : 'Reveal Solution';
  if (solutionContent) {
    if (solutionOpen) solutionContent.classList.add('open');
    else solutionContent.classList.remove('open');
  }
};

(window as any).markSolved = (problemId: string) => {
  markProblemSolved(problemId);
  refreshApp();
};

(window as any).saveScratchpad = (problemId: string, content: string) => {
  saveScratchpad(problemId, content);
};

(window as any).handleNotesPaste = (e: ClipboardEvent, problemId: string) => {
  if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
    const file = e.clipboardData.files[0];
    if (file.type.startsWith('image/')) {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        // Insert the image utilizing standard browser contenteditable commands natively
        document.execCommand('insertImage', false, dataUrl);
        // After insert, save the updated content
        const scratchpad = e.target as HTMLElement;
        if (scratchpad) {
          saveScratchpad(problemId, scratchpad.innerHTML);
        }
      };
      reader.readAsDataURL(file);
    }
  } else if (e.clipboardData) {
    const text = e.clipboardData.getData('text/plain');
    if (text) {
      e.preventDefault();
      document.execCommand('insertText', false, text);
      const scratchpad = e.target as HTMLElement;
      if (scratchpad) {
        saveScratchpad(problemId, scratchpad.innerHTML);
      }
    }
  }
};

(window as any).openReader = (index: number) => {
  const concept = currentProblem.concepts[index];
  window.openReaderByLink(null, concept.resourceUrl, concept.resourceTitle);
};

(window as any).openReaderByLink = (e: MouseEvent | null, url: string, title: string) => {
  if (e) e.preventDefault();

  // Find if already open
  const existing = openConceptIndexes.findIndex(i => currentProblem.concepts[i]?.resourceUrl === url);
  if (existing === -1) {
    // Check if this URL matches any predefined concepts to reuse the logic
    const conceptIdx = currentProblem.concepts.findIndex(c => c.resourceUrl === url);
    if (conceptIdx !== -1) {
      openConceptIndexes.push(conceptIdx);
    } else {
      // Clean title from tags for the header bar
      const cleanTitle = title.replace(/<[^>]*>?/gm, '');
      const virtualConcept = {
        name: cleanTitle,
        description: '',
        resourceTitle: cleanTitle,
        resourceUrl: url,
        readTime: ''
      };
      currentProblem.concepts.push(virtualConcept);
      openConceptIndexes.push(currentProblem.concepts.length - 1);
    }
    const count = openConceptIndexes.length;
    vPaneHeights = openConceptIndexes.map(() => 100 / count);
  }
  const wasReaderOpen = readerOpen;
  readerOpen = openConceptIndexes.length > 0;
  if (!wasReaderOpen && readerOpen) {
    if (paneWidths.length === 2 || paneWidths[2] === 0) {
      if (paneWidths[0] > 33) {
        paneWidths[0] -= 33;
        paneWidths[2] = 33;
      } else {
        paneWidths = [33, 34, 33];
      }
    }
  }
  refreshApp();
};

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('a[data-reader-link="true"]') as HTMLAnchorElement;
  if (link) {
    e.preventDefault();
    const url = link.dataset.url || '';
    const title = link.dataset.title || '';
    window.openReaderByLink(null, url, title);
  }
});

(window as any).closeReader = (index: number) => {
  openConceptIndexes = openConceptIndexes.filter(i => i !== index);
  readerOpen = openConceptIndexes.length > 0;
  if (!readerOpen) {
    paneWidths = [paneWidths[0] + paneWidths[2], paneWidths[1], 0];
  } else {
    const count = openConceptIndexes.length;
    vPaneHeights = openConceptIndexes.map(() => 100 / count);
  }
  refreshApp();
};

function refreshApp(): void {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderApp();
  setupResizers();
  if (isProblemSolved(currentProblem.id)) {
    startCountdown();
  }
}

function setupResizers(): void {
  const resizers = document.querySelectorAll('.resizer') as NodeListOf<HTMLDivElement>;
  let isResizing = false;
  let currentResizer: HTMLDivElement | null = null;
  let startX = 0;
  let startWidths: number[] = [];

  const vResizers = document.querySelectorAll('.v-resizer') as NodeListOf<HTMLDivElement>;
  let isVResizing = false;
  let currentVResizer: HTMLDivElement | null = null;
  let startY = 0;
  let startHeights: number[] = [];

  vResizers.forEach(resizer => {
    resizer.addEventListener('dblclick', () => {
      const idx = parseInt(resizer.dataset.vindex || '0');
      // Collapse or expand vertically
      if (vPaneHeights[idx] < 5) {
        vPaneHeights[idx] = 50;
        vPaneHeights[idx + 1] = 50;
      } else {
        vPaneHeights[idx + 1] += vPaneHeights[idx] - 5;
        vPaneHeights[idx] = 5;
      }
      const container = resizer.parentElement as HTMLElement;
      if (container) {
        container.style.gridTemplateRows = vPaneHeights.map((h, i) =>
          i < vPaneHeights.length - 1 ? `${h}fr 8px` : `${h}fr`
        ).join(' ');
      }
    });

    resizer.addEventListener('mousedown', (e) => {
      isVResizing = true;
      currentVResizer = resizer;
      startY = e.clientY;
      startHeights = [...vPaneHeights];
      document.body.style.cursor = 'row-resize';
      document.body.style.userSelect = 'none';

      const workspace = document.querySelector('.workspace') as HTMLElement;
      if (workspace) workspace.style.pointerEvents = 'none';
      e.stopPropagation();
    });
  });

  resizers.forEach(resizer => {
    resizer.addEventListener('dblclick', () => {
      const idx = parseInt(resizer.dataset.index || '0');
      const minW = 5;
      if (idx === 0) {
        if (paneWidths[0] <= minW) {
          paneWidths[1] = paneWidths[1] + paneWidths[0] - (50 - (readerOpen ? paneWidths[2] / 2 : 0));
          paneWidths[0] = 50 - (readerOpen ? paneWidths[2] / 2 : 0);
        } else {
          paneWidths[1] = paneWidths[1] + paneWidths[0] - minW;
          paneWidths[0] = minW;
        }
      } else if (idx === 1 && readerOpen) {
        if (paneWidths[2] <= minW) {
          paneWidths[1] = paneWidths[1] + paneWidths[2] - 33;
          paneWidths[2] = 33;
        } else {
          paneWidths[1] = paneWidths[1] + paneWidths[2] - minW;
          paneWidths[2] = minW;
        }
      }
      const gridCols = readerOpen
        ? `${paneWidths[0]}fr 8px ${paneWidths[1]}fr 8px ${paneWidths[2]}fr`
        : `${paneWidths[0]}fr 8px ${paneWidths[1]}fr`;
      const workspace = document.querySelector('.workspace') as HTMLElement;
      if (workspace) workspace.style.gridTemplateColumns = gridCols;
    });

    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      currentResizer = resizer;
      startX = e.clientX;
      startWidths = [...paneWidths];
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      const workspace = document.querySelector('.workspace') as HTMLElement;
      if (workspace) workspace.style.pointerEvents = 'none';
    });
  });

  document.addEventListener('mousemove', (e) => {
    if (isVResizing && currentVResizer !== null) {
      const idx = parseInt(currentVResizer.dataset.vindex || '0');
      const delta = e.clientY - startY;
      const container = currentVResizer.parentElement as HTMLElement;
      const containerHeight = container?.offsetHeight || window.innerHeight;
      const deltaPercent = (delta / containerHeight) * 100;

      const newHeights = [...startHeights];
      const minH = 5;

      let proposed = startHeights[idx] + deltaPercent;
      const maxH = startHeights[idx] + startHeights[idx + 1] - minH;
      proposed = Math.max(minH, Math.min(maxH, proposed));

      const diff = proposed - startHeights[idx];
      newHeights[idx] = proposed;
      newHeights[idx + 1] = startHeights[idx + 1] - diff;

      vPaneHeights = newHeights;

      const gridRows = vPaneHeights.map((h, i) =>
        i < vPaneHeights.length - 1 ? `${h}fr 8px` : `${h}fr`
      ).join(' ');
      if (container) container.style.gridTemplateRows = gridRows;
      return;
    }

    if (!isResizing || currentResizer === null) return;

    const idx = parseInt(currentResizer.dataset.index || '0');
    const delta = e.clientX - startX;
    const container = document.querySelector('.workspace') as HTMLElement;
    const containerWidth = container?.offsetWidth || window.innerWidth;
    const deltaPercent = (delta / containerWidth) * 100;

    const newWidths = [...startWidths];
    const minW = 5;

    if (idx === 0) {
      let proposed0 = startWidths[0] + deltaPercent;
      const max0 = 100 - minW - (readerOpen ? startWidths[2] : 0);
      proposed0 = Math.max(minW, Math.min(max0, proposed0));
      newWidths[0] = proposed0;
      newWidths[1] = 100 - newWidths[0] - (readerOpen ? startWidths[2] : 0);
    } else if (idx === 1 && readerOpen) {
      let proposed1 = startWidths[1] + deltaPercent;
      const max1 = 100 - startWidths[0] - minW;
      proposed1 = Math.max(minW, Math.min(max1, proposed1));
      newWidths[1] = proposed1;
      newWidths[2] = 100 - startWidths[0] - newWidths[1];
    }

    paneWidths = newWidths;
    const gridCols = readerOpen
      ? `${paneWidths[0]}fr 8px ${paneWidths[1]}fr 8px ${paneWidths[2]}fr`
      : `${paneWidths[0]}fr 8px ${paneWidths[1]}fr`;
    if (container) {
      container.style.gridTemplateColumns = gridCols;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isVResizing) {
      isVResizing = false;
      currentVResizer = null;
    }
    if (isResizing) {
      isResizing = false;
      currentResizer = null;
    }

    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    const workspace = document.querySelector('.workspace') as HTMLElement;
    if (workspace) workspace.style.pointerEvents = '';
  });
}