// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8

// Рекурсивно
function fib(number) {
  if (number < 2) return 1;
  return fib(number - 1) + fib(number - 2);
}

const fibNum = fib(4);
console.log(fibNum);
