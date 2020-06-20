//Вывод входного слова в обратном порядке

function revOrder(word) {
    return [...word].reverse().join('');
}

console.log(revOrder('hello'));
console.log(revOrder('конь'));
console.log(revOrder('маузер'));

