import axios from 'axios';

const client = axios.create({
  baseURL: 'https://bili-bili-api-fawn.vercel.app',
  // baseURL: 'http://192.168.68.157:3000',
  timeout: 3000,
});

export default client;
