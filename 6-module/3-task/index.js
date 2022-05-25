import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this._elem = this.render();

    this.prepareParams();
    this.setControlsVisibility();

    this._elem.addEventListener('click', this.changeSlide.bind(this));
    this._elem.addEventListener('click', this.addToCart.bind(this));
  }

  get elem() {
    return this._elem;
  }

  render() {
    const carousel = createElement(`<div class='carousel'></div>`);
    const arrows = `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
        <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>`;


    let slides = `<div class='carousel__inner'>`;

    slides += this.slides.reduce((res, curr, i) => {
      const html = new CarouselSlide(curr).getHtmlString();
      res += html;
      return res;
    }, '');

    slides += '</div>';

    carousel.insertAdjacentHTML('afterBegin', arrows);
    carousel.insertAdjacentHTML('beforeEnd', slides);

    this._elem = carousel;

    return carousel;
  }

  prepareParams() {
    this.prevControl = this._elem.querySelector('.carousel__arrow_left');
    this.nextControl = this._elem.querySelector('.carousel__arrow_right');
    this.inner = this._elem.querySelector('.carousel__inner');
    this.maxSlideNumber = this.inner.childElementCount - 1;
  }

  changeSlide(e) {
    const button = e.target.closest('.carousel__arrow');

    if (button) {
      const dir = button.classList.contains('carousel__arrow_right') ? 1 : -1;
      const slideWidth = this.inner.clientWidth;
      this.currentSlide += dir;
      this.inner.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;

      this.setControlsVisibility();
    }
  }

  setControlsVisibility() {
    if (this.currentSlide === 0) {
      this.prevControl.style.display = 'none';
      this.nextControl.style.display = '';
    } else if (this.currentSlide === this.maxSlideNumber) {
      this.nextControl.style.display = 'none';
      this.prevControl.style.display = '';
    } else {
      this.prevControl.style.display = '';
      this.nextControl.style.display = '';
    }
  }

  addToCart(e) {
    if (e.target.closest('.carousel__button')) {
      const productId = e.target.closest('.carousel__slide').dataset.id;
      const event = new CustomEvent('product-add', {
        detail: productId,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    }
  }
}

class CarouselSlide {
  constructor(data) {
    this.data = data;
  }

  get price() {
    return `€${this.data.price.toFixed(2)}`;
  }

  get name() {
    return this.data.name || 'No name';
  }

  get id() {
    return this.data.id || '';
  }

  get imgPath() {
    return `/assets/images/carousel/${this.data.image}`;
  }

  getHtmlString() {
    const tpl =
      `<div class='carousel__slide' data-id='${this.id}'>
          <img src='${this.imgPath}' class='carousel__img' alt='slide'>
          <div class='carousel__caption'>
            <span class='carousel__price'>${this.price}</span>
            <div class='carousel__title'>${this.name}</div>
            <button type='button' class='carousel__button'">
              <img src='/assets/images/icons/plus-icon.svg' alt='icon'>
            </button>
          </div>
        </div>`;

    return tpl;
  }
}
