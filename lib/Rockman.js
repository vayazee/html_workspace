var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=2;//y축 방향으로 얼만큼 움직일지 정도를 표현하는 변수.
	this.gravity=0.1;//중력을 표현하는 변수!
	this.falling=true;//주인공이 떨어지고 있음을 알 수 있는 변수
	this.jumping=true;//주인공이 점프중임을 알 수 있는 변수.
	this.speedCount=0;

	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.div.style.overflow="hidden";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.img.style.position="relative";
		
		this.img.style.width=this.div.style.width
		this.img.style.height=this.div.style.height

		//숨겨진 이미지의 좌표처리..
		//this.img.style.top=+

		//이미지를 div에 탑재
		this.div.appendChild(this.img);
		//div를 stage에 탑재
		this.stage.appendChild(this.div);

		this.move();
	}
	//동작을 표현하는 메서드!!
	//이 메서드를 호출자는 이미지의 경로를 인수로 넘기면 됨!!

	this.action=function(path,width,height){
		this.img.src=path;
		this.img.style.width=width+"px";
		this.img.style.height=height+"px";
		}
	
	this.jump=function(path,width,height){
		this.img.src=path;
		this.img.style.width=width+"px";
		this.img.style.height=height+"px";
	}


	this.move=function(){
		
		
		var me=this;
		
		//중력 데이터를 velY에 누적해보자!!
		this.velY+=this.gravity;

		if(this.velY>0){
			this.jumping=false;
			this.falling=true;//주인공이 떨어지고있음으로 전환
		}

		

		//블럭들과 마주쳤는지 check!!
		for(var i=0;i<blockArray.length;i++){
			var result=hitTest(this.div,blockArray[i].img);
			if(result && this.falling){
				//this.y=this.y-3;
				this.velY=0;//밟으면 떨어지지 않게 velY값을 0으로
				//this.gravity=0;
				this.falling=false;//벽돌을 밟으면 더이상 떨어지지 않음
			}
		}
		this.x+=this.velX;
		this.y+=this.velY;

		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";
		
		
		// 전역변수인 actionCount를 여기서 증가시키자!
		//speedCount가 일정시점에 도달하면..
		setTimeout(function(){
			me.move();
		},5);
		

	}
}