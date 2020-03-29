// 组件   模板
import React,{Component} from "react";
import axios from "axios";
export default class App extends Component{
    render(){
        return (
            <div>
                大家好，我的名字叫App.js
            </div>
        )
    }
    componentDidMount(){
        // 当组件加载完毕之后要调用的一个钩子函数。
        // console.log("1111111")
        axios.get("/m/listmore.json?pageNo=2&pageSize=15")
            .then(({data})=>{
                console.log(data);
            })
    }
}