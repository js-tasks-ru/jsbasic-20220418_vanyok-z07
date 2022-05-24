/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.titles = {
      name: 'Имя',
      age: 'Возраст',
      salary: 'Зарплата',
      city: 'Город',
    };
    this.rows = rows;
    this._elem = document.createElement('table');

    this._elem.addEventListener('click', this.removeHandler);

    this.render();
  }

  get elem() {
    return this._elem;
  }

  render() {
    this.elem.appendChild(this.renderHead());
    this.elem.appendChild(this.renderBody());
    return this.elem;
  }

  renderHead() {
    const thead = document.createElement('thead');

    let headString = '<tr>';

    for (let key in this.rows[0]) {
      headString += `<th>${this.titles[key]}</th>`
    }
    headString += '<th></th></tr>';

    thead.innerHTML = headString;
    return thead;
  }

  renderBody() {
    const body = document.createElement('tbody');

    let rows = this.rows.map(row => {

      let rowString = '<tr>';

      for (let val in row) {
        rowString += `<td>${row[val]}</td>`;
      }
      rowString += `<td><button>&#11199;</button></td></tr>`;

      return rowString;
    });

    body.innerHTML = rows.join('');
    return body;
  }

  removeHandler(e) {
    if (e.target.closest('button')) {
      const row = e.target.closest('tr');

      if (row) {
        row.remove();
      }
    }
  }
}
