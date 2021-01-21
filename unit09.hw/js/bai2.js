function Check(){
	for (var i = 0; i <8; i++) {
		document.frm.check[i].checked=true;
	}
}
function unCheck(){
	for (var i = 0; i <8; i++) {
		if (document.frm.check[i].checked=true)
			document.frm.check[i].checked=false; 
		
	}
}