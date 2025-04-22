import axios from 'axios';
// 组件外使用store
import { store } from '../store';
const client = axios.create({
  baseURL: 'http://192.168.204.207:3000',
  timeout: 3000,
});

// 登陆成功之后需要将cookie带到服务器，所以需要再请求拦截器中加上cookie
client.interceptors.request.use(function (config) {
  const auth = store.getState().auth;
  // config 设置请求头
  config.headers.set('Authorization', auth.cookie);
  return config;
});
export default client;
