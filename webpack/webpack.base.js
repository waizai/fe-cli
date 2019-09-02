const { resolve, relative, dirname } = require('path');
const glob = require('glob');
const { isDevelopment, isProduction } = require('../config');
// resolve 方法用于将相对路径转为绝对路径。
const resolveRootPath = (to = '', from = root) => {
    return resolve(from, to);
};


// page入口
// process.cwd()返回当前工作目录
const root = process.cwd();
const nodeModulePath = resolveRootPath('node_modules');
const tempPath = resolveRootPath('.cache/parce', nodeModulePath);
const entry = {};

const view = resolveRootPath('src/view');
const viewCacheDirectory = resolve(tempPath, 'view');
// glob 遍历某个文件夹下面的所有文件。
const entryFiles = glob.sync(`${view}/**/index.vue`);
entryFiles.forEach(filePath => {
    // dirname 返回路径中代表文件夹的部分
    // relative 返回第二个路径相对于第一个路径的那个相对路径。
    const entryKey = dirname(relative(view, filePath));
    const entryVal = resolve(viewCacheDirectory, entryKey, 'index.js');
    entry[entryKey] = entryVal;
})


// 出口
const build = resolveRootPath('dist');
const publicPath = '/fe/weibo';


module.exports = {
    entry,
    output: {
        path: build,
        filename: `static/js/[name]${isDevelopment ? '' : '.[chunkhash]'}.js`,
        publicPath: `${publicPath || ''}/`
    },
    module: {
        rules: []
    },
    plugins: [
        // 解决vender后面的hash每次都改变
        new webpack.HashedModuleIdsPlugin(),
    ],// 插件
};