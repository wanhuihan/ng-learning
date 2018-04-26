//
const path = require('path');
const webpack = require('webpack');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const env = process.env.NODE_ENV;
//获取我们在package.json里面设置的环境变量

(function(){

    if (env == "development") {

        console.log('22222222222222');

    } else {

    }

})()
