const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
  return {
    mode: "development",
    resolve: {
      extensions: ['*', '.js', '.jsx', '.css']
    },
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve('public'),
      filename: 'app.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      compress: true,
      hot: true,
      port: 3001,
      publicPath: "/", //should provide the path of the served js , img , etc...
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: "2",
                targets: {
                  browsers: ['last 2 versions', 'ie >= 9'],
                },
              }],
              '@babel/preset-react'
            ]
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
      new Dotenv({
        path: `.env`
      }),
    ],
  }
}