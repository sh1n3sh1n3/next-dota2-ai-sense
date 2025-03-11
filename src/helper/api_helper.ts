import axios from 'axios';
import { jwtDecode } from 'src/auth/context/steam/utils';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(
//   async (config) => {
//     const eToken = sessionStorage.getItem('accessToken');

//     if (eToken) {
//       config.headers.Authorization = `Bearer ${eToken}`;
//       console.log('eToken', config.headers.Authorization);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axios.interceptors.response.use(
  async (response) => {
    if (response && response.headers && response.headers['content-type']) {
      const contentType = response.headers['content-type'];
      if (contentType.includes('application/json') && response.request.responseType === 'blob') {
        response.data = await response.data.text();
        response.data = JSON.parse(response.data);
      }
    }
    return response; // Ensure a return value in all cases
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      // sessionStorage.removeItem('token');
    }

    return Promise.reject(response || error); // Ensure rejection always has a value
  }
);

class APIClient {
  static get = (url: string, params: { [key: string]: string | number }) => {
    let response;

    const paramKeys: string[] = [];

    if (params) {
      Object.keys(params).map((key: string) => {
        paramKeys.push(`${key} = ${params[key]}`);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };

  static create = (url: string, data: any, p0?: { headers: { 'Content-Type': string } }) =>
    axios.post(url, data, p0);

  static update = (url: string, data: any) => axios.patch(url, data);

  static put = (url: string, data: any) => axios.put(url, data);

  static delete = (url: string, config: any) => axios.delete(url, { ...config });
}

export { APIClient };
