
/*
    webpack compile file tools
    文件依赖
    模块化
    组件化

*/
const path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //
    // 'production' 将会自动压缩打包js
    mode: 'development',
    //
    entry: {
        index: './src/index.js',
        css: './src/scss/index.scss'
    },
    //
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js'
    },
    //
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: 'sass-loader'，
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            // {
            //     test: /\.js$/
            // }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({
        //     filename: 'style.css'
        // })
    ]

}
