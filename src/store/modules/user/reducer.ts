const defaultState = {
  username: 'morty',
  userage: 0,
  userPhone: '',
};
type Action = { type: 'SET_USER'; PAY_LOAD: typeof defaultState };
// preState(数据), action (更新数据的方法)
export const userReducer = (preState = defaultState, action: Action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.PAY_LOAD;
    default:
      return preState;
  }
};
