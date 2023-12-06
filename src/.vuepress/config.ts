import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/awen-blog/",

  lang: "zh-CN",
  description: "Sharing some front end knowledge",

  theme,
});
