import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "阿文的前端小世界",
  description: "Sharing some front end knowledge",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
