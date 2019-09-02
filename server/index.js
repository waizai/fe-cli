const fetch = require('node-fetch');
// Promise based HTTP client for the browser and node.js
const axios = require('axios');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { port, isDevelopment, isProduction } = require('../config');

const app = new Koa();

// 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
app.use(bodyParser());



  
// 开发环境
if(isDevelopment){

}else{

}
app.listen(port);