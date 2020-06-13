/*
Сменить порядок имен(слов) в строке
с помощью прототипных функций
*/

/* Пример
    Толстой Лев -> Лев Толстой
    Пушкин Александр -> Александр Пушкин
*/

function nameSwap(str) {
    const separator = ' ';

    // const words = str.split(separator);
    // words.reverse();
    // return words.join(separator);

    return str.split(separator)
        .reverse()
        .join(separator);
}

console.log(nameSwap('Толстой Лев'));
console.log(nameSwap('Пушкин Александр'));