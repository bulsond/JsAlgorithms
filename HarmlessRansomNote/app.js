/**
 * Harmless Ransom Note
 * Безобидная Записка О Выкупе
 *
 * Написать функцию, которой в качестве
 *  первого аргумента передается короткий текст (записка), а
 *  в качестве второго аргумента передается длинный текст (газетная статья),
 * вернет истину в случае если длинный текст (газетная статья) содержит все слова
 * в необходимом количестве, содержащиеся в коротком тексте (записка),
 * или вернет ложь в обратном случае.
 *
 */

// предполагается, что передаваемые тексты
//  состоят из строчных букв и
//  не содержат знаки препина́ния
function harmlessRansomNote(noteText, magazineText) {
  noteText = noteText.split(' ');
  magazineText = magazineText.split(' ');
  const magazineObj = {};

  // создаем словарь из газетной статьи
  // где в качестве ключа - слово
  // в качестве значения - количество появлений этого слова в статье
  // O(n)
  magazineText.forEach((word) => {
    if (word in magazineObj === false) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });
  console.log(magazineObj);

  // проверяем по этому словарю записку
  let result = true;
  // O(m-C)
  for (const word of noteText) {
    //если такое слово есть в словаре
    if (word in magazineObj) {
      //если появление слова было превышающее словарь
      if (--magazineObj[word] < 0) {
        result = false;
        break;
      }
    } else {
      result = false;
      break;
    }
  }

  return result;
}

// Linear Time Complexity
// O(n) + O(m) = O(n + m) => O(n)

// запуск
const noteText = 'this is a secret note for you from a secret admirer';
const magazineText =
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';
const result = harmlessRansomNote(noteText, magazineText);
console.log(result);
