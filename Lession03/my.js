function laozhang(){
    function _getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    setTimeout(()=>{
        var from_code=$("#attend_nz").attr("data-from");
        $.post("/oa.php/Public/attend_nz",{from_code : from_code},function(e){
            console.log(e.msg,e.code);
            laozhang();
        });
    },_getRandom(3600000,6000000))
}
laozhang();
