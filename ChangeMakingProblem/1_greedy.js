// The Change Making Problem
// Задача набора нужной суммы из монет фиксированного достоинства и фиксированного комплекта
// Монеты отсортированы от большего достоинства к меньшему.
// Необходимо собрать нужную сумму наименьшим количеством монет.
// Greedy Solution (Жадная реализация)

function computeChange(coins, amount) {
  let remainingAmount = amount;
  const calculatedChange = {
    selectedCoins: [],
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    // The Math.floor() function returns the largest integer less than or equal to a given number.
    // получаем целое число кол-ва монет данного достоинства на кот. делится остаток суммы
    const count = Math.floor(remainingAmount / coin);
    // console.log(
    //   `coin: ${coin} -- remainingAmount: ${remainingAmount}, count: ${
    //     remainingAmount / coin
    //   }`
    // );
    // остаток суммы как разница пред.значения и произведения достоинства монеты и ее кол-ва
    remainingAmount = remainingAmount - coin * count;

    // запоминаем результаты
    if (count > 0) {
      calculatedChange.selectedCoins.push(`${coin}: ${count}`);
      calculatedChange.numberOfCoins += count;
    }
  }

  return calculatedChange;
}

// Time Complexity (Greedy Solution): O(n)

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

const change = computeChange(availableCoins, targetAmount);
console.log(change);
