//Вычисление факториала итеративным способом
//с помощью цикла while

function factorial(number) {
  let result = 1;
  while (number > 1) {
    result *= number;
    number--;
  }
  return result;
}

// T = O(n)

const result = factorial(4);
console.log(result);
