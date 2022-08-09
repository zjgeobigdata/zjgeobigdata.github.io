## 创建工程规范
使用vue-vite-script创建工程
在控制台输入命令:vue-vite-script create &lt;projectName><br/>
回车后如图所示：<br/>
![图片](https://s1.328888.xyz/2022/08/05/jpxrC.jpg)<br/>
根据需要选择相应的选项，创建工程，如为大屏项目或者除中后台项目外的项目，选择空白工程。如为中后台项目，选择中后台模板工程。

## 中后台模板工程文件存放规范
![图片](https://s1.328888.xyz/2022/08/09/0zEZN.png)
- assets **静态资源文件**
- components **公共组件**
- layouts **布局文件**
- router **路由配置**
- service **请求配置**
- store **全局状态管理**
- utils **工具管理**
- views **页面管理**

## 中后台模板前端界面
![图片](https://s1.328888.xyz/2022/08/09/0zt3N.png)
Tips:**已集成权限控制和登入登出逻辑，在此基础上进行开发即可**
<br/>
**模板仓库地址**：http://gitea-a0s714-http.geo.172.168.80.125.nip.io:32538/huzhiwei/geobigdata-frontend-template/src/branch/manage-system