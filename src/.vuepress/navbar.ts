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
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Vue",
        icon: "pen-to-square",
        prefix: "vue/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
    ],
  },
    "/beyond-frontend",
    "/poetry",
    "/others",
  "introduction",
]);
