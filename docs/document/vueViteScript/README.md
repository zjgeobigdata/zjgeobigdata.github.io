## Introduction

基于Vite二次封装的业务脚手架,使用npm install vue-vite-script -g 安装<br />
**(注意需要前置安装babel-node 命令:npm install @babel/core @babel/node -g)**

## Feature
- 初始化新工程：vue-vite-script create &lt;projectName>
- 启动开发环境：vue-vite-script start
- 打包：vue-vite-script build
- 基于vite二次封装，由于vite利用了浏览器的esmodule特性，相比webpack省去了在开发环境下打包的时间，从而减少了服务时间
- 开发环境页面热更新
- 别名：已内置常用import引入别名
- 添加部分commonJS语法三方包支持，内部集成vite的插件 vite-plugin-commonjs 来实现这部分代码的转化
- 二次配置： 工程目录下修改dzConfig.js,相关配置参数参考vite文档，相关参数基本和vite.config.js的参数相同，脚手架内部会深度merge到vite配置中
- 自带mock服务，将mock文件放置于mock文件夹下即可
- 自带js代码压缩
- 自带autoPrefixer，css添加相应浏览器前缀
- 分包：在打包后可根据项目动态路由配置进行分包，并对vue框架和组件库进行分包，达到优化首屏加载速度的目的
- 打包后js和css和其它静态文件抽离，优化默认的打包配置
- 兼容性: 修改dzConfig.js,使用{...,legacy:true} 即可兼容低版本浏览器
- 图片压缩: 修改dzConfig.js,使用{...,imageZip:true} 即可对图片资源进行压缩
  (打包时间可能会变长，可视不同情况选择开启)

## Documentation

[Vite](https://vitejs.dev/)

## Preparation

- [node](http://nodejs.org/) and [git](https://git-scm.com/) - Project development environment
- [Vite](https://vitejs.dev/) - Familiar with vite features