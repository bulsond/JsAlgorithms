// Определить является ли число простым

function isPrime(number) {
  let result = true; // 1

  //в цикле все проверяем деление на все меньшие числа
  // 1
  for (let i = number - 1; i > 1; i--) {
    console.log(`${number} % ${i} = ${number % i}`);
    if (number % i === 0) {
      result = false;
      break;
    } // 1
  }

  return result; // 1
}

console.log(isPrime(9));
console.log(isPrime(5));
