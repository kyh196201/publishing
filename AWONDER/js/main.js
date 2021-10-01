window.addEventListener('DOMContentLoaded', e => {
	const mainVisualSwiper = new Swiper('.main-visual__swiper', {
		loop: true,
	  
		pagination: {
		  el: '.main-visual__swiper .swiper-pagination',
		},
	  
		navigation: {
		  nextEl: '.main-visual__swiper .swiper-button-next',
		  prevEl: '.main-visual__swiper .swiper-button-prev',
		},
	});

	const mainHistorySwiper = new Swiper('.main-history__swiper', {
		loop: true,
	  
		pagination: {
		  el: '.main-history__swiper-wrap .swiper-pagination',
		},
	});
});