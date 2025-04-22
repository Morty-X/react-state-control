import axios from 'axios';
// 组件外使用store
import { store } from '../store';
const client = axios.create({
  // baseURL: 'https://bili-bili-api-fawn.vercel.app',
  baseURL: 'http://localhost:3000',
  timeout: 3000,
});

// 登陆成功之后需要将cookie带到服务器，所以需要再请求拦截器中加上cookie
client.interceptors.request.use(function (config) {
  const auth = store.getState().auth;
  // config设置请求头
  config.headers.set('cookie', auth.cookie);
  return config;
});
export default client;
