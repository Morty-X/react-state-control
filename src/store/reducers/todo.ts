import { produce } from 'immer';
type Status = 'PENDING' | 'RESOLVE' | 'DELETED';
type Todo = {
  id: number;
  message: string;
  status: Status;
};
type TodoAction = {
  type: 'TODO/ADD' | 'TODO/UPDATE';
  // 载荷
  payload: Todo;
};

// reducer函数
const todo = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case 'TODO/ADD':
      // produce 函数被用来创建一个新的状态对象。对于 'ADD' 动作，
      // 我们直接在 draft 上调用 push 方法来添加新的 Todo 项。
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case 'TODO/UPDATE':
      return;
    default:
      return state;
  }
};
export default todo;
