/**
 * Reverse Array In Place
 * Вернуть реверсированный массив.
 * Нельзя использовать временный массив.
 * Нельзя использовать Array.prototype.reverse()
 * Вся работа должна производится в том же массиве.
 */

//  улучшенный вариант по стравнению с app5.js
function reverseArrayInPlace(array) {
  // надо поменять местами элементы с левой стороны от центра массива
  // с элементами на правой половине, потому ограничение на array.length / 2
  for (i = 0; i < array.length / 2; i++) {
    // запоминаем значение слева от центра
    const leftVal = array[i];
    // запоминаем индекс с правой стороны от цента
    const rightPosIndex = array.length - 1 - i;
    // меняем местами значения левой и правой сторны массива
    array[i] = array[rightPosIndex];
    array[rightPosIndex] = leftVal;

    console.log(`массив после переноса значений: ${array}`);
    console.log('------------------');
  }
  return array;
}

const array = [1, 2, 3, 4, 5];
const result = reverseArrayInPlace(array);
console.log(result);
