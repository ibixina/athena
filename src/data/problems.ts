import type { Problem } from '../types';

const problemModules = import.meta.glob<{ default: Problem }>('../../problems/*.json', { eager: true });

const problems: Problem[] = Object.values(problemModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.publishDate.localeCompare(b.publishDate));

export function getTodayProblem(): Problem {
  const today = new Date().toISOString().split('T')[0];
  const problem = problems.find(p => p.publishDate === today);
  if (problem) return problem;

  const daysSinceStart = Math.floor(
    (new Date().getTime() - new Date('2026-04-06').getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = ((daysSinceStart % problems.length) + problems.length) % problems.length;
  return problems[index];
}

export function getAllProblems(): Problem[] {
  return problems;
}