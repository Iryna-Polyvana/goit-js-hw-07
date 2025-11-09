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
  refs.spanColor.style.backgroundColor = getRandomHexColor();
  refs.body.style.backgroundColor = refs.spanColor.style.backgroundColor;
});
// На що буде звертати увагу ментор при перевірці:
// Фон на < body > задається тільки після кліку на button.change - color
// При кожному кліку на елемент button.change - color фон < body > зафарбовується новим рандомним кольором
// На < body > і span.color значення одного й того самого кольору
