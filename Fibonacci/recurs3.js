// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8
// Memoized Fibonacci

// Рекурсивно с запоминанием
function fib(position, cache) {
  // если не передан массив-кэш, то создаем новый пустой
  cache = cache || [];
  // base case отдаем готовый результат из кэша
  if (cache[position]) {
    return cache[position];
  } else {
    // далее как в обычном рекурсивном случае
    if (position < 2) {
      return 1;
    } else {
      // recursive case
      cache[position] = fib(position - 2, cache) + fib(position - 1, cache);
    }
  }
  return cache[position];
}

// T = O(n*C) Time Complexity

const fibNum = fib(4);
console.log(fibNum);
