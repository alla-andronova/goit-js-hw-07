// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
  const inputValue = input.value;
  text.style.fontSize = inputValue + 'px';
  console.log(text.style.fontSize);
}
//   Number(text.style.fontSize.replace('px', ''))  + 'px';
