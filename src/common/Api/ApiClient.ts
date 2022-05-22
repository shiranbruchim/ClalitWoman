import axios from 'axios';
import {log} from 'common/Utils';

const ApiClient = axios.create({
  // Later read this URL from an environment variable
  baseURL: 'https://jsonplaceholder.typicode.com',
});

ApiClient.interceptors.request.use(
  config => {
    log('Axios request config', config);
    return config;
  },
  error => {
    log('Axios request error', error);
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  response => {
    log('Axios response', response);
    return response;
  },
  error => {
    log('Axios response error', error);
    return Promise.reject(error.message);
  },
);

export default ApiClient;
