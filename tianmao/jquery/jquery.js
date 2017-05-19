 var btns = $(".btns li");
    btns.click(function () {

   //先过滤有active的进行移除，end()恢复到初始，然后单独添加
   btns.filter(".active").removeClass("active").end().filter(this).addClass("active");
   var index = btns.filter(this).index();
   $(".banner-neitu li").filter(".active").removeClass("active").end().eq(index).addClass("active");
 });
  var t = setInterval(move, 3000);
  var num = 0;
  function move() {
        num++;
        if (num >= btns.length) {
            num = 0;
        }
        if(num<0){
            num=btns.length-1;
        }
        btns.filter(".active").removeClass("active").end().eq(num).addClass("active");
        $(".banner-neitu li").filter(".active").removeClass("active").end().eq(num).addClass("active");
    }
    $(".bannerk").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move, 3000);
    });




 
      //楼层跳转
      $(window).scroll(function () {
        var top=$(window).scrollTop();
        if(top>450){
            $(".topmiddle").css({top:0});
            $(".fbtn").css({width:36,height:324})
        }else{
            $(".topmiddle").css({top:-50});
            $(".fbtn").css({width:0,height:0})
        }
    });



           //返回顶部
    $(".back").click(function () {
        $("body,html").animate({scrollTop:0},500,"linear")
    });




    //楼层跳转
 var fbtns=$(".zuogu");
 fbtns.click(function () {
    var findex=fbtns.filter(this).index();  //获取下标值
    var ftop=$(".floor").eq(findex).offset().top;  //获取每一层的高度
    $("body,html").animate({scrollTop:ftop},500,"linear") //动画返回或设置匹配元素的滚动条的垂直位置。
 });