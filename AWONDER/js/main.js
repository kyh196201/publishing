window.addEventListener('DOMContentLoaded', e => {
	const mainBannerSwiper = new Swiper('.main-banner__swiper', {
		loop: true,
	  
		pagination: {
		  el: '.main-banner__swiper .swiper-pagination',
		},
	  
		navigation: {
		  nextEl: '.main-banner__swiper .swiper-button-next',
		  prevEl: '.main-banner__swiper .swiper-button-prev',
		},
	});

	const wonderPriceSwiper = new Swiper('.wonder-price__swiper', {
		loop: true,
	  
		pagination: {
		  el: '.wonder-price__swiper .swiper-pagination',
		},
	  
		navigation: {
		  nextEl: '.wonder-price__swiper .swiper-button-next',
		  prevEl: '.wonder-price__swiper .swiper-button-prev',
		},
	});
});