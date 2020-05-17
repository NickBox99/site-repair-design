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

    document.addEventListener('keypress', (e) => {
        console.log(e.key + ", " + e.keyCode);

    });
});
