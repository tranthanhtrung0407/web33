$(document).ready(function(){
	$('.al1').on('click', function(){
		$('.menu-res').show();
		$('.menu-res').removeClass('animate__fadeOutLeft');
		$(this).css({
			'display':'none',
		})
		$('.al2').css({
			'display':'inline',
		})
	})

	$('.al2').on('click', function(){
		$('.menu-res').toggleClass('animate__fadeOutLeft');
		$(this).css({
			'display':'none',
		})
		$('.al1').css({
			'display':'inline',
		})
		$('.focus').next().hide(200);
	})

	$('.focus').on('click', function(){
		if ($(this).next().css('display') == 'none') {
			$('.focus').next().css({
				'display':'none'
			})
			$(this).next().show(500);
		} else {
			$(this).next().hide(500);
		}
	})
})