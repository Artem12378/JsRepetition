/* Задание 1: Деструктуризация массивов
Создайте массив weekDays со значениями ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
Используя деструктуризацию, извлеките: 
Выходные дни в массив weekend 
Последний рабочий день недели в переменную lastWorkDay 
Первый рабочий день недели в переменную firstWorkDay
Выведите все полученные переменные в консоль */

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const [firstWorkDay, , , ,lastWorkDay ,...weekend] = weekDays
console.log(firstWorkDay)
console.log(lastWorkDay)
console.log(weekend)


/* Задание 2: Деструктуризация объектов
Создайте объект person со следующими свойствами:


Используя деструктуризацию, извлеките:

Имя и фамилию в переменные name и surname
Возраст в переменную personAge
Массив навыков в переменную abilities
Университет в переменную university
 */

const person = {
    firstName:'Иван',
    lastName: 'Петров',
    age: 25,
    country: 'Россия',
    city: 'Москва',
    skills:['JavaScript', 'HTML', 'CSS'],
    education: {
        degree:'Магистр',
        university:'МГУ'
    } 
};

const {firstName:name, lastName:surname, age:personAge, skills:abilities, education:{university} } = person
console.log(name)
console.log(personAge)
console.log(abilities)
console.log(university)


/* Задание 3: Rest-оператор
Создайте функцию calculateAverage, которая принимает неограниченное количество аргументов-чисел и возвращает их среднее арифметическое
Используйте rest-оператор для сбора всех аргументов в массив
Протестируйте функцию для разных наборов чисел:
console.log(calculateAverage(5, 10, 15)); // 10

console.log(calculateAverage(2, 4, 6, 8, 10)); // 6

console.log(calculateAverage(1)); // 1

console.log(calculateAverage()); // 0 или NaN или другое значение по умолчанию */

function calculateAverage(...sum){
    const newSum = [...sum].reduce((sumPlus,n) => sumPlus + n,0);
    return newSum
}

console.log(calculateAverage(1,2,3,4,5,6,7,8,9,10))