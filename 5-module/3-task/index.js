function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const controls = carousel.querySelectorAll('[class*="carousel__arrow_"]');
  const nextControl = controls[0];
  const prevControl = controls[1];
  const maxSlideNumber = carouselInner.childElementCount - 1;
  const slideWidth = carouselInner.clientWidth;

  let currentSlide = 0;

  const setControlsVisibility = function () {
    if (currentSlide === 0) {
      prevControl.style.display = 'none';
      nextControl.style.display = '';
    } else if (currentSlide < maxSlideNumber) {
      prevControl.style.display = '';
      nextControl.style.display = '';
    } else if (currentSlide === maxSlideNumber) {
      nextControl.style.display = 'none';
      prevControl.style.display = '';
    }
  };

  const controlClickHandler = function (e) {
    const dir = this.classList.contains('carousel__arrow_right') ? 1 : -1;

    currentSlide += dir;

    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    setControlsVisibility();

  };

  Array.from(controls).forEach(control => {
    control.addEventListener('click', controlClickHandler);
  });

  setControlsVisibility();
}
