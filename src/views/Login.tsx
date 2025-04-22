import { useEffect, type FC, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { checkStatus, loginByQr } from '../api';
export const Login: FC = () => {
  console.log('render...');

  // 静态作用域+不可变数据
  // 函数定义的时候 函数内部变量的取值链路就已经决定 不会收到函数被谁执行
  // 怎么执行的而影响
  // 组件的状态每一次更新都会产生一个新的引用 内存地址都不一样

  // url的变化是为了让二维码重新渲染的，而qrcode_key的变化不需要组件重新
  // 渲染，只是得到它的最新的值

  /** 穿越整个渲染周期而引用不会变，一般用来定义可变数据
   * 它的数据更新不会触发组件的重新渲染
   */
  const qrcode_key = useRef('');

  /** 定时器 */
  const timer = useRef<number>(null);

  /** 二维码是否有效 */
  const [qrIsValid, setIsQrValid] = useState(true);

  /** 不可变数据，每一次渲染数据的引用都不相同
   * 同时它还具备额外的功能（获取DOM节点）
   */
  const [qr, setQr] = useState('');

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(divRef.current);
  }, []);

  useEffect(() => {}, [qrIsValid]);

  // 获取二维码请求，又因为点击了刷新按钮之后需要重新发送请求
  // so=>这里可以加入依赖 当依赖qrIsValid变化时里面的逻辑重新执行
  useEffect(() => {
    if (qrIsValid) {
      loginByQr()
        .then((result) => {
          console.log(result.data.data);
          // url状态的更新是为了让二维码重新渲染
          setQr(result.data.data.url);
          qrcode_key.current = result.data.data.qrcode_key;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // useEffect在组件销毁前也可以做一些事，
    // 如果useEffect的回调函数有返回值且返回值是函数
    // 相当于Vue中的 onBeforeDestroyed
    return () => clearInterval(timer.current as number);
  }, [qrIsValid]);

  // 轮巡发送请求获取二维码的状态

  useEffect(() => {
    // 把当前的定时器引用保存，后面会用到clearInterval
    timer.current = setInterval(() => {
      checkStatus(qrcode_key.current)
        .then((result) => {
          console.log(result.data.data);
          //  登录成功
          if (result.data.data.code === 0) {
            clearInterval(timer.current as number);
            // 保存登录后的用户数据
            // 跳转到首页
            // 
          } else if (result.data.data.code === 86038) {
            clearInterval(timer.current as number);
            // 无效
            setIsQrValid(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);

  // 此时依赖于 [] 状态的更新 里面的逻辑才会重新执行
  // qr是不可变数据，在组件第一次被渲染时就被定义，
  // 这里useEffect里面打印qr.qrcode_key始终是其初始值
  // 但实际上在上个useEffect中当请求成功之后 qr的状态就已经被改变
  // 这也可以说是受到函数静态作用域的影响
  // 要向消除这种影响，我们可以使用useRef设置可变数据
  // 一直是对初始值的引用

  // 可变数据(数据可以变化，数据的更新也不会触发组件的重新渲染)
  // 数据的引用都是相同的
  // 穿越整个渲染周期而引用不会变化（一般用来定义可变数据）
  // 同时它还具备额外的功能：获取dom
  // const qrcode_key = useRef('');

  // // 定时器，用于后续轮巡发送请求
  // const timer = useRef<number>(null);

  // // 二维码是否有效
  // const [isQrValid, setIsQrValid] = useState(true);

  return (
    <>
      <div
        ref={divRef}
        className="w-screen h-screen overflow-auto bg-red-300"
      >
        {/* 条件渲染 */}
        {qr ? (
          <QRCode value={qr} fgColor={qrIsValid ? 'black' : '#eee'} />
        ) : null}
        {!qrIsValid ? (
          <button onClick={() => setIsQrValid(true)}>
            刷新二维码按钮
          </button>
        ) : null}
      </div>
    </>
  );
};
