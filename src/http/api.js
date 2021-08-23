import axios from "axios"; //导入axios

// 创建axios实例
const instance = axios.create({
  // baseURL: "https://www.lzrlly.cn",
  timeout: 5000,
});

// 请求拦截
// 所有请求先走这个
instance.interceptors.request.use(
  function(config) {
    console.group("全局请求拦截"); //打印分组
    console.log(config);
    console.groupEnd(); //结束打印分组
    config.headers.token = "123456"; //代token的请求，当然这个token也可以改成其他的
    return config;
  },
  function(error) {
    return Promise.reject(err);
  }
);
// 响应拦截
// 所有响应先走这个
instance.interceptors.response.use(
  function(response) {
    console.group("全局响应拦截"); //打印分组
    console.log(response);
    console.groupEnd(); //结束打印分组
    return response;
  },
  function(err) {
    return Promise.reject(err);
  }
);

// 导出get函数，在外面使用
export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

// 导出psot函数，在外面使用
export function post(url, params) {
  return instance.post(url, null,{
    params,
  });
}
