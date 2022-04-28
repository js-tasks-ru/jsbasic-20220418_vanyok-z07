let calculator = {
  _a: 0,
  _b: 0,

  read: function (a, b) {
    if (typeof a === 'number')
      this._a = a;
    if (typeof b === 'number')
      this._b = b;
  },

  sum: function () {
    return this._a + this._b;
  },

  mul: function () {
    return this._a * this._b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
