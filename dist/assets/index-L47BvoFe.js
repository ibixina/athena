(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const k=[{id:"duplicate-subsets",title:"Duplicate Subset Sums",difficulty:"Medium",estimatedTime:"45-90 minutes",statement:"You are given 10 distinct positive integers, each at most 100. Prove that there exist two **different non-empty subsets** of these integers that have the **same sum**.",publishDate:"2026-04-06",concepts:[{name:"Subsets and Combinations",description:"Understanding how many ways we can form groups from a larger set.",resourceTitle:"Combinatorics: Subsets",resourceUrl:"https://en.wikipedia.org/wiki/Subset",readTime:"3 min"},{name:"The Pigeonhole Principle",description:"If you have more pigeons than holes, at least one hole must contain more than one pigeon.",resourceTitle:"Introduction to Pigeonhole Principle",resourceUrl:"https://artofproblemsolving.com/wiki/index.php/Pigeonhole_Principle",readTime:"5 min"}],hints:[{order:1,content:"How many non-empty subsets are there for a set of 10 elements?"},{order:2,content:"What is the smallest possible sum a subset could have? What is the largest possible sum, knowing each integer is at most 100?"},{order:3,content:"Compare the number of possible non-empty subsets to the number of distinct possible sums. Apply the Pigeonhole Principle."}],solution:`### Step 1: Count the Subsets
A set of 10 distinct elements has $2^{10} = 1024$ subsets in total. Excluding the empty set, there are **1023 non-empty subsets**.

### Step 2: Determine the Range of Possible Sums
The minimum possible sum is 1, assuming 1 is in the subset.
The maximum possible sum occurs if the set consists of the 10 largest possible integers (91, 92, ..., 100). That sum is $91 + 92 + \\dots + 100 = 955$.

Thus, any subset sum must be an integer between 1 and 955 inclusive.

### Step 3: Apply the Pigeonhole Principle
We have 1023 different non-empty subsets (the 'pigeons'), but only 955 possible sum values (the 'holes'). Since $1023 > 955$, by the Pigeonhole Principle, at least two different non-empty subsets must map to the same sum. $\\blacksquare$`}];function V(){const e=new Date().toISOString().split("T")[0],t=k.find(s=>s.publishDate===e);if(t)return t;const r=(Math.floor((new Date().getTime()-new Date("2026-04-06").getTime())/(1e3*60*60*24))%k.length+k.length)%k.length;return k[r]}const A="athena_progress";function R(){try{const e=localStorage.getItem(A);if(e)return JSON.parse(e)}catch(e){console.error("Failed to load progress:",e)}return{solvedProblems:[],scratchpad:{},lastVisit:new Date().toISOString().split("T")[0]}}function O(e){try{localStorage.setItem(A,JSON.stringify(e))}catch(t){console.error("Failed to save progress:",t)}}function X(e){const t=R();t.solvedProblems.includes(e)||(t.solvedProblems.push(e),O(t))}function C(e,t){const o=R();o.scratchpad[e]=t,O(o)}function G(e){return R().solvedProblems.includes(e)}function J(e){return R().scratchpad[e]||""}let g,L=new Set,y=!1,m=!1,f=[],n=[33,34,33],p=[];function H(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");t=t.replace(/^### (.*$)/gim,"<h4>$1</h4>").replace(/^## (.*$)/gim,"<h3>$1</h3>").replace(/^# (.*$)/gim,"<h2>$1</h2>").replace(/\$(.*?)\$/g,(s,i)=>`<code class="math">${i.replace(/\\dots/g,"&hellip;").replace(/\\blacksquare/g,"&#9632;").replace(/\^\{(.*?)\}/g,"<sup>$1</sup>").replace(/\^(.)/g,"<sup>$1</sup>").replace(/_\{(.*?)\}/g,"<sub>$1</sub>").replace(/_(.)/g,"<sub>$1</sub>")}</code>`).replace(/\[(.*?)\]\((.*?)\)/g,(s,i,a)=>{const h=i.replace(/<[^>]*>?/gm,"");return`<a href="${a}" data-reader-link="true" data-url="${a}" data-title="${h}">${i}</a>`}).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");const r=t.split(`

`).map(s=>/^<(h\d|ul|ol|li|blockquote|pre)>/.test(s.trim())?s:`<p>${s.replace(/\n/g,"<br>")}</p>`).join(`
`);return console.log("Parsed Markdown Result:",r),r}function K(){const e=g,t=G(e.id);return`
    <div class="problem-card">
      <div class="problem-header">
        <h2 class="problem-title">${e.title}</h2>
        <div class="problem-meta">
          <span class="difficulty ${e.difficulty.toLowerCase()}">${e.difficulty}</span>
          <span class="time-estimate">${e.estimatedTime}</span>
        </div>
      </div>
      <div class="problem-statement">${H(e.statement)}</div>
      ${Q(e)}
      ${Z(e)}
      ${ee(e)}
      ${te(e,t)}
    </div>
    ${t?ne():""}
  `}function Q(e){return!e.concepts||e.concepts.length===0?"":`
    <div class="concepts-section">
      <div class="section-title">Concepts to Learn</div>
      <div class="concept-grid">
        ${e.concepts.map((t,o)=>`
          <div class="concept-card">
            <div class="concept-name">${t.name}</div>
            <div class="concept-desc">${t.description}</div>
            <button class="concept-link-btn" onclick="window.openReader(${o})">
              ${t.resourceTitle}<span class="read-time">· ${t.readTime}</span>
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Z(e){return!e.hints||e.hints.length===0?"":`
    <div class="hints-section">
      <div class="section-title">Hints</div>
      <div class="hint-accordion">
        ${e.hints.map(t=>`
          <div class="hint-item ${L.has(t.order)?"open":""}" data-hint="${t.order}">
            <div class="hint-header" onclick="window.toggleHint(${t.order})">
              <span class="hint-label">
                <span class="hint-number">${t.order}</span>
                Hint ${t.order}
              </span>
              <span class="hint-arrow">▼</span>
            </div>
            <div class="hint-content">
              <div class="hint-text">${H(t.content)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ee(e){return`
    <div class="solution-section">
      <button class="solution-toggle" onclick="window.toggleSolution()">
        <span class="icon">🔓</span>
        <span>${y?"Hide Solution":"Reveal Solution"}</span>
      </button>
      <div class="solution-content ${y?"open":""}">
        <div class="solution-text">${H(e.solution)}</div>
      </div>
    </div>
  `}function te(e,t){return`
    <div class="actions">
      ${t?"":`<button class="btn btn-primary" onclick="window.markSolved('${e.id}')">
        ✓ Mark as Solved
      </button>`}
    </div>
  `}function ne(){return`
    <div class="completed-banner">
      <span class="icon">🎉</span>
      <div class="text">
        <strong>Completed!</strong> Great work on today's problem.
      </div>
    </div>
  `}function se(){const e=J(g.id);return`
    <div class="notes-card">
      <div class="notes-header">
        <span class="notes-title">Notes</span>
      </div>
      <div 
        class="scratchpad" 
        contenteditable="true"
        data-placeholder="Write your reasoning, work, and notes here..."
        oninput="window.saveScratchpad('${g.id}', this.innerHTML)"
        onpaste="window.handleNotesPaste(event, '${g.id}')"
        style="overflow-y: auto; outline: none; border-radius: 0; border: none; background: transparent; flex: 1; padding: 1rem;"
      >${e}</div>
    </div>
  `}function oe(){return!m||f.length===0?"":`
    <div style="display: grid; grid-template-rows: ${p.map((t,o)=>o<p.length-1?`${t}fr 8px`:`${t}fr`).join(" ")}; height: 100%; width: 100%;">
      ${f.map((t,o)=>{const r=g.concepts[t];return`
          <div class="reader-pane" style="height: 100%; min-height: 0; display: flex; flex-direction: column;">
            <div class="reader-header-bar">
              <span class="reader-title-bar">${r.resourceTitle}</span>
              <button class="reader-close-btn" onclick="window.closeReader(${t})">✕</button>
            </div>
            <iframe 
              class="reader-iframe" 
              src="${r.resourceUrl}" 
              sandbox="allow-same-origin allow-scripts allow-forms"
              style="height: 100%; flex: 1; border: none; background: #ffffff;"
            ></iframe>
          </div>
          ${o<f.length-1?`
            <div class="v-resizer" data-vindex="${o}" style="cursor: row-resize; background: transparent; position: relative;">
              <div style="position: absolute; left: 20%; right: 20%; top: 50%; transform: translateY(-50%); height: 4px; border-radius: 2px; background: var(--border-glass); transition: background 0.2s;"></div>
            </div>
          `:""}
        `}).join("")}
    </div>
  `}function ie(){const e=m;return`
    <main class="workspace" style="grid-template-columns: ${e?`${n[0]}% 8px ${n[1]}% 8px ${n[2]}%`:`${n[0]}% 8px ${n[1]}%`}">
      <div class="pane problem-pane" style="width: 100%">
        ${K()}
      </div>
      <div class="resizer" data-index="0"></div>
      <div class="pane notes-pane" style="width: 100%">
        ${se()}
      </div>
      ${e?`
        <div class="resizer" data-index="1"></div>
        <div class="pane reader-container" style="width: 100%; min-height: 0;">
          ${oe()}
        </div>
      `:""}
    </main>
  `}function N(){return g=V(),`
    <header>
      <div class="logo">ATH<span>ENA</span></div>
      <div class="tagline">Daily Problem</div>
    </header>
    ${ie()}
  `}window.toggleHint=e=>{const t=document.querySelector(`.hint-item[data-hint="${e}"]`);t&&(L.has(e)?(L.delete(e),t.classList.remove("open")):(L.add(e),t.classList.add("open")))};window.toggleSolution=()=>{y=!y;const e=document.querySelector(".solution-toggle span:last-child"),t=document.querySelector(".solution-content");e&&(e.textContent=y?"Hide Solution":"Reveal Solution"),t&&(y?t.classList.add("open"):t.classList.remove("open"))};window.markSolved=e=>{X(e),E()};window.saveScratchpad=(e,t)=>{C(e,t)};window.handleNotesPaste=(e,t)=>{if(e.clipboardData&&e.clipboardData.files&&e.clipboardData.files.length>0){const o=e.clipboardData.files[0];if(o.type.startsWith("image/")){e.preventDefault();const r=new FileReader;r.onload=s=>{var h;const i=(h=s.target)==null?void 0:h.result;document.execCommand("insertImage",!1,i);const a=e.target;a&&C(t,a.innerHTML)},r.readAsDataURL(o)}}else if(e.clipboardData){const o=e.clipboardData.getData("text/plain");if(o){e.preventDefault(),document.execCommand("insertText",!1,o);const r=e.target;r&&C(t,r.innerHTML)}}};window.openReader=e=>{const t=g.concepts[e];window.openReaderByLink(null,t.resourceUrl,t.resourceTitle)};window.openReaderByLink=(e,t,o)=>{if(e&&e.preventDefault(),f.findIndex(s=>{var i;return((i=g.concepts[s])==null?void 0:i.resourceUrl)===t})===-1){const s=g.concepts.findIndex(a=>a.resourceUrl===t);if(s!==-1)f.push(s);else{const a=o.replace(/<[^>]*>?/gm,""),h={name:a,description:"",resourceTitle:a,resourceUrl:t,readTime:""};g.concepts.push(h),f.push(g.concepts.length-1)}const i=f.length;p=f.map(()=>100/i)}m=f.length>0,n.length===2&&m&&(n=[33,34,33]),E()};document.addEventListener("click",e=>{const o=e.target.closest('a[data-reader-link="true"]');if(o){e.preventDefault();const r=o.dataset.url||"",s=o.dataset.title||"";window.openReaderByLink(null,r,s)}});window.closeReader=e=>{if(f=f.filter(t=>t!==e),m=f.length>0,!m)n=[n[0]+n[2],n[1],0];else{const t=f.length;p=f.map(()=>100/t)}E()};function E(){document.querySelector("#app").innerHTML=N(),re()}function re(){const e=document.querySelectorAll(".resizer");let t=!1,o=null,r=0,s=[];const i=document.querySelectorAll(".v-resizer");let a=!1,h=null,M=0,b=[];i.forEach(d=>{d.addEventListener("dblclick",()=>{const l=parseInt(d.dataset.vindex||"0");p[l]<5?(p[l]=50,p[l+1]=50):(p[l+1]+=p[l]-5,p[l]=5);const c=d.parentElement;c&&(c.style.gridTemplateRows=p.map((v,$)=>$<p.length-1?`${v}fr 8px`:`${v}fr`).join(" "))}),d.addEventListener("mousedown",l=>{a=!0,h=d,M=l.clientY,b=[...p],document.body.style.cursor="row-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none"),l.stopPropagation()})}),e.forEach(d=>{d.addEventListener("dblclick",()=>{const l=parseInt(d.dataset.index||"0"),c=5;l===0?n[0]<=c?(n[1]=n[1]+n[0]-(50-(m?n[2]/2:0)),n[0]=50-(m?n[2]/2:0)):(n[1]=n[1]+n[0]-c,n[0]=c):l===1&&m&&(n[2]<=c?(n[1]=n[1]+n[2]-33,n[2]=33):(n[1]=n[1]+n[2]-c,n[2]=c));const v=m?`${n[0]}fr 8px ${n[1]}fr 8px ${n[2]}fr`:`${n[0]}fr 8px ${n[1]}fr`,$=document.querySelector(".workspace");$&&($.style.gridTemplateColumns=v)}),d.addEventListener("mousedown",l=>{t=!0,o=d,r=l.clientX,s=[...n],document.body.style.cursor="col-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none")})}),document.addEventListener("mousemove",d=>{if(a&&h!==null){const u=parseInt(h.dataset.vindex||"0"),S=d.clientY-M,x=h.parentElement,z=(x==null?void 0:x.offsetHeight)||window.innerHeight,j=S/z*100,D=[...b],I=5;let T=b[u]+j;const _=b[u]+b[u+1]-I;T=Math.max(I,Math.min(_,T));const Y=T-b[u];D[u]=T,D[u+1]=b[u+1]-Y,p=D;const B=p.map((W,F)=>F<p.length-1?`${W}fr 8px`:`${W}fr`).join(" ");x&&(x.style.gridTemplateRows=B);return}if(!t||o===null)return;const l=parseInt(o.dataset.index||"0"),c=d.clientX-r,v=document.querySelector(".workspace"),$=(v==null?void 0:v.offsetWidth)||window.innerWidth,q=c/$*100,w=[...s],P=5;if(l===0){let u=s[0]+q;const S=100-P-(m?s[2]:0);u=Math.max(P,Math.min(S,u)),w[0]=u,w[1]=100-w[0]-(m?s[2]:0)}else if(l===1&&m){let u=s[1]+q;const S=100-s[0]-P;u=Math.max(P,Math.min(S,u)),w[1]=u,w[2]=100-s[0]-w[1]}n=w;const U=m?`${n[0]}fr 8px ${n[1]}fr 8px ${n[2]}fr`:`${n[0]}fr 8px ${n[1]}fr`;v&&(v.style.gridTemplateColumns=U)}),document.addEventListener("mouseup",()=>{a&&(a=!1,h=null),t&&(t=!1,o=null),document.body.style.cursor="",document.body.style.userSelect="";const d=document.querySelector(".workspace");d&&(d.style.pointerEvents="")})}document.querySelector("#app").innerHTML=N();document.addEventListener("copy",e=>{const t=window.getSelection();t&&!t.isCollapsed&&e.clipboardData&&(e.clipboardData.setData("text/plain",t.toString()),e.preventDefault())});
