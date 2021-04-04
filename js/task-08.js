// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая
// принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире
// и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  divContainer: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', function () {
  const inputValue = refs.input.value;
  createBoxes(inputValue);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + 10 * i;

    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string;

    div.style.backgroundColor = rgb;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    refs.divContainer.append(div);
  }
}

refs.destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  refs.divContainer.innerHTML = '';
}
