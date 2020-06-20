//Вывод входного слова в обратном порядке

function revOrder(word) {
    let result = '';
    for (const letter of word) {
        result = letter + result;
    }
    return result;
}

console.log(revOrder('hello'));
console.log(revOrder('конь'));
console.log(revOrder('маузер'));

