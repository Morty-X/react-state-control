import type { IssueResType } from '../store/modules/issues/types/index';
import client from '../utils/http';

export const fetchIssues = () => {
  return client.get<IssueResType>('/github/issues');
};

export interface loginByQrResType {
  code: number;
  msg: string;
  data: Data;
}

export interface Data {
  url: string;
  qrcode_key: string;
}

/**
 * 通过二维码登录
 *
 * 此函数发起一个POST请求到/login/apply/qrcode端点，以获取登录二维码
 * 它没有参数，也没有返回值
 */
export const loginByQr = () => {
  return client.post<loginByQrResType>('/login/apply/qrcode');
};
/* -------------------------------------------------------------------------- */

export interface checkStatusResType {
  code: number;
  msg: string;
  data: QRStatusData;
  cookie: string;
}

export interface QRStatusData {
  url: string;
  refresh_token: string;
  timestamp: number;
  code: number;
  message: string;
}

/**
 * 检查登录二维码的状态
 *
 * 该函数通过发送POST请求到指定的接口，来检查登录二维码的当前状态它用于验证用户是否已经通过扫描二维码登录
 *
 * @param key 用于标识二维码的唯一键值，通过该键值来查询二维码的状态
 * @returns 返回一个Promise对象，解析后包含二维码状态的相关信息
 */
export const checkStatus = (key: string) => {
  return client.post<checkStatusResType>(
    '/login/qrcode',
    {},
    { params: { key } }
  );
};
