var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay:{
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  // swiper second offer product carousel next and prev button style

document.getElementById('second-product-slider').addEventListener('mouseover', function(){
  const nextBtn = document.getElementById('next-btn2');
  const prevBtn = document.getElementById('prev-btn2');
  nextBtn.style.visibility = 'visible';
  prevBtn.style.visibility = 'visible';
})
document.getElementById('second-product-slider').addEventListener('mouseout', function(){
  const nextBtn = document.getElementById('next-btn2');
  const prevBtn = document.getElementById('prev-btn2');
  nextBtn.style.visibility = 'hidden';
  prevBtn.style.visibility = 'hidden';
})