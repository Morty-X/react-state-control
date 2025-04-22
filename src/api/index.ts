import type { IssueResType } from '../store/modules/issues/types/index';
import client from '../utils/http';

export const fetchIssues = () => {
  return client.get<IssueResType>('/github/issues');
};

/**
 * 通过二维码登录
 *
 * 此函数发起一个POST请求到/login/apply/qrcode端点，以获取登录二维码
 * 它没有参数，也没有返回值
 */
export const loginByQr = () => {
  return client.post('/login/apply/qrcode');
};

export const checkStatus = (key: string) => {
  return client.post('/login/qrcode', {}, { params: { key } });
};
