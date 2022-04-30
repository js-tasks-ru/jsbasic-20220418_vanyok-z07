function filterRange(arr, a, b) {
  return arr.filter(curr => {
    return curr >= a && curr <= b;
  });
}
