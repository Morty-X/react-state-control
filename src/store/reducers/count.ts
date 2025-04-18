type Action = {
  type: 'COUNT/INCREASE' | 'COUNT/DECREASE' | 'COUNT/RESET';
};
const count = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'COUNT/INCREASE':
      return state + 1;
    case 'COUNT/DECREASE':
      return state - 1;
    case 'COUNT/RESET':
      return 0;
    default:
      return state;
  }
};
export default count;
