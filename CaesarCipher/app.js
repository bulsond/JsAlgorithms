/**
 * Caesar Cipher
 * Необходимо сдвигать каждую букву строки (за исключением знаков препинания)
 *   на заданное число в позиции по алфавиту, в том числе нужно обрабатывать
 *   отрицательное число и зацикливание в пределах алфавита.
 */

function caesarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // корректировка числа по размеру алфавита
  num = num % alphabet.length;

  let result = '';
  // эта же строка в нижнем регистре
  const lowerString = str.toLowerCase();
  //проходим по всем символам строки
  for (let i = 0; i < str.length; i++) {
    // получаем нижний регистр буквы
    const currentLetter = lowerString[i];
    // если это пробел просто добавляем его и переходим к след.итерации
    if (currentLetter === ' ') {
      result += currentLetter;
      continue;
    }
    // определяем индекс текущ.буквы в алфавите
    const currentIndex = alphabet.indexOf(currentLetter);
    // изменяем индекс в соотве. со значением переданного числа
    let newIndex = currentIndex + num;
    // корректируем индекс в соотв.с размером массива алфавита
    if (newIndex > alphabet.length - 1) {
      newIndex = newIndex - alphabet.length;
    }
    if (newIndex < 0) {
      newIndex = alphabet.length + newIndex;
    }
    //добавляем в результирующую строку в зависимости от регистра в оригинале
    const newLetter = alphabet[newIndex];
    if (str[i] === str[i].toUpperCase()) {
      result += newLetter.toUpperCase();
    } else {
      result += newLetter;
    }
  }

  return result;
}

const string = 'Zoo Keeper';
// const string = 'Bqq Mggrgt'; // зашифров.
const shift = 2; // для зашифров.
// const shift = -2; // для расшифр.
const result = caesarCipher(string, shift);
console.log(result);
