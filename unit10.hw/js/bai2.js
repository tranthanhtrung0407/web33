function Dangki(){
	var name=document.frm.name1.value;
	var email=document.frm.email1.value;
	var psw=document.frm.psw1.value;
	var repsw=document.frm.repsw1.value;
	var phone=document.frm.phone1.value;
	

	 if(name == "")
	 {
	 	document.getElementById("ername").innerHTML="<span>Họ tên không được để trống</span>";
	 }
	 else if(name.length < 8 && name !="")
	{
		document.getElementById("ername").innerHTML="<span>Họ Tên phải lớn hơn 8 kí tự</span>";
	}
	else if(name.length >8)
	{
		document.getElementById("ername").innerHTML="Hoàn thành";
	} 

	if(email == "")
	{
		document.getElementById("eremail").innerHTML="<span>Thông tin email không được để trống</span>";
	}

	if(String(phone)=="")
	{
		document.getElementById("erphone").innerHTML="<span>Yêu cầu nhập số điện thoại</span>";
	}
	else if(String(phone).length != 10)
	{
		document.getElementById("erphone").innerHTML="<span>Số điện thoại là 10 số</span>";
	}
	else if( String(phone).length == 10)
	{
		document.getElementById("erphone").innerHTML="Hoàn thành";
	}

	if(psw=="")
	{
		document.getElementById("erpsw").innerHTML="<span>Mật khẩu không được để trống</span>";
		document.getElementById("errepsw").innerHTML="<span>Yêu cầu xác nhận mật khẩu</span>";
	}
	else if(psw != repsw){
		document.getElementById("errepsw").innerHTML="<span>Mật khẩu không khớp</span>";
	}
	else if(psw==repsw){
		document.getElementById("erpsw").innerHTML="Hoàn thành";
		document.getElementById("errepsw").innerHTML="Hoàn thành";

	}
	if( psw==repsw && String(phone).length < 12 && String(phone).length >= 10
		&& name.length >8){
		alert("Đăng kí thành công");
		Delete();
	}

}
function Delete(){
	document.frm.name1.value="";
	document.frm.psw1.value="";
	document.frm.repsw1.value="";
	document.frm.email1.value="";
	document.frm.phone1.value="";
	document.getElementById("ername").innerHTML="";
	document.getElementById("eremail").innerHTML="";
	document.getElementById("erphone").innerHTML="";
	document.getElementById("erpsw").innerHTML="";
	document.getElementById("errepsw").innerHTML="";
}

