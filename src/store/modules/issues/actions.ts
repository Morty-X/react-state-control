import type { Issues } from './types';

export const setIssues = (payload: Issues[] = []) => {
  return { type: 'SET_ISSUES', payload } as const;
};
