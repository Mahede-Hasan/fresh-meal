
// swiper carousel
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay:{
        delay: 4000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper carousel next and prev button style

document.getElementById('carousel').addEventListener('mouseover', function(){
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
})
document.getElementById('carousel').addEventListener('mouseout', function(){
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
})

