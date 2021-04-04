const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const listIngredientsContainer = document.querySelector('#ingredients');

const makeIngridientsItems = arrOfIngridients => {
  return arrOfIngridients.map(ingridient => {
    const ingridientItem = document.createElement('li');

    ingridientItem.textContent = ingridient;
    return ingridientItem;
  });
};

const items = makeIngridientsItems(ingredients);

listIngredientsContainer.append(...items);
console.log(listIngredientsContainer);
