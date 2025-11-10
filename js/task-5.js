function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  body: document.querySelector('.widget')
};

refs.changeColorBtn.addEventListener('click', event => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.style.backgroundColor = refs.body.style.backgroundColor;
});
