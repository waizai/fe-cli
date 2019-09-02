// webpack.dev.js
// 存放 dev 配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // devServer: { // 开发服务器
    //     contentBase: '../dist'
    // },
    module: {},
    mode: 'development',
});
