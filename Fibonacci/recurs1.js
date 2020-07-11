// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8

// Рекурсивно
function fib(position) {
  // base case
  if (position < 2) return 1;
  // recursive case
  return fib(position - 1) + fib(position - 2);
}

// T = O(2^n) Exponential Time Complexity

const fibNum = fib(4);
console.log(fibNum);
