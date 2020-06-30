// Определить является ли число степенью двойки

function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }

  let devidedNumber = number;
  while (devidedNumber !== 1) {
    if (devidedNumber % 2 !== 0) {
      return false;
    }
    // деление переменной в цикле от которой зависит кол-во итераций => O(log n) 
    devidedNumber = devidedNumber / 2;
  }
  return true;
}

// Best Case: number === 13 => O(1)
// Average Case: O(log n)
// Worst Case: O(log2 n) => O(log n)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));
