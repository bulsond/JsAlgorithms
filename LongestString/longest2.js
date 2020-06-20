// найти в строке самое длинное слово и вывести его длину

//
//Как пройти в библиотеку? => 10
//Спасибо, я понял. => 7

function longestWordLength(input) {
    //использовать рег.выражение для удаления знаков пунктуации из input
    const regEx = /[^А-Яа-я]/g;
    const text = input.replace(regEx, ' ');
    //получить массив слов из input
    const words = text.split(' ');
    //создать пустую переменную для длинного слова
    let longest = '';
    //проитись по массиву и выбрать самое длинное слово
    for (const word of words) {
        if (longest.length < word.length)
            longest = word;
    }
    //вернуть длину длинного слова
    return longest.length;
}

console.log(longestWordLength('Как пройти в библиотеку?'));
console.log(longestWordLength('Спасибо, я понял.'));