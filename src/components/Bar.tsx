import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// 每次使用都要导入这两个类型 是否冗余呢？可以封装我们自己的
// useSelector, useDispatch钩子函数，并做好类型定义
import type { RootState, AppDispatch } from '../store/index';
const Bar: FC = () => {
  // 使用useSelector钩子从Redux存储中获取count值
  const count = useSelector((state: RootState) => state.count);

  // 使用useDispatch钩子获取Redux分发函数
  const dispatch: AppDispatch = useDispatch();

  /**
   * 增加计数器的函数
   * 当调用此函数时，会向Redux存储分发一个类型为'INCREASE'的动作
   */
  const onIncrease = () => {
    dispatch({ type: 'COUNT/INCREASE' });
  };
  return (
    <>
      <div
        onClick={onIncrease}
        className=" border-[6px] text-[40px] font-bold border-[green] w-[300px] h-[300px] flex justify-center items-center cursor-pointer select-none"
      >
        {count}
      </div>
    </>
  );
};

export default Bar;
