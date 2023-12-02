import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/front-end-series/",
  {
    text: "源码阅读",
    icon: "iconfont icon-read",
    prefix: "/source-code/",
    children: [
      {
        text: "React",
        icon: "pen-to-square",
        prefix: "react/",
        children: [
          { text: "Page1", icon: "pen-to-square", link: "1" },
        ],
      },
    ],
  },
    "/beyond-frontend",
    "/poetry",
    "/others",
  "introduction",
]);
