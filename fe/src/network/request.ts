import axios, { AxiosRequestConfig } from "axios";

type CustomAxiosReqConf = AxiosRequestConfig & {
  requestKey?: string
}
const requestSet = new Set<string>();

axios.interceptors.request.use(
  (config: CustomAxiosReqConf) => {
    console.log(config);
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
    const token = localStorage.getItem("token");
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
    console.warn(err);
    return Promise.reject(err)
  }
  requestSet.clear();
  return Promise.reject(err);
})


export { axios }