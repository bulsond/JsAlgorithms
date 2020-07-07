/**
 * Reverse Array In Place
 * Вернуть реверсированный массив.
 * Нельзя использовать временный массив.
 * Нельзя использовать Array.prototype.reverse()
 * Вся работа должна производится в том же массиве.
 */

function reverseArrayInPlace(array) {
  const length = array.length * 2;
  let i = 0;
  // проходим по массиву и добавляем в начало текущий элемент
  while (i < length) {
    array.unshift(array[i]);
    // console.log(`i=${i}, array=${array}`);
    i += 2; // т.к. массив увеличивается, то нужно сдвигаться на 2 позиции
  }
  i = length / 2 - 1;
  // обрезаем массив от середины до конца до преждней длины
  while (i >= 0) {
    array.pop();
    // console.log(array);
    i--;
  }
  return array;
}

const array = [1, 2, 3, 4, 5];
const result = reverseArrayInPlace(array);
console.log(result);
