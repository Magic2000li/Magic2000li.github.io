/**
 * Created by Science2050 on 2017/2/15.
 */
;(function (window,undefend) {

    var tab=document.getElementById("tab");
    var bo=document.getElementById("bo");
    var l=document.getElementById("l");
    var r=document.getElementById("r");
    var t=bo.getElementsByTagName("img");
    var h=tab.getElementsByTagName("li");

// 鼠标滑过变
    function dong(o) {
        for ( var i=0;i<h.length;i++){
            h[i].className="";
            t[i].className=""
        }
        h[o].className="ok";
        t[o].className="ok"
    }
    var flag=null;//标记
    var timer=null;
    var de=0;

// 点击切换
    for(var j=0;j<h.length;j++){
        h[j].index=j;
        h[j].onmouseover=function () {
            dong(this.index);
            flag=this.index
        }

    }
// 左按钮
    l.onclick=function () {
        if(typeof flag !=='undefind'){
            de=flag;
            flag--;
            if(flag<0){
                flag=h.length-1
            }
        }
        de-=1;
        if(de<0){
            de=h.length-1
        }
        dong(de)
    };
// 右按钮

    r.onclick=function () {
        if( typeof flag!=='undefind'){
            de=flag;
            flag++;
            if(flag>h.length-1){
                flag=0;
            }
        }
        de++;
        if(de>h.length-1){
            de=0
        }
        dong(de)
    };
// 自动
    function run() {
        clearInterval(timer);
        timer=setInterval(r.onclick,3000);

    }
    run();
// 鼠标移入
    bo.onmouseover=function () {
        clearInterval(timer)
    };
// 鼠标移出
    bo.onmouseout=function () {
        run();
    };

})(window);