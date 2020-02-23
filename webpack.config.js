const path = require('path') // node核心模块

module.exports = {
    entry: './src/index.js',
    // output: {
    //     filename: 'test.js',
    //     path: path.resolve(__dirname, 'test')
    // },
    mode: 'development',
    module: {
        rules: [
            // {
            //     test: /\.jpg$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name]_[hash].[ext]' // [name]、[hash]、[ext]占位符（placeholder）
            //         }
            //     }
            // },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 2048 // 不设置limit，默认把文件以base64格式写入到js文件，若文件过大，则影响整个js加载速度
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // loader的执行顺序：从下到上、从右至左
            }
        ]
    }
}