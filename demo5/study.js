const path  = require("path");
const fs = require("fs");
// console.log(__dirname);// 当前文件夹地址
// console.log(__filename);// 当前文件夹地址
// fs.readFile(__dirname+"/study.js",function (err,results) {
//     console.log(results.toString());
// })

console.log(path.resolve(__dirname,"../")) //上一级文件夹
console.log(__dirname)