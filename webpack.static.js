// const path = require("path");
// const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')


// const DIST_DIR = path.resolve(__dirname, "static");

// module.exports = {

//   entry: {
//     static: './src/index.static.js',
//     client: './src/index.js',
//   },

//   output: {
//     filename: '[name].js',
//     path: DIST_DIR,
//     libraryTarget: 'umd',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['es2015', 'react']
//           }
//         }
//       },
//       {
//       test: /\.css$/,
//         use: ExtractTextPlugin.extract(['css-loader'])
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: 'styles.css',
//       allChunks: true
//     }),
//     new StaticSiteGeneratorPlugin({
//         paths: [
//             '/',
//             '/about'
//         ],
//         locals: {
//           greet: 'Hello'
//         }
//     })
//   ]
      
// }