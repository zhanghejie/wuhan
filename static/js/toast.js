
var Toast = function(config){
    this.context = config.context==null?$('body'):config.context;//涓婁笅鏂�
    this.message = config.message;//鏄剧ず鍐呭
    this.time = config.time==null?3000:config.time;//鎸佺画鏃堕棿
    this.left = config.left;//璺濆鍣ㄥ乏杈圭殑璺濈
    this.top = config.top;//璺濆鍣ㄤ笂鏂圭殑璺濈
    this.init();
}
var msgEntity;
Toast.prototype = {
    //鍒濆鍖栨樉绀虹殑浣嶇疆鍐呭绛�
    init : function(){
        $("#toastMessage").remove();
        //璁剧疆娑堟伅浣�
        var msgDIV = new Array();
        msgDIV.push('<div id="toastMessage">');
        msgDIV.push('<span>'+this.message+'</span>');
        msgDIV.push('</div>');
        msgEntity = $(msgDIV.join('')).appendTo(this.context);
        //璁剧疆娑堟伅鏍峰紡
        var left = this.left == null ? this.context.width()/2-msgEntity.find('span').width()/2-20 : this.left;
        //var top = this.top == null ? '20px' : this.top;
        var bottom = this.bottom == null ? '50vh' : this.bottom;
        msgEntity.css({position:'absolute',bottom:bottom,'z-index':'99',left:left,'background-color':'black',color:'white','font-size':'14px','border-radius':'5px',padding:'10px',margin:'10px'});
        msgEntity.hide();
    },
    //鏄剧ず鍔ㄧ敾
    show :function(){
        msgEntity.fadeIn(this.time/2);
        msgEntity.fadeOut(this.time/2);
    }

}