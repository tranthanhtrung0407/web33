$(function(){
var step = 1;
$("#next").click(function(){
	if (step==2){
		var error = false;
		if ($("#firstName").val().trim()==""){
			$("#firstName").next().html("This field is required!");
			error = true;
		}
		else $("#firstName").next().html("");

		if ($("#lastName").val().trim()==""){
			$("#lastName").next().html("This field is required!");
			error = true;
		}
		else $("#lastName").next().html("");

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ($("#email").val().trim()==""){
			$("#email").next().html("This field is required!");
			error = true;
		}
		else if(!filter.test($("#email").val()))
		{
			$("#email").next().html("Incorrect Email Format.");
			error = true;
		}
		else $("#email").next().html("");
		

		if ($("#address").val().trim()==""){
			$("#address").next().html("This field is required!");
			error = true;
		}
		else $("#address").next().html("");

		if ($("#age").val().trim()=="" 
			){
			$("#age").next().html("This field is required!");
		error = true;
		}
		else $("#age").next().html("");

	if (!error) {
		var age = parseInt($("#age").val());
		if (age>18) {
			step=4;
			$("#step4").addClass("active");
			$("#step2").removeClass("active");
			if(step==4){
				$("#next").html("Finish");
				$('#next').on("click",function()
				{
				if($('#term').is(":checked")==false)
				{
				    $(".er").html("&emsp;Chưa xác nhận").css("color","red");
				}
				else
						alert("Successfull!");
					
				})
			}	
		}
		else{
			step=3;
			$("#step3").addClass("active");
			$("#step2").removeClass("active");
			if(step==3){
				$('#next').on("click",function()
					{
					$("#step4").addClass("active");
					$("#step3").removeClass("active");
					})
			}	
		}
	}
					
}
if (step==1){
	var error = false;
	if ($("#username").val().trim()==""){
		$("#username").next().html("This field is required!");
		error = true;
	}
	else $("#username").next().html("");
	if ($("#password").val().trim()==""){
		$("#password").next().html("This field is required!");
		error = true;
	}
	else $("#password").next().html("");
	if ($("#confirm").val().trim()=="" || $("#confirm").val()!=$("#password").val()){
		$("#confirm").next().html("Password incorrect.");
		error = true;
	}
	else $("#confirm").next().html("");
	if (!error) {
		step++;
		$("#step2").addClass("active");
		$("#step1").removeClass("active");
	}
	}
});
});