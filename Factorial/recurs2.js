// Вычисление факториала рекурсивно

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

// In every function call => O(1)
// But we trigger multiple function calls => n funciton calls
// T = n * O(1) => O(n)

const result = factorial(5);
console.log(result);
