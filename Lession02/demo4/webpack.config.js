//
const  {CleanWebpackPlugin}  = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        "index":"./src/main.js",
        "my":"./src/my.js"
    },
    output:{
        filename:"[name].bundle.js"
    },
    // plugins类型是一个数组。该数组的每一个元素是你要使用的plugin(插件)
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",// 指定模板地址
            // filename: "home.html",// 将打包后的文件名字进行重置，默认是index.html
            // hash:true,// 为引入JS的地址增加后缀，用于清除缓存。
            // inject: false,//  是否嵌入到HTML文件当中，默认是true
            // inject: "body"
            // inject: "head"
            // chunks: ["my","index"],// 入口属性名。并不是文件名。指定打包的文件
            // excludeChunks: ["my"],// 除了入口属性为my的文件，全部打包
            title: "大家好，你现在学的是webpack",
            arr:[1,2,3,4],
            minify: {
                removeComments:true,// 清除注释
                removeAttributeQuotes:true,// 清除双引号
                collapseWhitespace:true,// 进行折叠，去除空格
            }
        })
    ]
}