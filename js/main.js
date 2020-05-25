$(document).ready(function () {
 
  //===============
  //=Модальное окно
  //===============
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

  //=Отлеживание кнопки Esp
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".modal").removeClass("modal--visible");
    }
  });

  //=кнопка Рокета, для плавного перехода наверх
  let btn = document.querySelector(".button-up");

  function magic() {
    if (window.pageYOffset > 1000) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  }
  
  //=Функция плавного перехода
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



  //====================================
  //===Обработчик чисел второго слайдера
  //====================================

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

  //================
  //=Создание wow.js
  //================
  new WOW().init();

  //================================
  //=Собственный скрипт для анимации
  //================================
  $(window).scroll(function () {
    var controlDesctiption = $(".control__desctiption").offset().top - 600;

    if ($(this).scrollTop() > controlDesctiption) {
      $(".control__desctiption").addClass("myAnimated");
    } 
  });


  //=========================
  //=Подключение яндекс карты
  //=========================
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [46.308745, 48.022022],
          zoom: 9,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "images/myIcon.gif",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [46.308745, 48.022022],
        {
          hintContent: "Собственный значок метки с контентом",
          balloonContent: "А эта — новогодняя",
          iconContent: "",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "img/marker.png",
          // Размеры метки.
          iconImageSize: [34, 34],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
      );

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
  });

  //===================
  //=Маска для телефона
  //===================
  $("input[name='phoneForm']").mask("+7 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"});

  //======================
  //=Подключение валидации
  //======================

  //=Валидация модального окна
  $(".modal__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      nameForm: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phoneForm: "required",
      emailForm: {
        required: true,
        email: true,
      },
    },
    messages: {
      nameForm: {
        required: "Заполните поле",
        minlength: "Минимальное количество символов 2",
        maxlength: "Максимальное количество символов 15",
      },
      phoneForm: "Заполните поле",
      emailForm: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
  });

  //=Валидация формы в секции control
  $(".control__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      nameForm: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phoneForm: "required",
    },
    messages: {
      nameForm: {
        required: "Заполните поле",
        minlength: "Минимальное количество символов 2",
        maxlength: "Максимальное количество символов 15",
      },
      phoneForm: "Заполните поле",
    },
  });

  //=Валидация формы в секции footer
  $(".footer__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      nameForm: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phoneForm: "required",
      questionForm: "required",
    },
    messages: {
      nameForm: {
        required: "Заполните поле",
        minlength: "Минимальное количество символов 2",
        maxlength: "Максимальное количество символов 15",
      },
      phoneForm: "Заполните поле",
      questionForm: "Заполните поле",
    },
  });
});
