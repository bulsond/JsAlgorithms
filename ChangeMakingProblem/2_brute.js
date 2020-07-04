// The Change Making Problem
// Задача набора нужной суммы из монет фиксированного достоинства и фиксированного комплекта
// Монеты отсортированы от большего достоинства к меньшему.
// Необходимо собрать нужную сумму наименьшим количеством монет.
// Greedy + Brute Force Solution (Жадная реализация с прямым перебором результатов)

function computeChange(coins, amount) {
  let remainingAmount = amount;
  const calculatedChange = {
    selectedCoins: [],
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    remainingAmount = remainingAmount - coin * count;

    if (count > 0) {
      calculatedChange.selectedCoins.push(`${coin}: ${count}`);
      calculatedChange.numberOfCoins += count;
    }
  }

  return calculatedChange;
}

// перебираем все возможные варианты наборов монет
// собираем результаты
// выбираем результат где использовано меньше всего монет
function computeChangeBruteForce(coins, amount) {
  const results = [];
  //собираем результаты при укорачивании набора доступных монет
  for (let i = 0; i < coins.length; i++) {
    const result = computeChange(coins.slice(i), amount);
    results.push(result);
  }
  // выбираем лучший, который с меньшим количеством монет
  let smallest = Number.MAX_SAFE_INTEGER;
  let selectedResult = results[0];
  for (const result of results) {
    if (result.numberOfCoins < smallest) {
      smallest = result.numberOfCoins;
      selectedResult = result;
    }
  }
  return selectedResult;
}

// Time Complexity (Greedy Solution): O(n)
// Time Complexity (Brute Force Solution): O(n * n) + O(n) = O(n^2)

const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;

//без вычисления всех результатов были бы выбраны 8:1 и 1:3
// а не 6:1 и 5:1
const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log(change);
