/**
 * Mean, Median, Mode
 *
 */

//  среднее арифметическое
function getMean(array) {
  let sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}

// средний элемент массива
function getMedian(array) {
  // сортируем массив по возрастанию значений
  array.sort((a, b) => a - b);
  // в случае нечетной длины массива
  if (array.length % 2 !== 0) {
    // отдаем элемент со средним индексом
    return array[Math.floor(array.length / 2)];
  } else {
    // отдааем среднее двух элементов в середине массива
    const mid1 = array[array.length / 2 - 1];
    const mid2 = array[array.length / 2];
    return (mid1 + mid2) / 2;
  }
}

// извлечение самых частых значений в массиве
function getMode(array) {
  // словарь с частотой появления значения в массиве
  const modeDict = {};
  array.forEach((num) => {
    if (num in modeDict === false) {
      modeDict[num] = 0;
    }
    modeDict[num]++;
  });

  // набираем массив из наиболее частотных значений
  let maxFrequency = 0;
  let modes = [];
  for (const num in modeDict) {
    if (modeDict[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeDict[num];
    } else if (modeDict[num] === maxFrequency) {
      modes.push(num);
    } else {
    }
  }

  // если массив частотных значений содержит все ключи словаря, то вернем пустой массив
  if (modes.length === Object.keys(modeDict).length) {
    modes = [];
  }

  return modes;
}

// результирующая
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

const array = [3, 4, 2, 3, 6, 4, 1];
const result = meanMedianMode(array);
console.log(result);
