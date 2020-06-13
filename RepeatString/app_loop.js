/*
    Повторить строку нужное число раз,
    если передано отрицательное число или 0,
    должна вернуться пустая строка
*/

function repeatString(str, count) {
    let result = String();
    if (count <= 0)
        return result;

    for (let index = 1; index <= count; index++) {
        result += str;
    }
    return result;
}

console.log(repeatString('дом', 4));
console.log(repeatString('лес', 3));
console.log(repeatString('ёж', -1));
console.log(repeatString('ель', 0));