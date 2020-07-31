/**
 * Binary Search
 * Бинарный поиск
 *
 * Итеративная реализация
 * Предусловие: аргументный массив должен быть уже отсортирован ASC.
 *
 */

function findElement(sortedArray, element) {
  let resultIndex = -1;
  let startedIndex = 0;
  let endIndex = sortedArray.length - 1;

  // с каждой итерацией мы будем двигатся к концу или началу массива
  while (startedIndex <= endIndex) {
    const middleIndex =
      startedIndex + Math.floor((endIndex - startedIndex) / 2);
    const middleElement = sortedArray[middleIndex];
    // возможно нашли
    if (middleElement === element) {
      resultIndex = middleIndex;
      break;
    }
    // берем правую или левую половину массива
    if (middleElement < element) {
      startedIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return resultIndex;
}

// Time Complexity
// Bast Case: элемент сразу в середине => O(1)
// Average Case: O(log n)
// Worst Case: O(log n) потому что массив каждый раз делим пополам

//  Запуск
const sortedArray = [1, 5, 9, 13, 99, 100];
const element = 99;
const index = findElement(sortedArray, element);
console.log(index);
