import { useEffect, type FC, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { checkStatus, loginByQr } from '../api';
export const Login: FC = () => {
  console.log('render...');

  // 静态作用域+不可变数据
  // 函数定义的时候 函数内部变量的取值链路就已经决定 不会收到函数被谁执行
  // 怎么执行的而影响
  // 组件的状态每一次更新都会产生一个新的引用 内存地址都不一样

  const [qr, setQr] = useState({ qrcode_key: '', url: '' });

  // 获取二维码请求
  useEffect(() => {
    loginByQr()
      .then((result) => {
        console.log(result.data.data);
        setQr(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 轮巡发送请求获取二维码的状态

  // 此时依赖于 [] 状态的更新 里面的逻辑才会重新执行
  useEffect(() => {
    setInterval(() => {
      // qr是不可变数据，在组件第一次被渲染时就被定义，
      // 这里useEffect里面打印qr.qrcode_key始终是其初始值
      // 但实际上在上个useEffect中当请求成功之后 qr的状态就已经被改变
      // 这也可以说是受到函数静态作用域的影响
      // 要向消除这种影响，我们可以使用useRef设置可变数据

      // 一直是对初始值的引用
      console.log('interval', qr.qrcode_key);
    }, 2000);
  }, []);
  // 可变数据(数据可以变化，数据的更新也不会触发组件的重新渲染)
  // 数据的引用都是相同的
  // 穿越整个渲染周期而引用不会变化（一般用来定义可变数据）
  // 同时它还具备额外的功能：获取dom
  // const qrcode_key = useRef('');

  // // 定时器，用于后续轮巡发送请求
  // const timer = useRef<number>(null);

  // // 二维码是否有效
  // const [isQrValid, setIsQrValid] = useState(true);

  // useEffect(() => {
  //   loginByQr()
  //     .then((result) => {
  //       setQr(result.data.data.url);
  //       console.log(result.data);
  //       qrcode_key.current = result.data.data.qrcode_key;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   checkStatus('984e5abc015de8190ee5c5232f0acbc4')
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="w-screen h-screen overflow-auto bg-red-300">
        {/* 条件渲染 */}
        {qr ? <QRCode value={qr.url} /> : null}
      </div>
    </>
  );
};
