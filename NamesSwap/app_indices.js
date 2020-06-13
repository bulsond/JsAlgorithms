/*
Сменить порядок имен(слов) в строке
с помощью индексов
*/

/* Пример
    Толстой Лев -> Лев Толстой
    Пушкин Александр -> Александр Пушкин
*/

function nameSwap(str) {
    const separator = ' ';
    const words = str.split(separator);

    return `${words[1]} ${words[0]}`;

}

console.log(nameSwap('Толстой Лев'));
console.log(nameSwap('Пушкин Александр'));