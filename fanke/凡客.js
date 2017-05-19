 
	// banner轮播开始
 	var container1=document.querySelector(".container");
	var cons1=document.querySelectorAll(".top li");
	var btns1=document.querySelectorAll(".lunbo li");
	var jian1=document.querySelector(".left-jian")
	var jian2=document.querySelector(".right-jian")

	var obj=btns1[0];
	var newcons=cons1[0];
	Array.from(btns1).forEach(function (ele,index) {
		ele.onmouseover=function () {
			num1=index;
			obj.style.background="rgba(0,0,0,0.5)";
			newcons.style.zIndex="1";
			newcons.style.opacity="0";
			btns1[index].style.background="rgba(255,255,255,0.5)";
			cons1[index].style.zIndex="2";
			cons1[index].style.opacity="1";
			obj=btns1[index];
			newcons=cons1[index];
		}
	});
	var num1=0;
	var t=setInterval(move1,2000);
	function move1(){
		num1++;
		if(num1==btns1.length){
			num1=0;
		}
		if(num1==-1){
			num1=btns1.length-1;
		}
		obj.style.background="rgba(0,0,0,0.5)";
		newcons.style.zIndex="1";
		newcons.style.opacity="0";
		btns1[num1].style.background="rgba(255,255,255,0.5)";
		cons1[num1].style.zIndex="2";
		cons1[num1].style.opacity="1";
		obj=btns1[num1];
		newcons=cons1[num1];
	};
	jian1.onclick=function () {
		move1()
	}
	jian2.onclick=function () {
		move1();
		num1-=2;	
	}
	container1.onmouseover=function () {
		clearInterval(t);
	};
	container1.onmouseout=function () {
		t=setInterval(move1,2000)
	}

	// banner结束
	// 
	// 
	

	//楼层跳转开始
    var btns=document.querySelector(".dibu1.a"); 
    console.log(btns)   
    //楼层跳转
        btns.onclick=function () {   //按钮点击事件
            window.animate(document.body,{scrollTop:0});
            //有五个属性:对象、操作属性、时间、运动效果、回调函数
       }

	
	
	


	