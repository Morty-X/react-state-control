/** redux 为所有UI框架提供状态管理服务，哪怕是原生JS也可以
 * react+[state lib] redux/zustand/mobx...
 * react+react-redux+redux(同步) redux-thunk(异步)
 */
import { rootReducer } from './rootReducer';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook } from 'react-redux';
// 中间件的工厂函数
import { createLogger } from 'redux-logger';
import { useSelector, useDispatch } from 'react-redux';
// 提供异步处理功能的中间件 (thunk)
import { thunk } from 'redux-thunk';
// ---------------------------------------------------------
// 判断当前环境是否是开发环境
const isDev = import.meta.env.DEV;
console.log('🚀 ~ isDev:', isDev);

// 默认配置 开发&生产环境公用的中间件
const middleware = [thunk];
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
// 用来选择使用那个reducer

// 得到根state类型
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = () => typeof store.dispatch;
// 函数并未发生变化，只是明确了它的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 分发处理逻辑
export const useAppDispatch: AppDispatch = useDispatch;
