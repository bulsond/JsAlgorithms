// Определить является ли строка палиндромом
// без использования регулярных выражений

function isPalindrome(string) {
  let result = false;
  //преобразуем входную строку в массив букв, исключая все пункт.знаки и пробелы
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const stringLetters = [];
  string
    .toLowerCase()
    .split('')
    .forEach((char) => {
      if (validCharacters.indexOf(char) > -1) {
        stringLetters.push(char);
      }
    });
  // console.log(stringLetters);
  //сравниваем с обратным строкой
  if (stringLetters.join('') === stringLetters.reverse().join('')) {
    result = true;
  }
  return result;
}

const string = "Madam, I'm Adam.";
const result = isPalindrome(string);
console.log(result);
