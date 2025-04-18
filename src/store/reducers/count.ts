type Action = { type: 'INCREASE' | 'DECREASE' | 'RESET' };
const count = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
export default count;
