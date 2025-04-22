import { UserActionType } from './types';

export const setUserInfo = (userInfo: Record<string, unknown>) => {
  return {
    type: UserActionType.SET_USERINFO,
    payload: userInfo,
  };
};

/** 拉取用户信息请求 */
export const fetchUserInfo = () => {};

export type UserAction = ReturnType<typeof setUserInfo>;
