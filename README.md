# webpack
项目。webpack：基于NODE.JS的是一个打包工具。
————————————————————————————————
作用：
    1、优化：工程化。vue,react cli
    2、打包:将多个文件进行压缩，打包成一个文件。带宽。
    3、转换：es6,ts,jsx,less,sass
目标：
    1、可能通过webpack对公司现有的项目进行从0开始的搭建。
    2、可能对vue,react脚手架进行添加与修改的操作。
    webpack当中的一些原理，流程。
************************************************************************************
webpack结构：
    1、入口：entry
    2、出口:output
    3、插件:plugins
    4、devServer
    5、转换：loades
    6、module
    7、mode:模式----=》开发模式   生产模式。
************************************************************************************
mode:
    开发环境（development）：敲打代码的位置。
    生产环境（production）：打完包以后放置到服务器上所属的环境。
**************************************************************
打包。配置。
0配置。不需要额外的配置。---》默认配置项。 默认将src下的index.js进行打包，打包到dist->main.js
*************************************************************
安装：
    webpack:webpack的核心模块
    webpack-cli:来执行webpack相关的命令行。
    cnpm install webpack webpack-cli -g
    webpack -v:查看当前安装的版本号。
*************************************************************
demo2:说明了将一个文件打包的同时，与其相关联的文件也会一同打包。
*************************************************************
es6当中的模块化。
*************************************************************
0配置：将src-->index.js ------>dist main.js当中
********************************************************
webpack:命令
--mode:指定打包模式：开发development 生产 production 默认是生产环境。
将多个文件打包一个：demo4
    webpack src/one.js src/two.js  --mode development
******************************
修改输出的文件名字或地址：
    --output:指定文件地址
    webpack src/one.js src/two.js  --mode development --output haha.js
***********************************
package.js:在项目的根目录当中增加该文件
    npm init -y
    {
      "scripts":{
          "build":"webpack src/one.js src/two.js --output my/haha.js  --mode development"
      }
    }
可以通过npm run build进行打包，相当于webpack src/one.js src/two.js --output my/haha.js  --mode development
*************************************
webpack.config.js
    module.exports = {
        entry:
        output:
        mode:
    }