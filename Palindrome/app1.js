// Определить является ли строка палиндромом

// Eva, Can I Stab Bats In A Cave?
// Was It A Rat I Saw?
// A Nut For A Jar Of Tuna?

// Вор в лесу сел в ров.
// А роза упала на лапу Азора.
// У лип Леша нашел пилу.

function isPalindrome(str) {
  // удалить с помощью регулярки все пункт.знаки и пробелы
  let inputWithoutSpecialCharacters = str.replace(/[^A-Za-zА-Яа-я0-9_]/g, '');
  // сделать все буквы строчными
  inputWithoutSpecialCharacters = inputWithoutSpecialCharacters.toLowerCase();
  // создать реверсивную версию массива строки
  let reverseInput = [...inputWithoutSpecialCharacters].reverse().join('');
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
