var a=document.getElementById("macdinh");
var s=text.style.fontSize;
a.addEventListener('click',function(){
	text.style.fontSize=s;
});

var b=document.getElementById("lon");
b.addEventListener('click',function(){
	var size=text.style.fontSize;
	if (text.style.fontSize==size) {
		size=parseInt(size);
		var s= size + (size * 40)/100;
		var c=s.toString()+"px";
		text.style.fontSize=c;
	}
});

var c=document.getElementById("nho");
c.addEventListener('click',function(){
	var size=text.style.fontSize;
	if(text.style.fontSize==size) {
		size=parseInt(size);
		var s=size - (size * 40)/100;
		var c=s.toString()+"px";
		text.style.fontSize=c;
	}	
});