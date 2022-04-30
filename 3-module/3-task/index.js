function camelize(str) {
  return str
    .split('-')
    .map((item, i) => {
      let res = item;
      if (i > 0) {
        res = item[0].toUpperCase() + item.slice(1);
      }
      return res;
    })
    .join('');
}
