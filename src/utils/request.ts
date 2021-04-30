import axios from "axios";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/" : process.env.VUE_APP_API,
  timeout: 20000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
