/// <reference types="vite/client" />

declare module '*.json' {
  const value: {
    id: string;
    title: string;
    difficulty: string;
    estimatedTime: string;
    statement: string;
    publishDate: string;
    concepts: {
      name: string;
      description: string;
      resourceTitle: string;
      resourceUrl: string;
      readTime: string;
    }[];
    hints: { order: number; content: string }[];
    solution: string;
  };
  export default value;
}
