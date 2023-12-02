import { sidebar } from "vuepress-theme-hope";

// export default sidebar({
//   "/": [
//     {
//       text: "前端",
//       prefix: "front-end-series/",
//       link: "front-end-series/",
//       children: "structure",
//     },
//     {
//       text: "源码阅读",
//       prefix: "source-code/",
//       children: "structure",
//     },
//     {
//       text: "不止前端",
//       prefix: "posts/",
//       children: "structure",
//     },
//     {
//       text: "诗歌散文",
//       prefix: "poetry/",
//       children: "structure",
//     },
//     {
//       text: "杂谈",
//       prefix: "posts/",
//       children: "structure",
//     },
//   ],
// });

export default sidebar({
  "/front-end-series/": "structure",
  "/source-code/": "structure",
  "/posts/": "structure",
  "/poetry/": "structure",
  "/others/": "structure",
});
