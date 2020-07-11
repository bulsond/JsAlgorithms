// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8
// Memoized Fibonacci

// Рекурсивно с запоминанием
function fib(position, cache) {
  let result = 0;
  //проверяем может быть такое значение уже было вычислено
  // base case
  if (cache[position]) {
    //возвращаем готовый результат из памяти
    return cache[position];
  }
  if (position < 2) {
    result = 1; // base case
  } else {
    // recursive case
    result = fib(position - 1, cache) + fib(position - 2, cache);
  }
  cache[position] = result; // запоминаем
  // возвращаем результат
  return result;
}

// T = O(n*C) Time Complexity

const fibNum = fib(4, []);
console.log(fibNum);
