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
        text: "Hooks",
        children: [
          { text: "DZ-hooks", link: "/dzHooks" },
          {
            text: "vue-use",
            link: "https://vueuse.org/core/useAsyncState/",
          },
        ],
      },
    ],
  },
  { text: "规范", link: "/document/rules/" },
];
