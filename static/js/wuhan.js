
$(function() {

    $.backstretch("./static/img/wuhan_index.jpeg");


    //audioAutoPlay('music');

});

//有些ios手机的微信无法自动播放，用jsbridge可以监听到事件
function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    //audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}



var x = document.getElementById("media");
//x.play();
$(function(){
    $("#audio_btn").click(function(){
        $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停

        //控制背景音乐 播放或暂停
        if($(this).hasClass("rotate")){
            x.play();
        }else{
            x.pause();
        }
    })
    audioAutoPlay("media");

});



//单击加油按钮
function clickHeart() {

    //背景更换
    $.backstretch([
        "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_1.jpeg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_2.jpeg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_3.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_4.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_5.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_6.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_7.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_8.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_9.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_10.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_11.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_12.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_13.jpg"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_14.png"
        , "https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/wuhan_15.jpg"
    ], {
        duration: 2000,
        transition: 'fade', transitionDuration: 1500
    });

    $(".heart_btn").hide();


    $("#audio_btn").addClass("rotate"); 
    x.play();
}
