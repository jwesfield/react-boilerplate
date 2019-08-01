const HtmlWebPackPlugin  = require("html-webpack-plugin");
const path               = require('path');

module.exports = {
  entry: "./client/src/app.jsx",
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  }, 
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/index.html", 
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  }
};