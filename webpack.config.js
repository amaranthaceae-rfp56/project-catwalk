const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.(jsx|js)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'client/dist'),
    },
    compress: true,
    port: 9000,
  },

  // output: {
  //   path:path.resolve(__dirname, "client/dist")
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "client/dist", "index.html"),
  //   }),
  // ],
};