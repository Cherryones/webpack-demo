const path = require('path') // node核心模块
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development', // 默认是production
  devtool: 'cheap-module-eval-source-map', // 设置了开发模式，会自动使用source-map模式
  output: {
    // publicPath: 'http://cdn.com.cn', // 配置打包输出公共路径
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist') // 绝对路径，默认文件夹dist
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 引用webpack自带的模块热更新插件
  ],
  optimization: {
    usedExports: true // 开启tree sharking
  },
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

module.exports = merge(baseConfig, devConfig)