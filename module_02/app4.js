// Определить является ли число степенью двойки
// используем bitwise операцию &
// 8 => 1000
// 7 => 0111
// & => 0000 => 0

// 5 => 0101
// 4 => 0100
// & => 0100 => 4

function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }
  console.log(`${number} & ${number - 1} === ${(number & (number - 1))}`);
  return (number & (number - 1)) === 0;
}

// Best Case: number === 13 => O(1)
// Average Case: O(1)
// Worst Case: => O(1)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));
