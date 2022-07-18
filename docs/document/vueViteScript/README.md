## Introduction

基于Vite二次封装的业务脚手架,使用npm install vue-vite-script -g 安装<br />
**(注意需要前置安装babel-node 命令:npm install @babel/core @babel/node -g)**

## Feature
- 初始化新工程：vue-vite-script create &lt;projectName>
- 启动开发环境：vue-vite-script start
- 打包：vue-vite-script build
- 二次配置： 工程目录下修改dzConfig.js,配置参数参考vite文档 
- 兼容性: 修改dzConfig.js,使用{...,legacy:true} 即可兼容低版本浏览器
- 图片压缩: 修改dzConfig.js,使用{...,imageZip:true} 即可对图片资源进行压缩
  (打包时间可能会变长，可视不同情况选择开启)

## Documentation

[Vite](https://vitejs.dev/)

## Preparation

- [node](http://nodejs.org/) and [git](https://git-scm.com/) - Project development environment
- [Vite](https://vitejs.dev/) - Familiar with vite features