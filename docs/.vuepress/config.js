const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const navbar = require("./config/navbar");
const sidebar = require("./config/sidebar");
const { defaultTheme } = require("vuepress");
const { viteBundler } = require("@vuepress/bundler-vite");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "DZ-FRONTEND-LIB",
  description: "浙江地质大数据前端文档",
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ["element-plus"],
      },
    },
  }),
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
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false, level: [1, 2] },

    // options for markdown-it-toc
    toc: { level: [1, 2] },

    extractHeaders: { level: ["h2", "h3", "h4"] },

    // disable line-numbers
    code: { lineNumbers: false },
  },
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
};
