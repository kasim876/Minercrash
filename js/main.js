"use strict";
"use strict";

var burgerBtn = document.querySelector('.burger');
var burgerMenu = document.querySelector('.header-nav');
var overlay = document.querySelector('.overlay');

var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};

var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('header-nav--active');
  burgerBtn.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');

  if (burgerBtn.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }
});
"use strict";

console.log('maxgraph');
"use strict";

var selects = document.querySelectorAll(".contacts-form__select");
selects.forEach(function (item) {
  var choises = new Choices(item, {
    searchEnabled: false,
    shouldSort: false,
    position: "bottom",
    itemSelectText: ''
  });
});
"use strict";

var heroSection = document.querySelector(".hero");
var topBtn = document.querySelector(".to-top");

var isTopBtnVisible = function isTopBtnVisible() {
  if (window.pageYOffset > heroSection.offsetHeight / 2) {
    topBtn.classList.add("to-top--active");
  } else {
    topBtn.classList.remove("to-top--active");
  }
};

window.addEventListener("scroll", isTopBtnVisible);
window.addEventListener("load", isTopBtnVisible);
var scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false
});
"use strict";

if (document.querySelector('.portfolio-section__swiper')) {
  var portSwiper = new Swiper('.portfolio-section__swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev'
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });

  var isSlidesVisible = function isSlidesVisible() {
    var currSlide = document.querySelector('.swiper-slide-active');
    var nextSlide = currSlide.nextElementSibling;
    var nextnextSlide = nextSlide.nextElementSibling;
    var arraySlides = document.querySelectorAll('.portfolio-section__slide');
    arraySlides.forEach(function (el) {
      el.classList.remove('portfolio-section__slide--hidden');

      if (!(el == currSlide || el == nextSlide || el == nextnextSlide)) {
        el.classList.add('portfolio-section__slide--hidden');
      }
    });
  };

  window.addEventListener("load", isSlidesVisible);
  document.querySelector('.swiper-button--next').addEventListener("click", isSlidesVisible);
  document.querySelector('.swiper-button--prev').addEventListener("click", isSlidesVisible);
}

if (document.querySelector('.reviews__swiper')) {
  var reviewsSwiper = new Swiper('.reviews__swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews-button--next',
      prevEl: '.reviews-button--prev'
    }
  });
}

if (document.querySelector('.history-content__slider')) {
  var historySwiper = new Swiper('.history-content__slider', {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.history-header__button--next',
      prevEl: '.history-header__button--prev'
    }
  });
  var navSliderElements = document.querySelectorAll('.history-nav__item');

  var navElementActive = function navElementActive() {
    var currSlide = document.querySelector('.swiper-slide-active');
    navSliderElements.forEach(function (el) {
      el.classList.remove('history-nav__item--active');

      if (el.dataset.index == historySwiper.activeIndex) {
        el.classList.add('history-nav__item--active');
      }
    });
  };

  navSliderElements.forEach(function (el) {
    el.addEventListener("click", function () {
      navSliderElements.forEach(function (el) {
        el.classList.remove('history-nav__item--active');
      });
      historySwiper.slideTo(el.dataset.index);
      el.classList.add('history-nav__item--active');
    });
  });
  document.querySelector('.history-header__button--next').addEventListener("click", navElementActive);
  document.querySelector('.history-header__button--prev').addEventListener("click", navElementActive);
}
"use strict";

var tabNav = document.querySelector('.portfolio-tabs-nav'),
    tabNavBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
var tabItems = document.querySelectorAll('.portfolio-tabs__item');
var loadMoreBtn = document.querySelector('.load-more');
var maxItems = 9;

if (document.querySelector('.portfolio-tabs-nav')) {
  var hideMoreItems = function hideMoreItems(elements) {
    if (elements.length > maxItems) {
      var arr = Array.from(elements);
      var hideItems = arr.slice(maxItems);
      hideItems.forEach(function (el) {
        el.classList.add('portfolio-tabs__item--visible-more');
      });
      loadMoreBtn.style.display = 'flex';
    } else {
      loadMoreBtn.removeAttribute('style');
    }
  };

  window.addEventListener('load', function () {
    tabItems.forEach(function (el) {
      el.classList.add('portfolio-tabs__item--visible');
    });
    hideMoreItems(tabItems);
  });
  tabNav.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('portfolio-tabs-nav__btn')) {
      var path = target.dataset.path;
      var pathItems = document.querySelectorAll("[data-target='".concat(path, "']"));
      tabNavBtns.forEach(function (el) {
        el.classList.remove('portfolio-tabs-nav__btn--active');
      });
      target.classList.add('portfolio-tabs-nav__btn--active');
      tabItems.forEach(function (el) {
        el.classList.remove('portfolio-tabs__item--visible');
        el.classList.remove('portfolio-tabs__item--visible-more');
      });
      pathItems.forEach(function (el) {
        el.classList.add('portfolio-tabs__item--visible');
      });
      hideMoreItems(pathItems);

      if (path == 'all') {
        tabItems.forEach(function (el) {
          el.classList.add('portfolio-tabs__item--visible');
        });
        hideMoreItems(tabItems);
      }
    }
  });
  loadMoreBtn.addEventListener('click', function () {
    tabItems.forEach(function (el) {
      return el.classList.remove('portfolio-tabs__item--visible-more');
    });
    loadMoreBtn.removeAttribute('style');
  });
}
"use strict";

var video = document.querySelector('.about-section__video');

if (video) {
  var playBtn = document.querySelector('.about-section__play-btn');
  var blackout = document.querySelector('.about-section__blackout');
  playBtn.addEventListener("click", function () {
    playBtn.classList.add('disable');
    blackout.classList.add('disable');
    video.controls = true;
    video.play();
  });
  video.addEventListener("pause", function () {
    video.controls = false;
    playBtn.classList.remove('disable');
    blackout.classList.remove('disable');
  });
}
"use strict";
//# sourceMappingURL=main.js.map
