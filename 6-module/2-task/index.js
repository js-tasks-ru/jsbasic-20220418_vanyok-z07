import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._elem = null;
    this.render();
    this.elem.addEventListener('click', this.addToCart.bind(this));
  }

  get price() {
    return `€${this.product.price.toFixed(2)}`;
  }

  get imgPath() {
    return `/assets/images/products/${this.product.image}`;
  }

  get name() {
    return this.product.name;
  }

  get elem() {
    return this._elem;
  }

  render() {
    const tpl =
      `<div class='card'>
        <div class='card__top'>
            <img src='${this.imgPath}' class='card__image' alt='product'>
            <span class='card__price'>${this.price}</span>
        </div>
        <div class='card__body'>
            <div class='card__title'>${this.name}</div>
            <button type='button' class='card__button'>
                <img src='/assets/images/icons/plus-icon.svg' alt='icon'>
            </button>
        </div>
    </div>`;
    this._elem = createElement(tpl);
  }

  addToCart(e) {
    if (e.target.closest('.card__button')) {
      const event = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    }
  }
}
