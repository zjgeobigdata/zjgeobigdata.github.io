module.exports = [
  { text: "组件", link: "/components/" },
  {
    text: "工具",
    children: [
      {
        text: "脚手架",
        children: [
          { text: "vue-vite-script", link: "/document/vueViteScript/" },
        ],
      },
      {
        text: "请求库",
        children: [
          { text: "DZ-request", link: "/dzRequest" },
        ],
      },
      {
        text: "Hooks",
        children: [
          { text: "DZ-hooks", link: "/dzHooks" },
          {
            text: "VueRequest",
            link: "https://next.attojs.com/guide/introduction.html",
          },
          {
            text: "VueUse",
            link: "https://vueuse.org/core/useAsyncState/",
          },
        ],
      },
    ],
  },
  { text: "规范", link: "/document/rules/" },
];
