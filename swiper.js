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
  