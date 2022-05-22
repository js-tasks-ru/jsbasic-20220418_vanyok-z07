function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const clickHandler = function () {
    const text = document.querySelector('#text');

    if (text) {
      text.hidden = !text.hidden;
    }
  };

  if (btn) {
    btn.addEventListener('click', clickHandler);
  }
}
