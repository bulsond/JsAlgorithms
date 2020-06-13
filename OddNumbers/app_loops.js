/*
    Удаление из массива нечетных чисел
    с помощью цикла
*/

function evensOnly(array) {
    const result = [];
    array.forEach(element => {
        if (element % 2 == 0) {
            result.push(element);
        }
    });

    return result;
}

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));