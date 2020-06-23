/**
 * Программа читает текст из стандартного ввода,
 * вычисляет частоту появления каждой буквы в тексте
 * и отображает в виде гистограммы результат.
 * Для запуска программы требуется Node 12 или старше.
 * 
 * В Linux окружении вызвать программу можно так
 *  node charfreq.js < corpus.txt
 */

//Класс наследует Map и переопределяет метод get(),
//возвращает определенное значение вместо null когда ключ отсутствует в Map
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue; //сохранение значения по-умолчанию
    }

    //переопределяем get()
    get(key) {
        if (this.has(key)) {
            return super.get(key); //если такой ключ есть, возвращаем значение
        } else {
            //иначе возвращаем значение по-умолчанию
            return this.defaultValue;
        }
    }
}

//Класс Histogram - на основании текстовых данных
//вычисляет и отображает частоту использования букв
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0); //трансляция букв в численность
        this.totalLetters = 0; // суммарное количество букв в тексте
    }

    //внесение блока текста
    add(text) {
        //удаление из текста пробелов и приведение к верхнему регистру
        text = text.replace(/\s/g, '').toUpperCase();
        //пробегаем по тексту как массиву букв
        for (let character of text) {
            //получаем сохраненное ранее значение численности для буквы
            let count = this.letterCounts.get(character);
            //запоминаем новое значение численности
            this.letterCounts.set(character, count + 1);
            //обновляем значение общего количества букв в тексте
            this.totalLetters++;
        }
    }

    //отображение данны в виде ACII графика
    toString() {
        //конвертируем Map в массив пар ключ-значение
        let entries = [...this.letterCounts];
        //сортировка массива сначала по численности, а затем по алфавиту
        entries.sort((a, b) => {
            //если численность (индекс 1) равна, то сортируем по алфавиту (индекс 0)
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                //иначе сортируем по численности в порядке убывания
                return b[1] - a[1];
            }
        });
        //преобразование численности в процент
        for (const entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100;
        }
        //отбрасываем буквы с процентом ниже 1%
        entries = entries.filter(entry => entry[1] >= 1);
        //создаем массив строк на основнии данных
        let lines = entries.map(([l, n]) =>
            `${l}: ${'#'.repeat(Math.round(n))} ${n.toFixed(2)}%`);
        //конкатенируем массив строк, с разделителем новой строки
        return lines.join('\n');
    }
}

//Это асинх. функция создает Histogram объект,
//асинхронно читает блоки текста из стандартного ввода
//и добавляет эти блоки текста в экзм. Historgam.
//Когда будет достигнут конец потока ввода, возвращает экзм. Historgam.
async function histogramFromStdin() {
    //читать юникод строки, а не байты
    process.stdin.setEncoding("utf-8");
    //создаем экземпляр Histogram
    let histogram = new Histogram();
    //вносим блоки текста
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

//Входная точка прогрммы. Создает Histogram объект с текстовыми
//из стандартного ввода, а затем отображает гистограмму
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });