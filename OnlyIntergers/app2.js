//из смешанного массива необходимо создать массив целых чисел
//[2, 'two', 4, 'four', 6, 'six'] => [2, 4, 6]
//['a', 24, 'd', 32, 'b', 7 ] => [24, 32, 7]

function toIntegersArray(array) {

    return array.filter(e => typeof e === 'number');
}

console.log(toIntegersArray([2, 'two', 4, 'four', 6, 'six']));
console.log(toIntegersArray(['a', 24, 'd', 32, 'b', 7]));