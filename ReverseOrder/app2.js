//Вывод входного слова в обратном порядке

function revOrder(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    return result;
}

console.log(revOrder('hello'));
console.log(revOrder('конь'));
console.log(revOrder('маузер'));

