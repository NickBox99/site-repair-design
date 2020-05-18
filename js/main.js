document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeModal = document.querySelector('.modal__close');
    const switchModal = ()=>{
        modal.classList.toggle('modal--visible');
    };

    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeModal.addEventListener("click", switchModal);;

    window.onclick = function (event) {
      if (event.target == modal) {
        switchModal();
      }
    };

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
          modal.classList.remove('modal--visible')
      }
    };

});
