let swiper = new Swiper(".card-box", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    },
    autoplay:{
      delay:2000
    }
  });
  



  var swiper1 = new Swiper(".box-12", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });