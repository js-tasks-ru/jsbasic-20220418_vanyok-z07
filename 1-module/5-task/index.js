function truncate(str, maxlength) {

  let result = str;
  const suffix = '…';

  if (str.length > --maxlength) {
    result = str.slice(0, maxlength) + suffix;
  }

  return result;
}
