module.exports = {
    mode:"development",
    // 设置成一个数组,数组当中的每一个元素即是打包的文件。
    // 可以是字符串，数组，对象
    entry:{
        one:"./src/one.js",
        two:"./src/two.js"
    },
    output:{
        // 将入口entry对象的属性名，替换[name]
        filename:"[name].bundle.js"
    }
}