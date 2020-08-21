/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css)$/,
          algorithm: "gzip"
        })
      );
      //压缩混淆
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            parallel: true,
            cache: true,
            // https://github.com/terser/terser#minify-options
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ],
        runtimeChunk: "single",
        // 分片，防止chunk过大
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
    }
    return {
      externals: {
        "markdown-it": "markdownit",
        hljs: "hljs"
      }
    };
  },
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
    config.plugin("html").tap(args => {
      args[0].title = "这是一个页面";
      return args;
    });
  }
};
