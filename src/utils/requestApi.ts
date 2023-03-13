/* eslint-disable no-console */
import axios from 'axios';

export const requestApi = axios.create();

requestApi.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
  }
);

requestApi.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);
