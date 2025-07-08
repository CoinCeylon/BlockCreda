const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        process: require.resolve("process/browser"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer/"), 
      };

      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "process/browser": "process/browser.js",
      };

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"], 
        })
      );

      return webpackConfig;
    },
  },
};
