const  HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode:"development",// 指定模式。开发
    entry:"./src/main.js",// 对象，数组，字符串
    output:{// 出口
        filename:"index.js"
    },
    // 插件：
    plugins:[
        new CleanWebpackPlugin(),// 清除之前遗留的内容
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    devServer:{
        open:true,// 是否在浏览器当中自动打开
        port:8081,// 设置端口号
        host:"127.0.0.1",// 设置访问地址
        historyApiFallback:true,
        // 代理服务
        proxy:{

            // https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
            "/m":{// 代理的前缀标识
                target:"https://m.lagou.com",// 请求的服务
                changeOrigin:true,
                pathRewrite:{
                    "^/m":""
                }
            }
        }
    },
    module:{
        // 加载转换。  css less sass 图片  jsx react es6
        rules:[
            {
                test:/.\.css$/,// 医生的药方，道士的画符，程序员的正则 天下三大奇文。
                // cnpm install style-loader css-loader -D
                loader:["style-loader","css-loader"],// 加载css 然后将css放置到style标签当中
            },{
                // less-loader 将less-->css less
                // cnpm install less-loader less -D
                test:/.\.less$/,
                loader:["style-loader","css-loader","less-loader"]
            },{
                // cnpm install sass-loader node-sass -D
                test:/.\.scss$/,
                loader:["style-loader","css-loader","sass-loader"]
            },{
                // cnpm install url-loader -D
                test:/.\.(png|gif|jpg)$/,//
                // loader:["url-loader"]
                use:[
                    {
                        loader:"url-loader",
                        query:{
                            limit:1251130, // limit指定图片的大小，当图片小于该值时怎样，大于该值时怎样。
                            outputPath:"img"// 指定图片放置的文件夹。
                        }
                    }
                ]
            }
        ]
    }
}