import axios from "axios";

export const APIURL = "http://localhost:8000";
export const TOKEN_KEY = "Hk34587sdf4aSGF54AS234";

axios.defaults.baseURL = APIURL;
export let outPut = null;

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const initAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        outPut = "Wrong user or password";
        //outPut = error?.response?.data.message
      } else if (error?.response?.status === 403) {
        outPut = "You're not allowed to login in this site";
        //outPut = error?.response?.data.message
      } else {
        outPut = "It had ocurred an error";
        return Promise.reject(error);
      }
    }
  );
};
