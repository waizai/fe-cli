#!/usr/bin/env node
// 为了让系统看到这一行的时候，会沿着该路径去查找 node 并执行，主要是为了兼容 Mac ，确保可执行
process.env.NODE_PATH = __dirname + '/../node_modules/';
const { resolve } = require('path');
const res = command => resolve(__dirname, '../commands/', command);
const program = require('commander');



program
    .version(require('../package').version)
    .usage('<command>')

program.command('init')
    .option('-f, --foo', 'enable some foo')
    .description('Generate a new project')
    .alias('i')
    .action(() => {
      require(res('init'))
    })

// 解析命令行参数
// program.parse(process.argv);

if(!program.args.length){
    program.help();
}


// console.log('hello');
