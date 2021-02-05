$(document).ready(function(){
	$('img').on('click', function(){
		$('#zoom').css({
			'display':'block',
		});
		$('.imgzoom').attr('src', $(this).attr('src'))
		$('.alt').text($(this).attr('alt'))
	})
	$('.close').on('click', function(){
		$(this).parent().css({
			'display':'none',
		})
	})
})