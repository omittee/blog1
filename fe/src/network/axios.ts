import axios, { AxiosRequestConfig } from "axios";

type CustomAxiosReqConf = AxiosRequestConfig & {
  requestKey?: string
}

export const tokenName = "blog1Token"
const requestSet = new Set<string>();

axios.interceptors.request.use(
  (config: CustomAxiosReqConf) => {
    const requestKey = `${config.url}|${JSON.stringify(config.params)}|${JSON.stringify(config.data)}|${config.method}`;
    if (requestSet.has(requestKey)) {
      config.cancelToken = new axios.CancelToken((cancel) => {
        cancel(`拦截重复请求：${requestKey}`);
      })
    }
    else {
      requestSet.add(requestKey);
      config.requestKey = requestKey;
    }
    const token = sessionStorage.getItem(tokenName);
    if (token) config.headers!.Authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use((response) => {
  const requestKey = (response.config as CustomAxiosReqConf).requestKey ?? "";
  requestSet.delete(requestKey);
  return Promise.resolve(response);
}, (err) => {
  if (axios.isCancel(err)) {
    return Promise.reject(err)
  }
  requestSet.clear();
  return Promise.reject(err);
})


export default axios