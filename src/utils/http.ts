import axios from 'axios';

const client = axios.create({
  baseURL: 'https://proapi.azurewebsites.net',
  timeout: 3000,
});

export default client;
