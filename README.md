# webpack
## 预览 目录
### 课程一 
    * demo1 wepack --mode development 默认打包
    * demo2 文件相互依赖的打包
    * demo3 打包后引入使用
    * demo4 npm init -y package.json 配置打包 执行 npm build 
    * demo5  webpack.config.js 配置打包 执行 webpack (引入了path模块)
### 课程二 
    * demo1 配置出口文件路径和文件名
    * demo2 打包的多入口和多出口
    * demo3 引入插件clean-webpack-plugin 打包完成后自动删除上次的内容
    * demo4 引入插件html-webpack-plugin 配置打包的html文件打包后的文件并引入相应的js文件 依赖webpack webpack-cli
### 课程三
    * devServer 热更新 代理 重定向 css less sass loader  图片的插件的引入 
     图片base 64的转换与否
### 课程四 
    * 配置react开发环境
## 课程一
项目。webpack：基于NODE.JS的是一个打包工具。
作用：
    * 优化：工程化。vue,react cli
    * 打包:将多个文件进行压缩，打包成一个文件.
    * 转换：es6,ts,jsx,less,sass
目标：
    * 可能通过webpack对公司现有的项目进行从0开始的搭建。
    * 可能对vue,react脚手架进行添加与修改的操作。
    * webpack当中的一些原理，流程。
***
webpack结构：
    1、入口：entry
    2、出口:output
    3、插件:plugins
    4、devServer
    5、转换：loades
    6、module
    7、mode:模式----=》开发模式   生产模式。
***
mode:
    开发环境（development）：敲打代码的位置。
    生产环境（production）：打完包以后放置到服务器上所属的环境。
***
打包。配置。
0配置。不需要额外的配置。---》默认配置项。 默认将src下的index.js进行打包，打包到dist->main.js
***
安装：
    webpack:webpack的核心模块
    webpack-cli:来执行webpack相关的命令行。
    cnpm install webpack webpack-cli -g
    webpack -v:查看当前安装的版本号。
***
demo2:说明了将一个文件打包的同时，与其相关联的文件也会一同打包。
***
0配置：将src-->index.js ------>dist main.js当中
***
webpack:命令
--mode:指定打包模式：开发development 生产 production 默认是生产环境。
将多个文件打包一个：demo4
    webpack src/one.js src/two.js  --mode development
***
修改输出的文件名字或地址：
    --output:指定文件地址
    webpack src/one.js src/two.js  --mode development --output haha.js
***
package.js:在项目的根目录当中增加该文件

    npm init -y
    {
      "scripts":{
          "build":"webpack src/one.js src/two.js --output my/haha.js  --mode development"
      }
    }

可以通过npm run build进行打包，相当于webpack src/one.js src/two.js --output my/haha.js  --mode development
***
webpack.config.js
    module.exports = {
        entry:
        output:
        mode:
    }
## 课程二

***
* 运行webpack命令时，该命令需要与webpack.config同级别。
* 如果名字不为webpack.config.js,比如：shufu.config.js  可以通过 webpack --config shufu.config.js
demo.js:   在打包某一个JS时，会将该JS相依赖的文件一起打包。
*******************将多个文件打包成一个。多入口单出口******************************************************
demo2.js: 将多个JS进行打包
    module.exports = {
        mode:"development",
        // 设置成一个数组,数组当中的每一个元素即是打包的文件。
        entry:["./src/one.js","./src/two.js"],
        output:{
            filename:"bundle.js"
        }
    }
***************************多入口多出口******************************************
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
***
可以实现在打包时，清空原有的内容。demo3.
1、clean-webpack-plugin
    1、下载
        cnpm install clean-webpack-plugin -D
    2、引入
        const  {CleanWebpackPlugin}  = require("clean-webpack-plugin");
    3、使用
        plugins:[
            new CleanWebpackPlugin()
        ]
***
1、html-webpack-plugin:插件需要依赖 webpack webpack-cli
    1、下载
        cnpm install webpack webpack-cli -D
        cnpm install html-webpack-plugin -D
    2、引入
        const HtmlWebpackPlugin  = require("html-webpack-plugin")
    3、使用
    //
    const  {CleanWebpackPlugin}  = require("clean-webpack-plugin");

    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {

        mode:"development",

        entry:{
            "index":"./src/main.js"
        },

        output:{
            filename:"[name].bundle.js"
        },

        // plugins类型是一个数组。该数组的每一个元素是你要使用的plugin(插件)

        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template:"./public/index.html",// 指定模板地址
                filename: "home.html",// 将打包后的文件名字进行重置，默认是index.html
            })
        ]
        
    }