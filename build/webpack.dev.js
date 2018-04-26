
const Merge = require('webpack-merge');
const webpack = require('webpack');
const CommonConfig = require('./webpack.base.js');  //导入公共基础配置

//使用“webpack-merge”将公共配置和生产配置合并
module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
