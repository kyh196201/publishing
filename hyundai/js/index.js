'use strict';
import { createSwiper } from './swiper/index.js';

// 클래스 명
const ACTIVE_CN = 'active';
const PAUSED_CN = 'paused';
const OPENED_CN = 'opened';

$(document).ready((e) => {
  // 엘리먼트
  const $langBtn = $('.lang-btn');
  const $mainBannerBtn = $('#main-banner-play');
  const $mainBannerPaginations = $('.banner-list__pagination');

  // 스와이퍼 인스턴스
  let mainBannerSwiper = null;
  let benefitSwiper = null;

  //   메인 배너 페이지네이션 액티브 페이지네이션 변경
  function updateMainBannerPagination(index = 0) {
    const $li = $mainBannerPaginations.find('li');

    if (!$li.length) return;

    $li.removeClass(ACTIVE_CN);
    $li.eq(index).addClass(ACTIVE_CN);
  }

  // 스와이퍼 실행 함수
  function initMainBannerSwiper() {
    console.log('### init main banner swiper');

    mainBannerSwiper = createSwiper('.banner-list__swiper', {
      loop: false,

      navigation: {
        nextEl: '.banner-list__navigation .swiper-button-next',
        prevEl: '.banner-list__navigation .swiper-button-prev',
      },

      autoplay: true,

      speed: 500,

      on: {
        init: function () {
          updateMainBannerPagination(this.activeIndex);
        },
      },
    });

    mainBannerSwiper.on('activeIndexChange', function ({ activeIndex }) {
      updateMainBannerPagination(activeIndex);
    });
  }

  function initBenefitSwiper() {
    console.log('### init benefit swiper');

    benefitSwiper = createSwiper('#benefit-swiper', {
      loop: false,

      navigation: {
        nextEl: '.month-benefit__swiper__navigation .swiper-button-next',
        prevEl: '.month-benefit__swiper__navigation .swiper-button-prev',
      },

      pagination: {
        el: '.month-benefit__swiper__pagination',
        clickable: true,
      },

      autoplay: false,

      speed: 500,
    });
  }

  //   스와이퍼 공통 실행 함수
  function initSwipers() {
    console.log('### init swipers');

    initMainBannerSwiper();
    initBenefitSwiper();
  }

  // 이벤트
  function bindEvents() {
    console.log('### bind events');

    // 메인 배너 플레이 버튼 클릭 이벤트
    $mainBannerBtn.on('click', function (e) {
      if (!mainBannerSwiper) {
        return false;
      }

      const self = $(this);
      const { running } = mainBannerSwiper.autoplay;

      //   autoplay 실행 중
      if (running) {
        self.addClass(PAUSED_CN);
        mainBannerSwiper.autoplay.stop();
      } else {
        self.removeClass(PAUSED_CN);
        mainBannerSwiper.autoplay.start();
      }
    });

    // 메인 배너 페이지네이션 클릭 이벤트
    $mainBannerPaginations.on('click', function (e) {
      const $pagination = $(e.target).closest('li');

      const index = $pagination.index();

      if (!mainBannerSwiper) return false;

      mainBannerSwiper.slideTo(index);
    });

    $langBtn.on('click', function (e) {
      const $lang = $(e.target).closest('.header__nav__item.lang');
      $lang.toggleClass(OPENED_CN);
    });
  }

  function init() {
    console.log('### init');

    initSwipers();
    bindEvents();
  }

  init();
});
