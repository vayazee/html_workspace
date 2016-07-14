
/*--------------------------------------------------
 아래의 코드는 지금 당장 사용할 총알 자체가 아닌,
 장차 총알을 생성해 낼 틀이다!
   
 객체 메뉴얼
 s:이 총알이 어떤 div에 붙을지를 결정하세요.
 posY: 이 총알이 어느 y좌표에서부터 날아갈지 결정하세요.
 API Document.
---------------------------------------------------*/
var Bullet=function(s,posX,posY){
//객체의 특징에 대한 값을 담고 있다고 하여 속성이라 한다.
//property 라 표기한다.
	this.stage=s;
	this.span;
	this.x=posX;
	this.y=posY;
	this.st;//나의 setTimeout을 가리키기 위한 변수

//객체안에 들어있는 함수는 method 메서드라 한다!!
//method(방법): 객체의 동작방식을 결정하는 로직이 들어있기 때문에..
	
	this.init=function(){
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		
		s.appendChild(this.span);

		this.move();
	}

	this.move=function(){
		var me=this;
		this.x+=10;
		this.span.style.left=this.x+"px";
		
		this.st=setTimeout(function(){me.move()},10);
		console.log(parseInt(this.stage.style.width));
		if(parseInt(this.span.style.left)>parseInt(this.stage.style.width)){//stage를 벗어나면 총알의 setTimeout은 멈춰야 한다.
			clearTimeout(this.st);
			this.stage.removeChild(this.span);
			return;
		}
	}
}
