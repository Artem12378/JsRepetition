/* Задание 1: Функции высшего порядка
Создайте функцию высшего порядка filterArray, которая:

Принимает массив и функцию-предикат (функцию, возвращающую true или false)
Возвращает новый массив, содержащий только те элементы, для которых предикат вернул true
Протестируйте функцию с массивом чисел, отфильтровав: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const evenNumbers = filterArray(numbers, num => num % 2 === 0); console.log(evenNumbers); const bigNumbers = filterArray(numbers, num => num > 5); console.log(bigNumbers); */

function filterArray(array, funcPred){
    const result = [];
    for(let i =0 ; i < array.length; i++){
        if(funcPred(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const evenNumbers = filterArray(numbers, num => num % 2 === 0); 
console.log(evenNumbers); 
const bigNumbers = filterArray(numbers, num => num > 5); 
console.log(bigNumbers)


/* Задание 2: Параметры по умолчанию
Создайте функцию createUser(name, age, city)
Функция должна возвращать объект с этими свойствами
Протестируйте функцию, вызвав её: // Все параметры по умолчанию const user1 = createUser(); console.log(user1); // {name: "Гость", age: 18, city: "Неизвестно"} // Только имя const user2 = createUser("Анна"); console.log(user2); // {name: "Анна", age: 18, city: "Неизвестно"} // Имя и возраст const user3 = createUser("Петр", 25); console.log(user3); // {name: "Петр", age: 25, city: "Неизвестно"} // Все параметры const user4 = createUser("Мария", 30, "Москва"); console.log(user4); // {name: "Мария", age: 30, city: "Москва"} */

function createUser(name ='Гость' , age = 18, city = 'Неизвестно'){
    return {name,age,city}
}

const user1 = createUser(); 
console.log(user1); 
// Все параметры по умолчанию const user1 = createUser(); console.log(user1); //
// {name: "Гость", age: 18, city: "Неизвестно"} 
// // Только имя const user2 = createUser("Анна"); console.log(user2); 
// // {name: "Анна", age: 18, city: "Неизвестно"} 
// // Имя и возраст const user3 = createUser("Петр", 25); console.log(user3); 
// // {name: "Петр", age: 25, city: "Неизвестно"} 
// // Все параметры const user4 = createUser("Мария", 30, "Москва"); console.log(user4); 
// // {name: "Мария", age: 30, city: "Москва"}

/* Задание 3: Замыкания
Создайте функцию createPasswordChecker, которая возвращает другую функцию с заранее заданным паролем.
Пример использования:
const checkPassword = createPasswordChecker("secret123");

console.log(checkPassword("password")); // false

console.log(checkPassword("secret123")); // true */

function createPasswordChecker(num){
    debugger
    return function Pass (){
        debugger
               return  num === 'secret123' ? true : false
            }
    return Pass
}

const checkPassword = createPasswordChecker();

console.log(checkPassword("password")); // false

console.log(checkPassword("secret123")); // true */
