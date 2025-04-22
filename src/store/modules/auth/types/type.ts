export enum AuthActionType {
  SET_COOKIE = 'SET_COOKIE',
  REMOVE_COOKIE = 'REMOVE_COOKIE',
}

export type ActionOfSetCookie = {
  type: AuthActionType.SET_COOKIE;
  payload: string;
};
export type ActionOfRemoveCookie = {
  type: AuthActionType.REMOVE_COOKIE;
};

export type AuthAction = ActionOfSetCookie | ActionOfRemoveCookie;
