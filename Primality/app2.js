// Определить является ли число простым

function isPrime(number) {
  // 1
  for (let i = 2; i <= Math.sqrt(number); i++) {
    //O(sqrt(n))
    if (number % i === 0) {
      return false; // 1
    }
  }
  return true; // 1
}

// Bast Case: number === 1 OR number === 2 => O(1)
// Average Case: OO(sqrt(n))
// Worst Case: number === 27277 => O(sqrt(n))

console.log(isPrime(9));
console.log(isPrime(5));
console.log(isPrime(27277));
