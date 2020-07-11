/**
 * Binary Search
 * Бинарный поиск
 *
 * Рекурсивная реализация
 * Предусловие: аргументный массив должен быть уже отсортирован ASC.
 *
 */

// возвращает true в случае успешного поиска
function binarySearch(numArray, key) {
  // находим средний индекс массива и элемент массива
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElement = numArray[middleIndex];

  // BASE CASE
  if (middleElement === key) {
    return true;
    // RECURSIVE CASE in else
  } else if (middleElement < key && numArray.length > 1) {
    // так как массив отсортирован по возрастанию,
    // то искомый элемент должен быть в ПРАВОЙ половине массива
    // рекурсивный вызов с уполовиниванием исходного массива ВПРАВО
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
    // искомый элемент должен быть в ЛЕВОЙ половине массива
    // рекурсивный вызов с уполовиниванием исходного массива ВЛЕВО
    return binarySearch(numArray.splice(0, middleIndex), key);
    // BASE CASE
  } else {
    return false;
  }
}

// Запуск
const numArray = [5, 7, 12, 16, 36, 39, 42, 56, 71];
const key = 56;
const result = binarySearch(numArray, key);
console.log(result);
