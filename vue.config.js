const webpack = require("webpack");
const UglifyJsPlugin = require("terser-webpack-plugin");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir); // 路径

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#2F7BFF",
            "text-color": "#505050",
            "border-color-base": "#D9D9D9",
            "menu-dark-bg": "#3d3d3d",
            "menu-dark-submenu-bg": "#2f2d2d"
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: (config) => {
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );
    config.when(!IS_PROD, (config) => config.devtool("cheap-source-map"));
    config.resolve.alias.set("@", resolve("src"));
    if (IS_PROD) {
      config.optimization.delete("splitChunks");
    }
    config.plugin("html").tap((args) => {
      args[0].title = "vue3-antd-admin管理系统";
      return args;
    });
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.plugins.push(
        new UglifyJsPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ["console.log"],
            },
          },
          extractComments: false,
          sourceMap: false,
          parallel: true,
        })
      );
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: "chunk-common",
              chunks: "initial",
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true,
            },
            vendors: {
              name: "chunk-vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "initial",
              priority: 2,
              reuseExistingChunk: true,
              enforce: true,
            },
            antd: {
              name: "chunk-ant-design-vue",
              test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
              chunks: "all",
              priority: 3,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
