//Вычисление факториала итеративным способом
//с помощью цикла for

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

const result = factorial(5);
console.log(result);
