/** redux 为所有UI框架提供状态管理服务，哪怕是原生JS也可以
 * react+[state lib] redux/zustand/mobx...
 * react+react-redux+redux(同步) redux-thunk(异步)
 */
import { rootReducer } from './rootReducer';
import { legacy_createStore as createStore } from 'redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// ---------------------------------------------------------
// 数据仓库 rootReducer(根reducer) 的作用就是执行我们派发动作的逻辑
export const store = createStore(rootReducer);
// 用来选择使用那个reducer

// 得到根state类型
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = () => typeof store.dispatch;
// 函数并未发生变化，只是明确了它的类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 分发处理逻辑
export const useAppDispatch: AppDispatch = useDispatch;
