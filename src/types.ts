export interface Concept {
  name: string;
  description: string;
  resourceTitle: string;
  resourceUrl: string;
  readTime: string;
}

export interface Hint {
  order: number;
  content: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  statement: string;
  publishDate: string;
  concepts: Concept[];
  hints: Hint[];
  solution: string;
}

export interface UserProgress {
  solvedProblems: string[];
  scratchpad: Record<string, string>;
  lastVisit: string;
}