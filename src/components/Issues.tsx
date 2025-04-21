import type { FC } from 'react';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/index';
// import { fetchIssues } from '../api/index';
import {
  resetIssues,
  setIssuesAsync,
} from '../store/modules/issues/actions';
export const Issues: FC = () => {
  const issues = useAppSelector((state) => state.issues);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setIssuesAsync());
  }, []);

  // useEffect(() => {
  //   fetchIssues()
  //     .then((result) => {
  //       console.log(result.data.data);
  //       // action对象：告诉reducer如何去更新以及使用什么数据更新
  //       // dispatch({ type: 'SET_ISSUES', payload: result.data.data });
  //       dispatch(setIssues(result.data.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <div>
        <p>这是一个Issues列表</p>
        <ul>
          {issues.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
        <button onClick={() => dispatch(resetIssues())}>
          重置issues列表
        </button>
      </div>
    </>
  );
};
