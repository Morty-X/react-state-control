import { useEffect, type FC, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { checkStatus, loginByQr } from '../api';
export const Login: FC = () => {
  console.log('render...');
  const [qr, setQr] = useState('');

  // 可变数据(数据可以变化，数据的更新也不会触发组件的重新渲染)
  // 数据的引用都是相同的
  // 穿越整个渲染周期而引用不会变化（一般用来定义可变数据）
  // 同时它还具备额外的功能：获取dom
  const qrcode_key = useRef('');

  // 定时器，用于后续轮巡发送请求
  const timer = useRef<number>(null);

  // 二维码是否有效
  const [isQrValid, setIsQrValid] = useState(true);

  useEffect(() => {
    loginByQr()
      .then((result) => {
        setQr(result.data.data.url);
        console.log(result.data);
        qrcode_key.current = result.data.data.qrcode_key;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    checkStatus('984e5abc015de8190ee5c5232f0acbc4')
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   if (isQrValid) {
  //     loginByQr()
  //       .then((result) => {
  //         setQr(result.data.data.url);
  //         qrcode_key.current = result.data.data.qrcode_key;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [isQrValid]);

  // useEffect(() => {
  //   if (isQrValid) {
  //     timer.current = setInterval(() => {
  //       checkStatus(qrcode_key.current)
  //         .then((result) => {
  //           console.log(result.data.data);
  //           if (result.data.data.code === 0) {
  //             clearInterval(timer.current as number);
  //             // 保存数据到store
  //             // 接着跳转页面
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }, 1000);
  //   }
  // }, []);
  return (
    <>
      <div className="w-screen h-screen overflow-auto bg-red-300">
        <QRCode value={qrcode_key.current} />
      </div>
    </>
  );
};
