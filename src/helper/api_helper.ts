import axios from 'axios';
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

axios.defaults.headers.post['Content-Type'] = 'application/json';

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
    }

    return Promise.reject(error.response);
  }
);

class APIClient {
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

  create = (url: string, data: any, p0?: { headers: { 'Content-Type': string } }) => {
    return axios.post(url, data, p0);
  };

  update = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: string, data: any) => {
    return axios.put(url, data);
  };

  delete = (url: string, config: any) => {
    return axios.delete(url, { ...config });
  };
}

export { APIClient };
