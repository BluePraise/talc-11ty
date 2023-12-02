menuIcon = document.querySelector('.menu-icon')
mainNav = document.querySelector('.main-navigation')
if (menuIcon) {
    menuIcon.addEventListener('click', (event) => {
        menuIcon.classList.toggle('open')
        mainNav.classList.toggle('show')
        document.querySelector('body').classList.toggle('no-scroll')
    })
}

// credit: https://github.com/nolimits4web/swiper/issues/3736
let swiperCarousels = document.querySelectorAll(".project-slider")
if (swiperCarousels.length) {
    let index = 0
    swiperCarousels.forEach( swiperCarousel => {
        index = index + 1

        const swiperPrevButton =
            swiperCarousel.querySelector(".swiper-prev") ||
            swiperCarousel.parentElement.querySelector(".swiper-prev")

        const swiperNextButton =
            swiperCarousel.querySelector(".swiper-next") ||
            swiperCarousel.parentElement.querySelector(".swiper-next")

        const swiperInstance = new Swiper(swiperCarousel, {
            loop: true,
            autoplay: true,
            freeMode: true,

            navigation: {
                nextEl: swiperNextButton,
                prevEl: swiperPrevButton
            }
        })
    })
}