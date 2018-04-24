
/*
    webpack compile file tools
    文件依赖
    模块化
    组件化

*/

// development

const path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEV = {
    //
    // 'production' 将会自动压缩打包js
    mode: 'development',
    //
    entry: {
        index: './src/index.js',
        // css: './src/scss/test.css'
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
                // exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                }),
                // use: [
                //     "style-loader",
                //     {
                //         loader: "css-loader"
                //     },
                //     "sass-loader"
                // ]
            },

            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        // modules: true
                    }
                }]
            },

        ]
    },
    //
    devServer: {
        contentBase: './src/'
    },
    //
    target: 'node',

    plugins: [
        new ExtractTextPlugin("[name].css")
        // new ExtractTextPlugin({
        //     filename: 'style.css'
        // })
    ]

}



module.exports = DEV;
