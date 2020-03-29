// webpack 基于 node  ,首先要有 node 环境。
// 导出一个模块，该模块是一个对象。mode属性。
// webpack --mode development
const path = require("path");//  内置 模块
module.exports = {
    mode:"development",// --mode
    entry:"./src/mo.js",// 指定入口文件
    // 出口。是一个对象
    output:{
        // filename:"haha.js",// 指定打包的文件名。默认是打包在dist文件当中--》dist->haha.ja
        filename:"haha.js",// 指定打包的文件名。默认是打包在dist文件当中--》dist->my->haha.ja
        path:path.resolve(__dirname,"../")+"/my"// 绝对地址 相对地址  指定地址
    }
}