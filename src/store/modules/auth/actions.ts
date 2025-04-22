// actions工厂

import { AuthActionType } from './types/type';

export const setCookie = (cookie: string) => {
  return {
    type: AuthActionType.SET_COOKIE,
    payload: cookie,
  };
};

export const removeCookie = () => {
  return {
    type: AuthActionType.REMOVE_COOKIE,
  };
};
