## 完整Api说明

1.创建请求示例
```ts
import request from "dz-request";
const Request = request({
  loading: true, // 是否开启全局loading
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config: any) => {
    },
    // 请求拦截器错误
    requestInterceptorsCatch: (err: any) => {
    },
    // 响应拦截器
    responseInterceptors: (res: any) => {
    },
    // 响应拦截器错误
    responseInterceptorsCatch: (err: any) => {
    },
  },
  ...//其余字段和axios创建实例的字段一致
});
export default Request;
```

2.通用请求
```ts
  Request.dzRequest<D, T>(config: DZRequestConfig<D, T>) => Promise<DZResponse<T>>;
  //例如以下是发起了get请求
  Request.dzRequest({
    url:'xxx',
    method:"get",
    data:'xxx'
  })
```

3.特定请求
```ts
  // get请求
  Request.get<D, T>(url: string, data?: any, config?: DZRequestConfig<D, T>) => Promise<DZResponse<T>>;
  // delete请求
  Request.delete<D, T>(url: string, data?: any, config?: DZRequestConfig<D, T>) => Promise<DZResponse<T>>;
  // post请求
  Request.post<D, T>(url: string, data?: any, config?: DZRequestConfig<D, T>) => Promise<DZResponse<T>>;
  // put请求
  Request.put<D, T>(url: string, data?: any, config?: DZRequestConfig<D, T>) => Promise<DZResponse<T>>;
```

4.取消请求
```ts
  //取消特定链接的请求
  Request.cancelRequest(url: string | string[]): void;
  //取消所有请求
  Request.cancelAllRequest(): void;
```