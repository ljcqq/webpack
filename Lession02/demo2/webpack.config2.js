module.exports = {
    mode:"development",
    // 设置成一个数组,数组当中的每一个元素即是打包的文件。
    entry:["./src/one.js","./src/two.js"],
    output:{
        filename:"bundle.js"
    }
}