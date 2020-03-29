//
const  {CleanWebpackPlugin}  = require("clean-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        three:"./src/one.js",
        five:"./src/two.js"
    },
    output:{
        filename:"[name].bundle.js"
    },
    // plugins类型是一个数组。该数组的每一个元素是你要使用的plugin(插件)
    plugins:[
        new CleanWebpackPlugin()
    ]
}