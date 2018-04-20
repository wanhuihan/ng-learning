
/*
    webpack compile file tools
    文件依赖
    模块化
    组件化

*/
const path = require("path");

module.exports = {
    //
    entry: './src/index.js',
    //
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: 'index.js'
    },
    //
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 'sass-loader'
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    }

}
