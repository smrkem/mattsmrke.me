const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, "static");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index-static.js",
  output: {
    path: DIST_DIR,
    filename: "index.js",
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
        crawl: false
    })
  ]
};

module.exports = config;
