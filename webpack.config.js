const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
      test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader'])
      }
    ]
  },
  devServer: {
    disableHostCheck: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css'
    })
  ]
}
