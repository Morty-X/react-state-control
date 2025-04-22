/** redux 为所有UI框架提供状态管理服务，哪怕是原生JS也可以
 * react+[state lib] redux/zustand/mobx...
 * react+react-redux+redux(同步) redux-thunk(异步)
 */
import { rootReducer } from './rootReducer';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  type Middleware,
  type Action,
} from 'redux';
import { TypedUseSelectorHook } from 'react-redux';
// 中间件的工厂函数
import { createLogger } from 'redux-logger';
import { useSelector, useDispatch } from 'react-redux';
// 提供异步处理功能的中间件 (thunk)
import { thunk, type ThunkAction, type ThunkDispatch } from 'redux-thunk';
import { persistStore } from 'redux-persist';
// ---------------------------------------------------------
// 判断当前环境是否是开发环境
const isDev = import.meta.env.DEV;
console.log('🚀 ~ isDev:', isDev);

// 默认配置 开发&生产环境公用的中间件
const middleware: Middleware[] = [thunk];
if (isDev) {
  /** 生成日志的中间件 */
  const logger = createLogger();
  // 追加开发环境中使用的中间件
  middleware.push(logger);
}

// 接着将这个中间件->增强器
const enhancer = applyMiddleware(...middleware);
// 数据仓库 rootReducer(根reducer) 的作用就是执行我们派发动作的逻辑
// 它可以传入三个参数，reducer为必传项
// createReducer(reducer,preloadedState?, enhancer?)
export const store = createStore(rootReducer, undefined, enhancer);

export const persistor = persistStore(store);

// 根state(状态)类型
type RootState = ReturnType<typeof store.getState>;

// 这个类型只满足同步dispatch的场景
// 在继承了thunk-redux后 我们需要考虑将 AppDispatch
// 满足多场景(同步，异步)场景
// 借助thunk-redux提供的工具类型 ThunkDispatch<根状态类型，额外的参数类型(异步函数)，Action类型>
// type AppDispatch = () => typeof store.dispatch;

export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;

export type AppThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  Action
>;

// 函数并未发生变化，只是明确了它的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 分发处理逻辑
export const useAppDispatch: () => AppDispatch = useDispatch;
