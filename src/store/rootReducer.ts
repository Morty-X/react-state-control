// import { combineReducers } from 'redux';
import { counterReducer } from './modules/count/reducer';
import { userReducer } from './modules/user/reducer';
import { issueReducer } from './modules/issues/reducer';
import { authReducer } from './modules/auth/reducer';
import { persistCombineReducers } from 'redux-persist';

import localstorage from 'redux-persist/es/storage';

// 单独对每一个模块进行持久化
// 数据仓库 rootReducer(根reducer) 的作用就是执行我们派发动作的逻辑
// export const rootReducer = combineReducers({
//   count: counterReducer,
//   user: userReducer,
//   issues: issueReducer,
//   auth: authReducer,
// });
export const rootReducer = persistCombineReducers(
  {
    key: 'bilibili',
    storage: localstorage,
  },
  {
    count: counterReducer,
    user: userReducer,
    issues: issueReducer,
    auth: authReducer,
  }
);
