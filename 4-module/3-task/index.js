function highlight(table) {

  const rows = Array.from(table.rows).splice(1, table.rows.length);

  for (let row of rows) {
    const availableStatus = row.cells[3].dataset.available;
    const availableClass = availableStatus === 'true' ? 'available' : 'unavailable';
    const genderClass = row.cells[2].innerText === 'm' ? 'male' : 'female';

    const isUnderage = row.cells[1].innerText < 18;
    const underageStyle = `text-decoration: line-through;`;

    row.classList.add(genderClass);
    row.classList.add(availableClass);

    if (typeof availableStatus === 'undefined') {
      row.setAttribute('hidden', true);
    }

    if (isUnderage) {
      row.style.cssText = underageStyle;
    }
  }
}
