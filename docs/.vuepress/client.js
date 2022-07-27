import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import DzDataV from "dz-datav"
import "element-plus/dist/index.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus);
    app.use(DzDataV)
  },
  setup() {},
  rootComponents: [],
});
