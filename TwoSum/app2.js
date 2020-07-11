/**
 * Two Sum
 * Сумма двух
 * Из входного массива чисел и числа (суммы)
 *  составить массив пар чисел, кот.дают в суммарное число.
 *
 * Правила:
 *  - результат массив массивов
 *  - любое число из массива может быть использовано несколько раз при составлении пары.
 */

//  похоже, что это неверное решение!
function twoSum(numArray, sum) {
  const result = [];
  const counterparts = [];

  for (let i = 0; i < numArray.length; i++) {
    // текущее число
    const currNum = numArray[i];
    // дополениение к нему до суммы
    const counterpart = sum - currNum;
    // если дополнение такое уже есть, то создаем пару
    if (counterparts.indexOf(counterpart) >= 0) {
      result.push([currNum, counterpart]);
    }
    // вносим текущее число в дополнения
    counterparts.push(currNum);
  }
  return result;
}

// запуск
// const numArray = [1, 6, 4, 5, 3, 3];
// const sum = 7; // [ [6, 1], [3, 4], [3, 4] ]
const numArray = [40, 11, 19, 17, -12];
const sum = 28;

const result = twoSum(numArray, sum);
console.log(result);
