var imgUrl = 'https://6368-chongsharp-cc-prod-1300526021.tcb.qcloud.la/wuhan/zhongnashan.jpg';
var lineLink = 'https://pxcapps.chongsharp.com/api/wuhan/index.html';
var shareTitle = '武汉加油！中国加油！';
$.ajax({
    type : 'POST',
    url :  "https://pxcapps.chongsharp.com/api/wechat/getWxConfig",
    dataType : "json",
    data:{url:window.location.href.split('#')[0]},
    success : function(res){

        console.info("====getWxConfig===",res);
        var appId = res.item.appId;
        var timestamp = res.item.timestamp;
        var nonceStr = res.item.nonceStr;
        var signature = res.item.signature;

        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });
        wx.ready(function() {

            wx.onMenuShareTimeline({
                title: shareTitle, // 分享标题
                link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    // XJJ.msg("分享成功");
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    //XJJ.msg("分享失改");
                }
            });
            wx.onMenuShareAppMessage({
                title: shareTitle, // 分享标题
                desc: '我为战“疫”中最可爱的人献上'+star_count+'个爱心，一起狂点屏幕为祖国加油吧！', // 分享描述
                link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl:'' , // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //XJJ.msg("分享成功");
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    //XJJ.msg("分享失改");
                }
            });
        });
    },
    error:function(response){

    }
});