// Проблема "0-1 Рюкзака". (0-1) означает объект может быть выбран один или 0 раз
// Имеется коллекция объектов со значениями Веса и Цены.
// Имеется рюкзак в ограничением вместимости по Весу.
// Задача: найти комбинацию таких объектов при которой будет
// достигнута максимальная стоимость и не привышено ограничение по доступному суммарному весу.
// Объекты не могут повторяться.

// Жадный(Greedy) алгоритм !!! Дает неверный результат
// Make best possible decision in every step
// and hope that it leads to the overall best solution.
// В этой задаче жадный алгоритм дает неверный результат
// в случае изменения порядка элементов передаваемых в функцию
function knapsack(elements, capacity) {
  //пустой результат
  let resultSack = { items: [], value: 0, weight: 0 };
  //   оставшаяся вместимость рюкзака
  let remainingCapacity = capacity;

  for (const el of elements) {
    if (el.weight <= remainingCapacity) {
      resultSack.items.push(el);
      resultSack.value += el.value;
      resultSack.weight += el.weight;
      remainingCapacity -= el.weight;
    }
  }

  return resultSack;
}

// Time Complexity: O()

const maxCap = 8; //максимальная вместимость
const items = [
  { name: 'b', value: 6, weight: 8 },
  { name: 'a', value: 3, weight: 3 },
  { name: 'c', value: 10, weight: 3 },
];

// sack = ['a', 'c']; решение
const sack = knapsack(items, maxCap);
console.log(sack);
