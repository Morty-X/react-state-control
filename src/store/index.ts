/** redux 为所有UI框架提供状态管理服务，哪怕是原生JS也可以
 * react+[state lib] redux/zustand/mobx...
 * react+react-redux+redux(同步) redux-thunk(异步)
 */

import { combineReducers, legacy_createStore as createStore } from 'redux';

import count from './reducers/count';
// import todo from './reducers/todo';
// import user from './reducers/user';
// 将所有reducer联合
const rootReducer = combineReducers({
  count,
  // todo, user
});
const store = createStore(rootReducer);

export default store;
