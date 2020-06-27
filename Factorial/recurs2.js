// Вычисление факториала рекурсивно

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

const result = factorial(5);
console.log(result);
