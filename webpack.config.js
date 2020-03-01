const path = require('path') // node核心模块

module.exports = {
    mode: 'development', // 默认是production
    entry: './src/index.js',
    output: {
        filename: 'index.js',
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
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] 
          }
        ]
    }
}