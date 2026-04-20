/* Задание 1: Работа с циклом for
Создайте массив numbers с числами от 1 до 10. Используя цикл for, выведите в консоль каждое число, умноженное на 2. */

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(i=0; i <= numbers.length; i++){
    console.log(numbers[i]*2)
}

/* Задание 3: Цикл while
Напишите программу, которая генерирует случайные числа от 1 до 10 с помощью Math.random(), пока не выпадет число 7. Используйте цикл while и выводите каждое сгенерированное число в консоль. */

let randomNumber;
while (randomNumber !== 7) {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    console.log(randomNumber);
}
console.log("Выпало 7! Цикл завершён.");

/* Задание 2: Перебор массива с помощью for
Создайте массив colors с пятью названиями цветов. Используя цикл for и индексы элементов, выведите в консоль сообщения вида: "Цвет номер [номер]: [название цвета]". */

const colors = ['green', 'red', 'blue', 'yellow', 'white'];

for(let i=0; i<=colors.length; i++){
   
    if(colors[i] === undefined) break;
    console.log(`Цвет номер ${i+1}: ${colors[i]   }`)
    
    
}
