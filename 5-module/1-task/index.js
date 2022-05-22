function hideSelf() {
  const btn = document.querySelector('.hide-self-button');

  if (btn) {
    document.addEventListener('click', clickHandler);
  }
}

function clickHandler(e) {
  e.target.hidden = true;
}
