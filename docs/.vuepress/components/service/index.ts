import request from "dz-request";
import { ElLoading, ElMessage } from "element-plus";

let loadingInstance: any = null;
let requestNum = 0;

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum == 1) {
    loadingInstance = ElLoading.service({
      text: "努力加载中....",
    });
  }
};

const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) loadingInstance?.close();
};

const Request = request({
  loading: true,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config: any) => {
      const { loading = false } = config;
      console.log("config:", config);
      if (loading) addLoading();
      return config;
    },
    // 请求拦截器错误
    requestInterceptorsCatch: (err: any) => {
      return Promise.reject(err)
    },
    // 响应拦截器
    responseInterceptors: (res: any) => {
      const { loading = false } = res.config;
      if (loading) cancelLoading();
      const { code, message } = res.data;
      if (code == 200) return res.data;
      else {
        ElMessage.error(message);
        return Promise.reject(message);
      }
    },
    // 响应拦截器错误
    responseInterceptorsCatch: (err: any) => {
      const { loading = false } = err.config;
      if (loading) cancelLoading();
      ElMessage.error(err?.response?.data?.message || "服务端异常");
      return Promise.reject(err);
    },
  },
});

export default Request;
