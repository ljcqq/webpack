import React,{Component} from "react";
import "./assets/css/my.css";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Nav,
    NavLink
} from "react-router-dom"
import App from "./App";
// JSX-->jsx   xml
const str = <h1>大家好呀，欢迎来到我的直播间。</h1>;
ReactDOM.render(<App></App>,document.querySelector("#root"));




// // import "./assets/css/my.css";
// import "./assets/less/my.less"
// // import "./assets/sass/my.scss"
//
// import my from "./assets/img/my.gif";
//
// const myImg = new Image();
// myImg.src = my;
// document.body.appendChild(myImg);




// https://m.lagou.com/listmore.json?pageNo=2&pageSize=15  ajax
// axios
// import axios from "axios";
// axios.get("/m/listmore.json?pageNo=2&pageSize=15")
// .then(({data})=>{
//     console.log(data);
// })