$('.btn-show').on('click', function(){
	if( $(this).closest('.cart').hasClass('active') ){
		$(this).closest('.cart').removeClass('active');
		$(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
		$('.title').css('color','white');
	}
	else{
		$('.cart').removeClass('active');
		$('.fa').removeClass('fa-minus').addClass('fa-plus');
		$(this).closest('.cart').addClass('active');
		$(this).closest('.cart').find('.title').css('color','#80FF00');
		$(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
	}
	
});
 