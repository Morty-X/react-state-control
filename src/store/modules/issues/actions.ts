import type { Issues } from './types';
import { ActionType } from './types';
/**  action create:action工厂函数 */
export const setIssues = (payload: Issues[] = []) => {
  return { type: ActionType.SET_ISSUES, payload } as const;
};

export const resetIssues = () => {
  return { type: ActionType.RESET_ISSUES } as const;
};
