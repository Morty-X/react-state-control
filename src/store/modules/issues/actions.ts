import type { Issues } from './types';
import { ActionType } from './types';
import { fetchIssues } from '../../../api/index';
/**  action create:action工厂函数 */
export const setIssues = (payload: Issues[] = []) => {
  return { type: ActionType.SET_ISSUES, payload } as const;
};

export const resetIssues = () => {
  return { type: ActionType.RESET_ISSUES } as const;
};

/* -------------------------------------------------------------------------- */
//定义一个异步的 action(假象) redux-thunk
// 借助 redux-thunk 中间件定义异步的action 返回的是一个异步函数
// 该函数第一个参数是dispatch
export const setIssuesAsync = () => {
  return async function (dispatch) {
    const res = await fetchIssues();
    dispatch(setIssues(res.data.data));
  };
};
