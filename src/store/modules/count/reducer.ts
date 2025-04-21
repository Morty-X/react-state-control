const defaultState = 0;
type Action =
  | {
      type: 'INCREASE';
    }
  | {
      type: 'DECREASE';
    }
  | {
      type: 'RESET';
    };
export const counterReducer = (
  preState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case 'INCREASE':
      return preState + 1;
    case 'DECREASE':
      return preState - 1;
    case 'RESET':
      return 0;
    default:
      return preState;
  }
};
