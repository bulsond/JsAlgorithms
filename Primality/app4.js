/**
 * Sieve of Eratosthenes
 *
 * Решето Эратосфена
 * Алгоритм нахождения всех простых чисел до некоторого целого числа n, который приписывают
 * древнегреческому математику Эратосфену Киренскому.
 * Решето подразумевает фильтрацию, в данном случае фильтрацию всех чисел за исключением простых.
 * По мере прохождения списка нужные числа остаются, а ненужные исключаются.
 *
 * Функция должна вернуть массив простых чисел вплоть до значения аргумента.
 *  1) Создать массив с количеством элементов равным num,
 *     присвоить всем элементам значение true (как будто все числа простые),
 *     первые два элемента соответствующие 0 и 1 отмечаем false.
 *
 *  2) В цикле, начиная с числа 2 отмечаем false все элементы,
 *     кот. соответствуют числам делящимся на 2,
 *     далее по аналогии для 3 и т.п.
 *
 *   Улучшение по сравнению с app3.js
 *     В п.2 внешний цикл ограничить до < Sqrt(n).
 *     В п.2 во внутреннем цикле элементы, индекс которых равен j * i, отмечать false.
 */

function sieveEratosthenes(num) {
  // 1)
  const sieve = [];
  for (let i = 0; i <= num; i++) {
    if (i > 1) {
      sieve.push(true);
    } else {
      sieve.push(false); // отмечаем 0 и 1 как не простые числа
    }
  }

  // 2)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      sieve[j * i] = false;
      // console.log(`i=${i}, j=${j}, j * i = ${j * i}, num=${num}`);
    }
  }
  // console.log(sieve.join(' '));
  // 3) готовим результат
  const result = [];
  for (let i = 2; i < sieve.length; i++) {
    if (sieve[i]) {
      result.push(i);
    }
  }
  return result;
}

// Time Complexity: O(n) ?

// Запуск
const number = 20; // [2, 3, 5, 7, 11, 13, 17, 19]
const result = sieveEratosthenes(number);
console.log(result.join(', '));
