const path = require('path') // node核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 默认是production
  devtool: 'cheap-module-eval-source-map', // 设置了开发模式，会自动使用source-map模式
  entry: {
    index: './src/index.js',
    // sub: './src/index.js'
  },
  output: {
    // publicPath: 'http://cdn.com.cn', // 配置打包输出公共路径
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist') // 绝对路径，默认文件夹dist
  },
  module: {
      rules: [
        // {
        //   test: /\.jpg$/,
        //   use: {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name]_[hash].[ext]', // [name]、[hash]、[ext]占位符（placeholder）
        //       outputPath: 'images/' // 打包输出目录
        //     }
        //   }
        // },
        {
          test: /\.(jpg|png|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/', 
              limit: 2048 // 大于2048kb的图片不打包到js文件中
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] // loader的执行顺序：从下到上、从右至左
        },
        {
          test: /\.scss$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 通过import引入的scss文件也要执行下面的两个loader
              modules: true // 开启css模块化打包，减少css文件的耦合性
            }
          }, 'postcss-loader', 'sass-loader'] 
        },
        {
          test: /\.(eot|svg|ttf|woff)/,
          use: 'file-loader'
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html'
    }), // 在打包结束后自动生成index.html，并把打包生成的js文件自动引入其中
    new CleanWebpackPlugin(), // 自动清空dist
    new webpack.HotModuleReplacementPlugin() // 引用webpack自带的模块热更新插件
  ],
  devServer: { // 开启服务
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 9090, // 设置服务端口
    proxy: { // 设置代理，允许跨域
      '/api': 'http://xxxx:3000'
    },
    hot: true, // 开启模块热更新
    hotOnly: true // 可不设置，在某些模块不支持热更新的情况下，不刷新页面，而是在控制台输出热更新失败
  }
}