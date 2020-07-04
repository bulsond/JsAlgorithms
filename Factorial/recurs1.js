// Вычисление факториала рекурсивно

function factorial(number) {
  if (number < 2) return 1;
  else return number * factorial(number - 1);
}

// In every function call => O(1)
// But we trigger multiple function calls => n funciton calls
// T = n * O(1) => O(n)

const result = factorial(5);
console.log(result);
