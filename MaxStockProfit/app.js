// Max Stock Profit

// функция получает массив цен
// возвращает возможный профит
// например для [32, 46, 26, 38, 40, 48, 42]
// нужно определить лучшую цену за которую можно купить (минимальная)
// и цену за которую можно продать (максимальная)
// 26 - лучшая цена для покупки, 48 - лучшая цена для продажи
// итого профит равен: 48 - 26 = 22
// если нет профита, то функция должна вернуть -1
// профит = 0 рассматривается как любой другой возможный профит

function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let changeBuyPrice = true;
  let sellPrice = 0;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = pricesArr[i];
    }
    sellPrice = pricesArr[i + 1]; // здесь выходит за пределы массива!
    console.log(`i=${i} buyPrice:${buyPrice}, sellPrice:${sellPrice}`);

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      const tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }
  console.log(`buyPrice:${buyPrice}, sellPrice:${sellPrice}`);
  return maxProfit;
}

// Запуск
const prices = [32, 46, 26, 38, 40, 48, 42];
const result = maxStockProfit(prices);
console.log(result);
