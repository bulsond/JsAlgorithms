// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8

// Итеративно
function fib(position) {
  const numbers = [1, 1]; // 1
  // 1
  // !!!начинаем цикл с индекса 2
  for (let i = 2; i < position + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
  }
  return numbers[position]; // 1
}

// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 1 + 2n
// T = 2n => O(n) => Linear Time Complexity

const fibNum = fib(4);
console.log(fibNum);
