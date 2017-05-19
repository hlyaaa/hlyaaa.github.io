var lione=document.querySelector(".topright ul .lione");
var litwo=document.querySelector(".topright ul .litwo");

var saoma=document.querySelector(".saoma");
var logintwo=document.querySelector(".logintwo");

var shouyelis=document.querySelector(".shouyeli");
var dhts=document.querySelector(".daohang-two");

	lione.onmouseover=function(){
		logintwo.style.display="block";
	}
	lione.onmouseout=function(){
		logintwo.style.display="none";
	}

	litwo.onmouseover=function(){
		saoma.style.display="block";
	}
	litwo.onmouseout=function(){
		saoma.style.display="none";
	}

	shouyelis.onmouseover=function(){
		dhts.style.display="block";
	}
	shouyelis.onmouseout=function(){
		dhts.style.display="none";
	}


	// banner js
 var banner=document.querySelector(".banner2");
    var imgs=document.querySelectorAll(".tu li");
    var btns=document.querySelectorAll(".btn li");
    var prev=document.querySelector(".prev");
    var next=document.querySelector(".next");
    var flag=true;
    var num=0;
    var z=5;
    var t=setInterval(move,3000);
    function move() {
        imgs[num].classList.add("leftOut");
        btns[num].classList.remove("red");

        num++;
        if(num==imgs.length){
            num=0;
        }
        imgs[num].classList.add("leftIn");
        btns[num].classList.add("red");
        imgs[num].style.zIndex=z++;
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend",function () {
            img.className="";
            flag=true;

        })
    })
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,3000);
    }
    btns.forEach(function (btn,index) {
        btn.onclick=function () {
            if(num==index){
                return;
            }
            if(index>num){
                imgs[num].classList.add("leftOut");
                btns[num].classList.remove("red");
                imgs[index].classList.add("leftIn");
                 btns[index].classList.add("red");
            }else{
                imgs[num].classList.add("rightOut");
                btns[num].classList.remove("red");
                imgs[index].classList.add("rightIn");
                btns[index].classList.add("red");
            }

            imgs[index].style.zIndex=z++;
            num=index;
        }


    })

    next.onclick=function () {
        if(flag){
            flag=false;
            move();
        }

    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            imgs[num].classList.add("rightOut");
            btns[num].classList.remove("red");

            num--;
            if(num==-1){
                num=imgs.length-1;
            }
            imgs[num].classList.add("rightIn");
            btns[num].classList.add("red");
            imgs[num].style.zIndex=z++;
        }

    }





// 公告js开始
var smallbox=document.querySelector(".smalllun>ul");
var smallitem=document.querySelectorAll(".small-item");
var smallleft2=document.querySelector(".small-zuo");
var smallright2=document.querySelector(".small-you");
var nummun=0;
setInterval(small,5000);
function small() {
    smallbox.removeChild(smallitem[nummun]);
    smallbox.appendChild(smallitem[nummun]);
    nummun++;
    if(nummun==4){
        nummun=0;
    }
}
smallright2.onclick=function () {
    small();
};
smallleft2.onclick=function () {
    small();
};

// 公告js结束



// 轮播图开始
var rongqi=document.querySelector(".luntu");
var inner=document.querySelector(".luntu ul");
var len=document.querySelectorAll(".luntu li");
var yhprev=document.querySelector(".lunbo .zjt");
var yhnext=document.querySelector(".lunbo .yjt");
var num1=4;
var t1=setInterval(move1,2000)
function move1() {
   
    inner.style.transition="all 1s";
    num1++;
    inner.style.marginLeft=num1*-295+"px";
}
inner.addEventListener("transitionend",function () {
    if(num1==12){
        inner.style.transition="none";
        inner.style.marginLeft=0;
        num1=4;
        inner.style.marginLeft=-295*num1+"px";
    }
    flag=true;
})
rongqi.onmouseover=function () {
    clearInterval(t1);
}
rongqi.onmouseout=function () {
    t1=setInterval(move1,2000);
}
yhnext.onclick=function () {
    if(flag){
        flag=false;
        move1();
    }
}
yhprev.onclick=function () {
   if(flag){
    flag=false;
    num1-=2;
    move1();
   }
}


