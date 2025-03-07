import axios from 'axios';
import { decryptData } from '../utils/cryptoUtils';
// default
// axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
// content type

// Request interceptor for adding Authorization header
// axios.interceptors.request.use(
//   async (config) => {
//     const eToken = localStorage.getItem('token');

//     if (eToken) {
//       const token = decryptData(eToken);
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  async (response) => {
    if (response && response.headers && response.headers.get) {
      const contentType = response.headers['content-type'];
      if (
        contentType &&
        contentType.indexOf('application/json') !== -1 &&
        response.request.responseType === 'blob'
      ) {
        response.data = await response.data.text();
        response.data = JSON.parse(response.data);
      }
      return response.data ? response.data : response;
    }
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      localStorage.removeItem('token');
      // localStorage.setItem('redirect_url', window.location.pathname);
      // window.location.href = "/login";
    }

    return Promise.reject(error.response);
  }
);

// intercepting to capture errors
// axios.interceptors.response.use(
//   function (response) {
//     return response.data ? response.data : response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     let message;
//     switch (error.status) {
//       case 500:
//         message = "Internal Server Error";
//         break;
//       case 401:
//         message = "Invalid credentials";
//         break;
//       case 404:
//         message = "Sorry! the data you are looking for could not be found";
//         break;
//       default:
//         message = error.message || error;
//     }
//     return Promise.reject(message);
//   }
// );

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url: string, params: { [key: string]: string | number }) => {
    let response;

    const paramKeys: string[] = [];

    if (params) {
      Object.keys(params).map((key: string) => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: string, data: any, p0?: { headers: { 'Content-Type': string } }) => {
    return axios.post(url, data, p0);
  };
  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: string, data: any) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: string, config: any) => {
    return axios.delete(url, { ...config });
  };
}

export { APIClient };
