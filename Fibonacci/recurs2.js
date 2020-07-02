// Вычисление числа Фибоначчи как суммы двух предыдущих чисел
// последовательность получается такая: 1, 1, 2, 3, 5, 8

// Рекурсивно с запоминанием
function fib(number, mem) {
  let res = 0;
  //проверяем вычисленного в памяти
  if (mem[number]) {
    //возвращаем готовый результат из памяти
    return mem[number];
  }
  if (number < 2) {
    res = 1;
  } else {
    res = fib(number - 1, mem) + fib(number - 2, mem);
  }
  mem[number] = res;
  return res;
}

// T = O(n*C) Time Complexity

const fibNum = fib(4, []);
console.log(fibNum);
