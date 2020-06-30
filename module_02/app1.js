// Получить минимальное число из переданного массива чисел

function getMin(numbers) {
  let min = numbers[0]; // 1
  // 1
  for (const number of numbers) {
    // n
    if (min > number) {
      min = number; // n - 1;
    }
  }
  return min; // 1;
}

// T = 1 + 1 + 1 + 2 * n = 3 + 2n
// T = n => O(n)

console.log(getMin([3, 1, 10]));
