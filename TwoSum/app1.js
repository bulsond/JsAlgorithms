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

function twoSum(numArray, sum) {
  const counterparts = [];
  // собираем массив разностей (дополнений)
  numArray.forEach((num) => counterparts.push(sum - num));
  const result = [];
  // пытаемся составить пары
  // путем сопоставления дополнения и равного ему числа из исходного массива
  for (let i = 0; i < counterparts.length; i++) {
    // пытаемся найти число в исходном массиве равное дополнению
    const counterpartIndex = numArray.indexOf(counterparts[i]);
    if (counterpartIndex < 0) {
      continue;
    }
    // создаем массив пары
    const pair = new Array(numArray[i], numArray[counterpartIndex]);
    result.push(pair);
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
