
function sumSalary(data) {
  let res = 0;
  for (let k in data) {
    let val = data[k];
    if (typeof val === 'number' && isFinite(val) && !isNaN(val)) {
      res += val;
    }
  }
  return res;
}
