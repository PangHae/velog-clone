import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

// const requestApi = axios.create({
//   baseURL: process.env.REACT_APP_URL,
// });

export {};
