

document.addEventListener('DOMContentLoaded', (event) => {

})
new WOW().init();

menuIcon = document.querySelector('.menu-icon')
mainNav = document.querySelector('.main-navigation')
if (menuIcon) {
    menuIcon.addEventListener('click', (event) => {
        menuIcon.classList.toggle('open')
        mainNav.classList.toggle('show')
        document.querySelector('body').classList.toggle('no-scroll')
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: true,
    freeMode: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});