import { type FC } from 'react';
import { useAppSelector, useAppDispatch } from './store/index';
import { Issues } from './components/Issues';
/**
 *这里定义了一个名为App的函数组件。: FC表示App是一个React函数组件，
 *它接受一个空的props对象
 *因为没有指定具体的Props类型），并返回一个JSX元素。
 * @returns
 */
const App: FC = () => {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>App.tsx</div>
      <div>{count}</div>
      <div className="flex items-center justify-center gap-4">
        <button
          className=" w-[100px] rounded border-[2px] bg-sky-200"
          onClick={() => dispatch({ type: 'INCREASE' })}
        >
          增加
        </button>
        <button
          className=" w-[100px] rounded border-[2px] bg-red-500"
          onClick={() => dispatch({ type: 'DECREASE' })}
        >
          减少
        </button>
      </div>
      {/* Issues组件 */}
      <Issues />
    </>
  );
};

export default App;
