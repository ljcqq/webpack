// import "./assets/css/my.css";
// import "./assets/less/my.less"
// import "./assets/sass/my.scss"

import my from "./assets/img/my.gif";

const myImg = new Image();
myImg.src = my;
document.body.appendChild(myImg);




// https://m.lagou.com/listmore.json?pageNo=2&pageSize=15  ajax
// axios
// import axios from "axios";
// axios.get("/m/listmore.json?pageNo=2&pageSize=15")
// .then(({data})=>{
//     console.log(data);
// })