$('.btn-next').on('click', function(){
	var that = $('nav-bar .btn.active');
	$('nav-bar .btn').removeClass('active');
	that.next().addClass('active');

	$('.content .nav-item').removeClass('active');
	var dataId = $('nav-bar .btn.active').data('id');
	$('#'+dataId+'').parent().addClass('active');
});

function validate(){
	var flag=true;
	return flag;
	

}
