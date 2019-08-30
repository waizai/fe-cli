# panda-cli

|---- build //存放webpack配置类似vue-cli生成的目录
 //打包结构
|----dist
      |---- index.html
      |---- list.html
      |---- css
             |---- index.css
             |---- list.css
      |---- img
      |---- js
             |---- index.js
             |---- list.js
// 目标结构
|---- src
       |---- modules // 存放公共文件
                |---- css
                |---- js
       |---- view
               |---- index
               |---- list
// html,css,js都放入对应的文件夹