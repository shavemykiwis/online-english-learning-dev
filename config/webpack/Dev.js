"use strict";

/**
 * Default dev server configuration.
 */
const webpack = require("webpack");
const WebpackBaseConfig = require("./Base");

class WebpackDevConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      devtool: "cheap-module-source-map",
      entry: [
        "webpack-dev-server/client?http://0.0.0.0:3000/",
        "webpack/hot/only-dev-server",
        "react-hot-loader/patch",
        "./client.js"
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        }),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": '"development"'
        })
      ]
    };

    this.config.module.rules = this.config.module.rules.concat([
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        loaders: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]);

    // console.log(this.config.module.rules);
  }
}

module.exports = WebpackDevConfig;
