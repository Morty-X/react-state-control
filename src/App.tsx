import { type FC } from 'react';
import { Login } from './views/Login';
/**
 *这里定义了一个名为App的函数组件。: FC表示App是一个React函数组件，
 *它接受一个空的props对象
 *因为没有指定具体的Props类型），并返回一个JSX元素。
 * @returns
 */
const App: FC = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
