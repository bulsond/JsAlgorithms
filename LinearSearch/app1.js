/**
 * Linear Search
 * Линейный поиск
 *
 * Перебор всех элементов в массиве,
 * при обнаружении первого вхождения нужного элемента
 * возвращается его индекс.
 * Работает на отсортированных и несортированных массивах.
 */

function linearSearch(array, element) {
  let index = 0;
  for (const val of array) {
    if (val === element) {
      return index;
    }
    index++;
  }
  return index;
}

// Time Complexity
// Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)

// Запуск
const array = [5, 3, 10, -10, 33, 51];
const element = 10;
const result = linearSearch(array, element);
console.log(result);
