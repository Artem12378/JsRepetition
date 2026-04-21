/* Задание 1: Выбор элементов DOM
Создайте HTML-страницу с навигационным меню, содержащим:

Главный заголовок (<h1>) с id="mainTitle"
Навигационную панель (<nav>) с классом "mainNav"
Список (<ul>) с 4 элементами списка (<li>) с классом "navItem"
Каждый элемент списка должен содержать пустую ссылку (
Используя JavaScript, выполните следующие действия:

Получите доступ к заголовку, используя getElementById
Получите доступ к навигационной панели, используя querySelector
Получите все элементы списка с классом "navItem", используя getElementsByClassName
Получите те же элементы списка, используя querySelectorAll
Выведите все полученные элементы в консоль */

const header = document.getElementById('mainTitle')
const navMenuTag = document.querySelector('nav')
const allLiItem = document.getElementsByClassName('navItem')
const selItem = document.querySelectorAll('li')
const linkA = document.querySelectorAll('a')


console.log(header)
console.log(navMenuTag)
console.log(allLiItem)
console.log(selItem)


/* Задание 2: Изменение содержимого и атрибутов
Используя полученные в задании 1 элементы:

Измените текст заголовка на "Моё навигационное меню"
Создайте массив с названиями пунктов меню: "Главная", "О нас", "Услуги", "Контакты"
Создайте массив с соответствующими ссылками: "index.html", "about.html", "services.html", "contacts.html"
Используя цикл, установите для каждой ссылки в меню текст из первого массива
В том же цикле установите для каждой ссылки атрибут href со значением из второго массива
Добавьте для первой ссылки атрибут title со значением "Перейти на главную страницу" */



header.textContent = 'Моё навигационное меню'
const MenuItem = ["Главная", "О нас", "Услуги", "Контакты"];
const MenuHref = ["index.html", "about.html", "services.html", "contacts.html"]

console.log(allLiItem[0].textContent = `${MenuItem[0]}`)


for (let i = 0; i < MenuItem.length; i++) {
    linkA[i].textContent = MenuItem[i];
    linkA[i].href = MenuHref[i];
}


linkA[0].setAttribute('title', 'Перейти на главную страницу');



/* Задание 3: Работа с дочерними элементами
Для той же HTML-страницы:

Получите доступ к первому элементу списка через его родителя (список ul)
Получите доступ к ссылке внутри второго элемента списка через его родителя
Добавьте для навигационной панели внутренний отступ (padding) 15px, используя свойство style
Измените цвет текста для всех ссылок в меню на темно-синий
Для последней ссылки в меню измените фоновый цвет на светло-серый */

const newUlaccess = document.querySelector('nav ul')
console.log(newUlaccess)

const newUlAccess = newUlaccess.children[1]
const newLinkLi = newUlAccess.querySelector('a')
console.log(newLinkLi)

header.style.padding=`15px`
linkA.forEach(link => link.style.color ='red')


console.log(header)
console.log(linkA)


/* Дополнительное задание
Создайте кнопку под навигационным меню с текстом "Сменить тему". При нажатии на кнопку:

Если у навигационной панели светлый фон, сделайте его темным, а текст светлым
Если у навигационной панели темный фон, сделайте его светлым, а текст темным
Используйте для этого функцию-обработчик события и свойство style */

const Container = document.querySelector('.container')
const button = document.querySelector('button')

button.addEventListener('click', ()=> {
    Container.style.backgroundColor = 
        Container.style.backgroundColor === 'black' ? 'red' : 'black';
})


console.log(button)