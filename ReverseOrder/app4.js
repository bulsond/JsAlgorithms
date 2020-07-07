/**
 * Reverse Words
 * Каждое слово в строке должно быть с обратным порядком букв,
 * но сам порядок слов должен остаться без изменения.
 * Нельзя использовать Array.prototype.reverse()
 */

function reverseWords(string) {
  let result = [];
  for (const word of string.split(' ')) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    result.push(reverseWord);
  }
  return result.join(' ');
}

const string = 'this is a string of words';
const result = reverseWords(string);
console.log(result);
