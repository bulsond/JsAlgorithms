/**
 * Binary Search
 * Бинарный поиск
 *
 * Рекурсивная реализация
 * Предусловие: аргументный массив должен быть уже отсортирован ASC.
 *
 */

function findElement(sortedArray, element, offset) {
  // O(1)
  // BASE CASE - возможно не нашли
  if (sortedArray.length === 0 ||
    (sortedArray.length === 1 && sortedArray[0] !== element)) {
    return -1;
  }

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  const middleIndex = Math.floor((endIndex - startIndex) / 2);
  const middleElement = sortedArray[middleIndex];
  // BASE CASE - возможно нашли
  if (middleElement === element) {
    return middleIndex + offset;
  }
  // RECURSIVE CASE - берем правую или левую половину массива
  if (middleElement < element) {
    startIndex = middleIndex + 1;
    offset = offset + startIndex;
  } else {
    endIndex = middleIndex;
  }
  // RECURSIVE CASE
  // O(1)
  return findElement(sortedArray.slice(startIndex, endIndex + 1), element, offset);
}

// Master Theorem: Runtime of recursion: O(n^logb a)
//     a - number of recursion splits
//     b - input reduction per split
//     f(n) - equals the runtime outside of recursion
// Same work inside and outside of recursion: O(n^logb a * log n)
// Non-recursive part does more work: O(fn(n))

// a = 1
// b = 2
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1)
// Overall algorithm time complexity: O(n^logb a * log n) => O(1 * log n) => O(log n)

//  Запуск
const sortedArray = [1, 5, 9, 13, 99, 100];
const element = 99;
const index = findElement(sortedArray, element, 0);
console.log(index);
