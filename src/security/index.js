import axios from "axios";

const api_url = "http://localhost:8000";
const token_key = "Hk34587sdf4aSGF54AS234";

export const APIURL = process.env.APIURL || api_url;
export const TOKEN_KEY = process.env.TOKEN_KEY || token_key;

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
      if (!error.response) {
        outPut = "Please check your internet connection";
        console.log(outPut);
      } else if (error?.response?.status === 401) {
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
