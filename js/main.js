$(document).ready(function () {
 
  const modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeModal = $(".modal__close"),
    switchModal = () => {
      modal.toggleClass("modal--visible");
    };

  modalBtn.on("click", switchModal);
  closeModal.on("click", switchModal);

  $(".modal").on("click", function (e) {
    if (e.target == this) switchModal();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".modal").removeClass("modal--visible");
    }
  });

  let btn = document.querySelector(".button-up");

  function magic() {
    if (window.pageYOffset > 1000) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  }

  $(btn).click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // When scrolling, we run the function
  window.onscroll = magic;


  //====================
  //===Слайдеры===
  //====================

  var arrowPrev = $(".swiper-button-prev");

  //====================
  //===Первый слайдер===
  //====================

  //initialize swiper when document ready
  var mySwiper1 = new Swiper(".swiper-container1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });

  var next = $(".swiper-button-next1");
  var buttons = $(".swiper-pagination1");

  next.css("left", arrowPrev.width() + 25 + buttons.width() + 30);
  buttons.css("left", arrowPrev.width() + 25);

  //====================
  //===Второй слайдер===
  //====================

  //initialize swiper when document ready
  var mySwiper2 = new Swiper(".swiper-container2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
  
  var next2 = $(".swiper-button-next2");
  var buttons2 = $(".swiper-pagination2");

  next2.css("left", arrowPrev.width() + 25 + buttons2.width() + 30);
  buttons2.css("left", arrowPrev.width() + 25);

  //======================
  //===Обработчик чисел===
  //======================

  $(".swiper-button-prev2, .swiper-button-next2,.swiper-pagination2").on(
    "click",
    function () {
      var number = 0;
      var children = buttons2.children();

      children.each(function (idx, val) {
        number++;
        if($(this).hasClass("swiper-pagination-bullet-active"))
        {
          $(".swiper-counter__now").text(number);
          $(".goals__item").removeClass("goals__item-active");
          $(".goals__items").children().eq(number-1).addClass("goals__item-active");
          return false;
        }
      });
    }
  );

  new WOW().init();

  $(window).scroll(function () {
    var controlDesctiption = $(".control__desctiption").offset().top - 600;

    if ($(this).scrollTop() > controlDesctiption) {
      $(".control__desctiption").addClass("myAnimated");
    } 
  });
});
