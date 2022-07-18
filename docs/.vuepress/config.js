const navbar = require("./config/navbar");
const sidebar = require("./config/sidebar");
const { defaultTheme } = require("vuepress");
module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DZ-FRONTEND-LIB",
  description: "浙江地质大数据前端文档",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "/img/favicon.ico",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
  }),
};
