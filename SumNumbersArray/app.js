// Вычислить сумму элементов числового массива

function sumNumbers(numbers) {
  //return numbers[0] + numbers[1] + numbers[3]; // O(1)

  let result = 0; // 1

  // 1
  for (const number of numbers) {
    console.log('...' + number); // n
    result += number; // n
  }

  return result; // 1

  // return numbers.reduce((sum, num) => sum + num, 0); // O(n)
}

// T = 1 + 1 + 1 + n + n = 3 + 2 * n
// T = 2 * n
// T = n => O(n) => Linear Time Complexity

const sum = sumNumbers([1, 3, 10]);
console.log(sum);
