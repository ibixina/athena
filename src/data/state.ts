import type { UserProgress } from '../types';

const STORAGE_KEY = 'braintrain_progress';

export function loadProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return {
    solvedProblems: [],
    scratchpad: {},
    lastVisit: new Date().toISOString().split('T')[0]
  };
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function markProblemSolved(problemId: string): void {
  const progress = loadProgress();
  if (!progress.solvedProblems.includes(problemId)) {
    progress.solvedProblems.push(problemId);
    saveProgress(progress);
  }
}

export function saveScratchpad(problemId: string, content: string): void {
  const progress = loadProgress();
  progress.scratchpad[problemId] = content;
  saveProgress(progress);
}

export function isProblemSolved(problemId: string): boolean {
  return loadProgress().solvedProblems.includes(problemId);
}

export function getScratchpad(problemId: string): string {
  return loadProgress().scratchpad[problemId] || '';
}