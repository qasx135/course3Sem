const swiper = new Swiper(".swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
