const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:  {
        delay: 5000,
    },
   
    slidesPerView: 2,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      740: {
          slidesPerView: 1.5,
      },
      1312: {
          slidesPerView: 2.2,
       }
      },
  
      mousewheel: {
        forceToAxis: true,
      }, 
    
  })