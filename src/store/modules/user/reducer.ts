import type { UserAction } from './actions';
import { UserActionType } from './types';

const defaultState = {
  username: '',
  userage: '',
  userPhone: '',
};
// preState(数据), action (更新数据的方法)
export const userReducer = (
  preState = defaultState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionType.SET_USERINFO:
      return action.payload;
    default:
      return preState;
  }
};
