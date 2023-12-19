setInterval(() => {
  document.getElementsByClassName("css-de05nr e19owgy710")[0]?.click();
  [...document.querySelectorAll('[data-cellnumber]')]
    .sort((a, b) => a.dataset.cellnumber - b.dataset.cellnumber)
    .forEach(cell => cell.click())
});
