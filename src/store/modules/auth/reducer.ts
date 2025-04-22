import { AuthActionType, type AuthAction } from './types/type';
import { produce } from 'immer';
type AuthState = {
  cookie: string;
};
const defaultState: AuthState = {
  cookie: '',
};
// 用户信息模块
export const authReducer = (
  preState: AuthState = defaultState,
  action: AuthAction
) => {
  switch (action.type) {
    case AuthActionType.SET_COOKIE:
      return produce(preState, (draft) => {
        draft.cookie = action.payload;
      });
    case AuthActionType.REMOVE_COOKIE:
      return produce(preState, (draft) => {
        draft.cookie = '';
      });
    default:
      return preState;
  }
};
