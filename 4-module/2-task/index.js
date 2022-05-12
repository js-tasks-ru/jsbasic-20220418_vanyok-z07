function makeDiagonalRed(table) {

  const rows = Array.from(table.rows);

  rows.forEach((row, i) => {
    if (i < row.cells.length) {
      row.cells[i].style.background = 'red';
    }
  });

}
