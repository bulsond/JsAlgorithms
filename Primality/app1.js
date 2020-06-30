// Определить является ли число простым

function isPrime(number) {
  // 1
  for (let i = 2; i < number; i++) {
    //n
    if (number % i === 0) {
      return false; // 1
    }
  }
  return true; // 1
}

// Bast Case: number === 1 OR number === 2 => O(1)
// Average Case: O(n)
// Worst Case: number === 27277 => O(n)

console.log(isPrime(9));
console.log(isPrime(5));
console.log(isPrime(27277));
