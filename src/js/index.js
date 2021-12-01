'use strict';

const card = document.getElementsByClassName('card');
const color = document.getElementsByClassName('card__color');
const code = document.getElementsByClassName('card__details--code');

for (let i = 0; i < card.length; i++) {
  const colorCode = code[i].innerHTML;

  color[i].style.backgroundColor = colorCode;

  card[i].addEventListener('click', () => {
    navigator.clipboard
      .writeText(colorCode)
      .then(() => {
        alert(`${colorCode} copied!`);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  });
}
