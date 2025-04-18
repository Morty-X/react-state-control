import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Bar: FC = () => {
  // 使用useSelector钩子从Redux存储中获取count值
  const count = useSelector((state) => state.count);

  // 使用useDispatch钩子获取Redux分发函数
  const dispatch = useDispatch();

  /**
   * 增加计数器的函数
   * 当调用此函数时，会向Redux存储分发一个类型为'INCREASE'的动作
   */
  const onIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };
  return (
    <>
      <h1
        onClick={onIncrease}
        className=" border-[6px] border-[green] w-[300px] h-[300px] cursor-pointer select-none"
      >
        {count}
      </h1>
    </>
  );
};

export default Bar;
