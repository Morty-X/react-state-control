/** redux 为所有UI框架提供状态管理服务，哪怕是原生JS也可以
 * react+[state lib] redux/zustand/mobx...
 * react+react-redux+redux(同步) redux-thunk(异步)
 */

import { combineReducers, legacy_createStore as createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// ---------------------------------------------------------
// 动态导入所有位于 './reducers/' 目录下，文件扩展名为 .ts、.tsx 或 .js 的模块
// 该操作会立即执行（eager: true），并将这些模块及其默认导出的 Reducer 收集到一个对象中
// 这种方式便于管理和使用多个 reducer，而无需手动一一导入
/* const modules: Record<string, { default: Reducer }> = import.meta.glob(
  './reducers/*.{ts,tsx,js}',
  { eager: true }
); */

// 创建自动化的reducers对象
/* const reducers = Object.entries(modules).reduce((acc, [path, module]) => {
  // 从文件路径中提取reducer名称
  const name = path.match(/\.\/reducers\/(.*?)\.(ts|tsx|js)$/)![1];
  acc[name] = module.default;
  return acc;
}, {} as Record<string, Reducer>); */

import count from './reducers/count';
import todo from './reducers/todo';
/** 将所有的reducer函数联合起来 */
const rootReducer = combineReducers({ count, todo });
// ---------------------------------------------------------
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
// 调用 store.getState() 方法获取 Redux store 的当前状态。
// AppDispatch 是 count中action和todo里面action类型的联合类型
export type AppDispatch = typeof store.dispatch;

export const useAppDiapatch = () => {
  useDispatch() as AppDispatch;
};
export function useAppSelector<T>(selector: (state: RootState) => T) {
  return useSelector(selector);
}
/* -------------------------------------------------------------------------- */
// 到目前为止现在的状态管理还不能做异步操作
export default store;
