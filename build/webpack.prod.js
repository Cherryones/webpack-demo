const path = require('path') // node核心模块
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = {
    mode: 'production',
    // devtool: 'cheap-module-source-map', // 设置了开发模式，会自动使用source-map模式
    output: {
        // publicPath: 'http://cdn.com.cn', // 配置打包输出公共路径
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist/prod') // 绝对路径，默认文件夹dist
    }
}

module.exports = merge(baseConfig, prodConfig)