var Hero = function(stage,width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=0;
	this.velY=0;
	this.src=src; //사용할 이미지 경로
	
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

		this.move();
	}

	this.move=function(){
		var me=this;
		
		//충돌검사
		collison();

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
			
		setTimeout(function(){
			me.move();
		}, 1);
	}	
	
	this.collison=function(){
		for(var i=0;i<mazeArray.length;i++){
			var result=hitTest(this.div, mazeArray[i].div);
			console.log(i+"번째와 충돌함");
		}
	}
}