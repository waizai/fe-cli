#!/usr/bin/env node
// 为了让系统看到这一行的时候，会沿着该路径去查找 node 并执行，主要是为了兼容 Mac ，确保可执行


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const { resolve } = require('path');
const program = require('commander');
// __dirname返回源代码所在的目录。
const package = require(resolve(__dirname, './package.json'));


// 定义当前版本
// 定义使用方法
// 定义四个指令
program
    .version(package.version)
    .description(package.description)
    .usage('[options]')
    .option('init', '初始化项目')
    .option('dev', '本地开发')
    .option('build', '打包构建')
    // .option('eslint', 'Eslint')
    // .option('tinypng', 'Tinypng 压缩图片')
    .parse(process.argv);   // 解析命令行参数   


    if (program.init) {
        console.log('init');
        (async () => {
            try {
                initProject();
                console.log('初始化完成');
            } catch (e) {
                log(e);
            }
        })();
        return;
    }

    if( program.dev ){
        (async () => {
            try {
                require('./server');
            } catch (e) {
                log(e);
            }
        })();
    }