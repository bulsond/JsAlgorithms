// Проблема "0-1 Рюкзака". (0-1) означает объект может быть выбран один или 0 раз
// Имеется коллекция объектов со значениями Веса и Цены.
// Имеется рюкзак в ограничением вместимости по Весу.
// Задача: найти комбинацию таких объектов при которой будет
// достигнута максимальная стоимость и не привышено ограничение по доступному суммарному весу.
// Объекты не могут повторяться.

// Dynamic algorithm. Рекурсивный способ решения с кэшем
// Evaluate all possible solutions and find
// overall best solution via comparison
function knapsackFn(items, maxCapacity, itemIndex, memo) {
  console.log(`Running ${itemIndex} -- ${memo}`);
  //проверяем кэш
  if (memo[maxCapacity][itemIndex]) {
    return memo[maxCapacity][itemIndex];
  }
  //пустой результат
  let resultSack = { items: [], value: 0, weight: 0 };

  // проверка доступной вместимости и индекса
  if (maxCapacity === 0 || itemIndex < 0) {
    // возвращаем пустой рюкзак
    return resultSack;
  }

  if (maxCapacity < items[itemIndex].weight) {
    //вызываем снова с уменьшением индекса
    return knapsackFn(items, maxCapacity, itemIndex - 1, memo);
  }

  //>>> ветка НЕТ
  const sackWithoutItem = knapsackFn(items, maxCapacity, itemIndex - 1, memo);
  // <<<

  //>>> ветка ДА
  const sackWithItem = knapsackFn(
    items,
    maxCapacity - items[itemIndex].weight,
    itemIndex - 1,
    memo
  );
  // <<<

  // вычисляем результат
  const valueWithoutItem = sackWithoutItem.value;
  const valueWithItem = sackWithItem.value + items[itemIndex].value;

  // отдаем результат (выход из рекурсии)
  if (valueWithItem > valueWithoutItem) {
    resultSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
  } else {
    resultSack = sackWithoutItem;
  }

  //запоминаем в кэш
  memo[maxCapacity][itemIndex] = resultSack;
  return resultSack;
}

function knapsack(items, capacity, index) {
  const mem = Array.from(Array(capacity + 1), () =>
    Array(items.length).fill(undefined)
  );
  return knapsackFn(items, capacity, index, mem);
}

// Time Complexity: O(n*Capacity)

const maxCap = 8; //максимальная вместимость
const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
];

// sack = ['a', 'c']; решение
const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
