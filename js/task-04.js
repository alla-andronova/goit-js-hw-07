// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const value = document.querySelector('#value');

let counterValue = Number(value.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(value.textContent);
}
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(value.textContent);
}
