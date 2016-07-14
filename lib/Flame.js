
/*불꽃을 정의한다! 
a는 어떤 div에 붙을지
w는 가로크기, h는 높이
posX는 초기 x좌표위치 posY는 초기 y위치
*/
var Flame=function(a,w,h,posX,posY){
	/*
	 객체지향 언어는 현실에 존재하는 사물 및 개념까지도 표현할 수 있다.
	 눈에 보이는 것들 뿐만 아니라, 추상적 개념까지도 가능하다.
	 현실의 모든 사물은 객체지향 언어에서 클래스로 표현되고,
	 해당 사물이 보유한 상태는 변수인 속성으로 표현하며,
	 해당 사물이 보유한 동작은 함수인 메서드로 표현한다.

	 하지만 변수와 함수가 객체의 소유가 될 때는 명칭이 바뀐다.
	 변수:객체가 보유한 상태를 표현한다고 해서 속성(property)
	 함수:객체가 보유한 동작방식을 표현한다고 해서 메서드(method)
	*/
	//가로 세로 위치 (상태)
	this.width=w;
	this.height=h;
	this.x=posX;//left값
	this.y=posY;//top값
	this.img;
	this.arr=new Array(4);
	this.area=a;
	this.count=0; //image를 교체하면서 보여줄 index.
	
	this.init=function(){
		//이 객체가 태어날때(메모리에 올릴때) 하고싶은 초기작업에 사용될 메서드 정의
		this.img=document.createElement("img");
		
		this.arr[0]="../images/flame/로켓1.png";
		this.arr[1]="../images/flame/로켓2.png";
		this.arr[2]="../images/flame/로켓3.png";
		this.arr[3]="../images/flame/로켓4.png";
		
		//호출자가 결정하는 영역에 붙일거임!!
		this.img.src=this.arr[this.count];
		//이미지의 가로,세로크기
		this.img.style.width=this.width+"px"
		this.img.style.height=this.height+"px"
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.area.appendChild(this.img);
		
		this.move();
	}
	
	//동작방식 정의
	this.move=function(){
		var me=this;
		this.count++;
		if(this.count>=this.arr.length) { 
			this.count=0;
		}
		
		this.img.src=this.arr[this.count];
		setTimeout(function(){me.move()},100);
		
		//이미지를 계속 교체해서 보여주자=src값을 변경
	
	}
}