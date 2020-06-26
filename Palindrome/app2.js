// Определить является ли строка палиндромом
// c помощью цикла

function isPalindrome(str) {
  // удалить с помощью регулярки все пункт.знаки и пробелы
  // сделать все буквы строчными
  const inputWithoutSpecialCharacters = str
    .replace(/[^A-Za-zА-Яа-я0-9_]/g, '')
    .toLowerCase();
  // создать реверсивную версию массива строки
  let reverseInput = '';
  //   for (let i = inputWithoutSpecialCharacters.length - 1; i >= 0; i--) {
  //     reverseInput += inputWithoutSpecialCharacters[i];
  //   }

  for (letter of inputWithoutSpecialCharacters) {
    reverseInput = letter + reverseInput;
  }
  // вернуть булевое значение равенства реверсивной строки и входной строки после регулярки
  return reverseInput === inputWithoutSpecialCharacters;
}

console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome('Was It A Rat I Saw?'));
console.log(isPalindrome('A Nut For A Jar Of Tuna?'));
console.log(isPalindrome('Is this a palindrom?'));

console.log(isPalindrome('Вор в лесу сел в ров.'));
console.log(isPalindrome('А роза упала на лапу Азора.'));
console.log(isPalindrome('У лип Леша нашел пилу.'));
console.log(isPalindrome('Эта строка не полиндром?'));
