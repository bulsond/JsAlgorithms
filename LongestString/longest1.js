// найти в строке самое длинное слово и вывести его длину

//
//Как пройти в библиотеку? => 10
//Спасибо, я понял. => 7

function longestWordLength(input) {
    //разбивка текста на массив слов
    let signs = ['.', ',', '?'];
    let text = input;
    signs.forEach(s => {
        text = text.replace(s, '');
    });
    const words = text.split(' ');

    //получение массива длин слов и сортировка по убыванию
    const lengths = words
        .map(w => w.length)
        .sort((a, b) => b - a);

    //возвращаем первый как самый большой
    return lengths[0];
}

console.log(longestWordLength('Как пройти в библиотеку?'));
console.log(longestWordLength('Спасибо, я понял.'));