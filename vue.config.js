module.exports = {
  configureWebpack: {
    externals: {
      "markdown-it": "markdownit",
      "hightlight.js": "hljs"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
    config.plugin("html").tap(args => {
      args[0].title = "这是一个页面";
      return args;
    });
  }
};
