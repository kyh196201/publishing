window.addEventListener('DOMContentLoaded', e => {
	const swiper = new Swiper('.main-banner__swiper', {
		loop: true,
	  
		pagination: {
		  el: '.main-banner__swiper .swiper-pagination',
		},
	  
		navigation: {
		  nextEl: '.main-banner__swiper .swiper-button-next',
		  prevEl: '.main-banner__swiper .swiper-button-prev',
		},
	  });
});