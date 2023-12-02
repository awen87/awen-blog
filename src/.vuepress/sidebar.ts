import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端基础",
      icon: "laptop-code",
      prefix: "front-end-series/",
      link: "front-end-series/",
      children: "structure",
    },
    {
      text: "前端框架",
      icon: "book",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "源码",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "后端",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "诗歌散文",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
