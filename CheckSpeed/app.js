/**
 * Контроллер скорости
 * 
 * Предел допустимой скорости: 70 км/ч
 * За каждое превышение +5 км/ч - 1 штарафной балл
 * Если получено больше чем 12 штрафных баллов, то права отбираются
 */

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        return 'OK';
    }

    // вычисление баллов
    const above = speed - speedLimit;
    const points = Math.floor(above / kmPerPoint);

    if (points >= 12) {
        return 'License suspended';
    }

    return `Points: ${points}`;
}

// Запуск
const speed = 73;
const points = checkSpeed(speed);
console.log(points);