//Буквы слова разместить в массиве согласно алфавитного порядка

function alphaOrder(word) {
    return word.split('').sort().join('');
}

console.log(alphaOrder('hello'));
console.log(alphaOrder('конь'));
console.log(alphaOrder('маузер'));

