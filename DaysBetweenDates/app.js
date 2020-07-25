/**
 * Даны две даты: дата дня рождения и текущая дата. Определить возраст в днях.
 * Даты в формате Год Месяц День. Предполагается корректность дат, текущяя дата
 * не может быть старше дня рождения.
 * Простой пример: дата рождения 1 января 2012 года, текущая дата 2 января 2012 года,
 * следовательно возраст равен 1 дню.
 */

// получение следующей даты
function getNextDate(year, month, day) {
  if (day < getDaysInMonth(year, month)) {
    return { year: year, month: month, day: day + 1 };
  } else {
    if (month < 12) {
      return { year: year, month: month + 1, day: 1 };
    } else {
      return { year: year + 1, month: 1, day: 1 };
    }
  }
}

// получение количества дней в месяце
function getDaysInMonth(year, month) {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapMonthsDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(year)) {
    return leapMonthsDays[month - 1];
  } else {
    return monthsDays[month - 1];
  }
}

// проверка является ли год высокосным
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// определение является ли вычисляемая дата меньше текущей даты меньше
function dateIsBefore(countDate, stopDate) {
  if (countDate.year < stopDate.year) {
    return true;
  }
  if (countDate.year === stopDate.year) {
    if (countDate.month < stopDate.month) {
      return true;
    }
    if (countDate.month === stopDate.month) {
      return countDate.day < stopDate.day;
    }
  }
  return false;
}

// Решение
function daysBetweenDates(year1, month1, day1, year2, month2, day2) {
  const stopDate = { year: year2, month: month2, day: day2 };
  let countDate = { year: year1, month: month1, day: day1 };
  let days = 0;

  while (dateIsBefore(countDate, stopDate)) {
    countDate = getNextDate(countDate.year, countDate.month, countDate.day);
    days++;
  }

  return days;
}

// тесты
// console.log(getNextDate(2012, 6, 29));
// console.log(getNextDate(2012, 1, 30));
// console.log(getNextDate(2012, 12, 31));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2019));
// console.log(isLeapYear(2020));

// Запуск
console.log(daysBetweenDates(2012, 1, 1, 2012, 1, 2)); // 1
console.log(daysBetweenDates(2012, 12, 7, 2012, 12, 7)); // 0
console.log(daysBetweenDates(2012, 12, 7, 2013, 12, 7)); // 365
console.log(daysBetweenDates(2013, 12, 7, 2014, 12, 7)); // 365
console.log(daysBetweenDates(2012, 2, 28, 2012, 2, 29)); // так как год высокосный 1
console.log(daysBetweenDates(2012, 1, 1, 2013, 1, 1)); // 366
console.log(daysBetweenDates(2013, 1, 1, 2014, 1, 1)); // 365
