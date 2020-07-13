/**
 * Merge Sort
 * Сортировка Слиянием
 *
 * Алгоритм основан на делении исходного масссива
 * вплоть до создания массивов с одиночными элементами.
 * И дальнейшем слиянии с учетом нужного порядка элементов.
 *
 * Рекурсивное решение.
 */

// получает в качестве параметра несортированный массив
// делит его на 2 половины
// возвращает сортированный массив
function mergeSort(array) {
  // base case
  if (array.length < 2) {
    return array;
  }
  // recursive case
  // находим середину и делим на два массива исходный массив
  // возвращаем вызов функц. слияния с рекурсивными вызовами в аргументах
  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// получает два сортированных массива
// объединяет их в один сортированный массив
// возвращает объединенный сортированный массив
function merge(array1, array2) {
  let result = [];
  // определяем наименьший элемент,
  // добавляем его в результирующий массив
  // уменьшаем массив из которого выбрали элемент
  while (array1.length > 0 && array2.length > 0) {
    let minElement = 0;
    if (array1[0] < array2[0]) {
      minElement = array1.shift();
    } else {
      minElement = array2.shift();
    }
    result.push(minElement);
  }
  // в каком-то массиве могли остаться элементы
  // потому вносим оставшиеся элементы в результирующий массив
  if (array1.length > 0) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }
  return result;
}

// Запуск
const array = [11, 7, 4, 1, 15, 13, 3];
const result = mergeSort(array);
console.log(result.join(', '));
