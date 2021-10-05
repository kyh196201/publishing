window.addEventListener('DOMContentLoaded', e => {
	const visualSlider = new Swiper('.js__visual__slider', {
		loop: true,
	  
		pagination: {
		  el: '.js__visual__pagination',
		},
	  
		navigation: {
		  nextEl: '.js__visual__next-btn',
		  prevEl: '.js__visual__prev-btn',
		},
	});

	const historySlider = new Swiper('.js__history__slider', {
		loop: true,
		effect: "fade",
	});
});