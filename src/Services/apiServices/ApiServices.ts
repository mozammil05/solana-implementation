import axios from "axios";

// axios.defaults.baseURL = SITE_URL;
let requestToken: any = axios.CancelToken.source();

// axios request interceptor
axios.interceptors.request.use(
  (config: any) => {
    //   config.headers["api-access-token"] = token;
    return config;
  },
  (error: any) => {
    return error;
  }
);

// axios response interceptor
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return error.response;
  }
);

// function to format url as and if params
function formatUrl(url: any, params: any) {
  if (params) {
    params =
      params && Object.keys(params).length > 0
        ? `?${new URLSearchParams(params).toString()}`
        : "";
  }
  return `${url}${params}`;
}

// Get Request
export const apiCallGet = (
  baseUrl: any,
  url: any,
  params = {},
  headers?: any
): Promise<{ [key: string]: any }> =>
  new Promise((resolve, reject) => {
    const config = {
      headers,
    };
    axios.defaults.baseURL = baseUrl;
    axios
      .get(formatUrl(url, params), config)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((error: any) => {
        reject(error?.data);
      });
  });

// POST Request
export const apiCallPost = (
  baseUrl: any,
  url: any,
  data: object,
  params = {},
  headers?: any
) =>
  new Promise((resolve, reject) => {
    axios.defaults.baseURL = baseUrl;
    axios
      .post(formatUrl(url, params), Object.keys(data).length ? data : null, {
        headers: headers,
        cancelToken: requestToken.token,
      })
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error?.data);
      });
  });

// PUT Request
export const apiCallPut = (baseUrl: any, url: any, data: object, params = {}) =>
  new Promise((resolve, reject) => {
    axios.defaults.baseURL = baseUrl;
    axios
      .put(formatUrl(url, params), data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });

// Delete Request
export const apiCallDelete = (
  baseUrl: any,
  url: any,
  data: object,
  params = {}
) =>
  new Promise((resolve) => {
    axios.defaults.baseURL = baseUrl;
    axios
      .delete(formatUrl(url, params), data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((error: any) => {
        resolve(null);
      });
  });

// Cancel pending(onGoing) Post Request
export const cancelPendingPostReq = () => {
  requestToken.cancel();
  // create new cancelToken
  requestToken = axios.CancelToken.source();
};

//
