const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: 'bottom',
    speed: 1000,
    responsive: {
        1: {
            nav: true   
        },
        992: {
            nav: false
        }
    }
  });


document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });