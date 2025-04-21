import type { Action, Issues } from './types';

const defaultState: Issues[] = [];
export const issueReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_ISSUES':
      return action.payload;
    default:
      return state;
  }
};
