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
});
