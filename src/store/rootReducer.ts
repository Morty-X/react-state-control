import { combineReducers } from 'redux';
import { counterReducer } from './modules/count/reducer';
import { userReducer } from './modules/user/reducer';
import { issueReducer } from './modules/issues/reducer';
// 数据仓库 rootReducer(根reducer) 的作用就是执行我们派发动作的逻辑
export const rootReducer = combineReducers({
  count: counterReducer,
  user: userReducer,
  issues: issueReducer,
});
