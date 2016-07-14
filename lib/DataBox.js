var DateBox=function(stage,width,height,text){
	this.div;
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.text=text;
	
	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";
		this.div.innerText=this.text;
		this.div.style.float="left";

		this.stage.appendChild(this.div);
	}
	
}