const path = require("path");
// webpack配置文件。
module.exports = {
    mode:"development",// 指的模式
    entry:"./src/main.js",// 指定入口
    output:{
        path:__dirname+"/feng",
        // path:path.resolve(__dirname,"../"), //
        filename:"qianfeng.js"
        // 是一个对象
        // 可以是一个地址，默认是在dist文件夹下
        // filename:"../lala/zhang.js",// 指定出口的文件名字,默认是main.js
    }

}