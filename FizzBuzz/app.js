/**
 * Fizz Buzz
 *
 * Написать функцию, которая получает в качестве аргумента положительное целое число n
 * и выводит в консоль последовательность чисел от 1 до n, с условием, что
 * если выводимое число делится на цело на 3, то вместо числа выводить слово Fizz,
 * если выводимое число делится на цело на 5, то вместо числа выводить слово Buzz,
 * если выводимое число делится и на 3 и на 5, то вместо числа выводить слово FizzBuzz
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % (3 * 5) === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(30);
