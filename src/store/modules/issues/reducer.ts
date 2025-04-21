import type { Action, Issues } from './types';
import { ActionType } from './types';

const defaultState: Issues[] = [];
export const issueReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ISSUES:
      return action.payload;
    case ActionType.RESET_ISSUES:
      return [];
    default:
      return state;
  }
};
