$(function(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive:[
			{
				breakpoint: 1166,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});
});