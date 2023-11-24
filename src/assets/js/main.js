document.addEventListener('DOMContentLoaded', (event) => {

})
new WOW().init();

menuIcon = document.querySelector('.menu-icon')
mainNav = document.querySelector('.main-navigation')

menuIcon.addEventListener('click', (event) => {
    menuIcon.classList.toggle('open')
    mainNav.classList.toggle('show')
    document.querySelector('body').classList.toggle('no-scroll')
})