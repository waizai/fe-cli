// webpack.prod.js
// 存放 prod 配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
    module: {},
    plugins: [],
    mode: 'production',
});
