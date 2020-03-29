/**
 * Created by Llh on 2017/7/27.
 */
//周边页面分类信息的分开展示
$(".zhanshi").click(function(){
    $(".waikuang").html("");
    $("#allimg").html("");
    var zz=$(this).text();
    $.ajax({
        method:"post",
        url:"/fenlei.do",
        data:{
            zz:zz
        },
        success:function(data){
            var allImg=document.getElementById("allimg");
            for(var i=1;i<data.length;i++){
                allImg.innerHTML+="<li class='list-goods-pr1 pro-list-su col-lg-3 col-sm-3 col-md-3 col-xs-12'>" +
                    "<img src='"+data[i].periphery_img+"' class='img-responsive' alt=''>" +
                    "<h3>" +
                    "<em>"+data[i].periphery_name+"</em>"+
                    "<span>¥"+data[i].periphery_price+"</span>" +
                    "</h3>" +
                    "<div id='a' class='pro-list-linkOne gouwuche' onclick='cakeShop(this)'>"+
                    "<img src='images/icon_08.png' alt=''>"+
                    "加入购物车"+
                    "</div></li>"
            }
        }
    })
});
$(".waikuang").click(function(){
    var zz=$(this).find(".sb p").text();
    $(".waikuang").html("");
    $("#allimg").html("");
    $.ajax({
        method:"post",
        url:"/fenlei.do",
        data:{
            zz:zz
        },
        success:function(data){
            var allImg=document.getElementById("allimg");
            for(var i=1;i<data.length;i++){
                allImg.innerHTML+="<li class='list-goods-pr1 pro-list-su col-lg-3 col-sm-3 col-md-3 col-xs-12'>" +
                    "<img src='"+data[i].periphery_img+"' class='img-responsive' alt=''>" +
                    "<h3>" +
                    "<em>"+data[i].periphery_name+"</em>"+
                    "<span>¥"+data[i].periphery_price+"</span>" +
                    "</h3>" +
                    "<div id='a' class='pro-list-linkOne gouwuche' onclick='cakeShop(this)'>"+
                    "<img src='images/icon_08.png' alt=''>"+
                    "加入购物车"+
                    "</div></li>"
            }
        }
    })
});

$("#prompt_sure_btn").click(function(){
    window.location.href="/relogin.do";
});
function cakeShop(obj){
    $.ajax({
        type: "POST",
        url: "notice.do",
        data: {

        },
        success:function(data){
            if(data==""){
                $("#prompt_modal").modal("show")
            }else{
                //周边商品加入购物车
                var peripheryName = $(obj).parent().find("h3 em").text();//获取商品名
                console.log(peripheryName);
                $.ajax({
                    method: "post",
                    url: "/gouwuche.do",
                    data: {
                        peripheryName: peripheryName
                    },
                    success:function(data){
                        window.location.href="/gouwuche.do"
                    }
                });
            }
        }
    })
}