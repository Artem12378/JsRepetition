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
const button = document.querySelector('.Theme')

button.addEventListener('click', ()=> {
    Container.style.backgroundColor = 
        Container.style.backgroundColor === 'violet' ? 'yellow' : 'violet';
})





/* Задание 1: Удаление элементов из DOM-дерева
Создайте HTML-документ с элементом
Используя JavaScript:
Получите доступ к элементу списка по его id
Напишите цикл, который будет удалять все дочерние элементы из списка, пока они не закончатся
Проверьте в консоли браузера, что список действительно пуст, используя */

/* const ul = document.querySelector('ul');
while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
 */
/* Задание 2: Создание и добавление элементов в DOM
Используя тот же HTML-документ, создайте массив объектов следующего вида:
const links = [

{ text: "Главная", url: "index.html", icon: "🏠" },

{ text: "Каталог", url: "catalog.html", icon: "📋" },

{ text: "Контакты", url: "contacts.html", icon: "📞" },

{ text: "О нас", url: "about.html", icon: "ℹ️" },

{ text: "Помощь", url: "help.html", icon: "❓" }

];

2. Напишите JavaScript-код, который:

Создаст для каждого объекта в массиве элемент <li> с классом "item"
Внутри каждого <li> создаст элемент <a> со следующими свойствами:
Текст ссылки должен содержать иконку (icon) и текст (text) из соответствующего объекта
Атрибут href должен быть установлен в значение url из объекта
Добавит все созданные элементы в список */

const links = [

{ text: "Главная", url: "index.html", icon: "🏠" },

{ text: "Каталог", url: "catalog.html", icon: "📋" },

{ text: "Контакты", url: "contacts.html", icon: "📞" },

{ text: "О нас", url: "about.html", icon: "ℹ️" },

{ text: "Помощь", url: "help.html", icon: "❓" }

];

const Ul = document.createElement('ul');
Ul.style.listStyle = 'none';
Ul.style.padding = '0';
Ul.style.width = '200px';


for(i=0; i< links.length; i++){
    const LI = document.createElement('li');
    LI.classList.add('item')
    LI.textContent = `${links[i].text}`

  // Настройка позиционирования и внешнего вида LI
    LI.style.position = 'relative';
    LI.style.padding = '8px 30px 8px 12px';
    LI.style.background = '#f0f0f0';
    LI.style.marginBottom = '4px';
    LI.style.borderRadius = '4px';
    LI.style.listStyle = 'none';
    LI.style.cursor = 'default';




    // Создаём ссылку

    const a = document.createElement('a');
    a.textContent = `${links[i].icon}`
    a.href = links[i].url;

    a.style.marginLeft = '8px';
    a.style.textDecoration = 'none';
    a.style.color = 'blue';
    LI.appendChild(a);

     // СОЗДАЁМ КРЕСТИК
    const closeSpan = document.createElement('span');
    closeSpan.textContent = '✖';
    closeSpan.style.position = 'absolute';
    closeSpan.style.right = '8px';
    closeSpan.style.top = '50%';
    closeSpan.style.transform = 'translateY(-50%)';
    closeSpan.style.cursor = 'pointer';
    closeSpan.style.display = 'none';        // по умолчанию скрыт
    closeSpan.style.fontSize = '16px';
    closeSpan.style.color = '#999';
    closeSpan.style.userSelect = 'none';

 // Эффект при наведении на сам крестик (меняем цвет)

    closeSpan.addEventListener('mouseenter', () => closeSpan.style.color = 'red');
    closeSpan.addEventListener('mouseleave', () => closeSpan.style.color = '#999');
    
    // Показываем крестик, когда мышь на LI
    LI.addEventListener('mouseenter', () => {
        closeSpan.style.display = 'inline-block';
    });
    // Скрываем, когда мышь уходит с LI
    LI.addEventListener('mouseleave', () => {
        closeSpan.style.display = 'none';
    });
    // При клике на крестик удаляем LI
    closeSpan.addEventListener('click', (event) => {
        event.stopPropagation();  // чтобы событие не поднялось выше
        LI.remove();
    });
    
    // Добавляем крестик в LI
    LI.appendChild(closeSpan);
    
    // Добавляем LI в UL
    Ul.appendChild(LI);

}

document.body.appendChild(Ul)
document.body.appendChild(Ul); // добавил в конец <body>


/* Задание 3: Динамическое изменение контента
Добавьте кнопку "Добавить пункт меню" на страницу
При нажатии на кнопку:
Запросите у пользователя название нового пункта меню через prompt
Создайте новый элемент <li> с классом "item"
Внутри создайте элемент <a> с текстом, который ввел пользователь, и иконкой "🔍"
Установите атрибут href равным "search.html?query=" + введенный текст в нижнем регистре
Добавьте новый элемент в конец списка */

const buttonAddMenu = document.querySelector('.AddMenu')

buttonAddMenu.addEventListener('click', () => {
    const InputUser = prompt("Напишите новый пункт меню")
    const li = document.createElement('li')
    li.classList.add('item')

    const a = document.createElement('a')
    a.textContent = `${InputUser} 🔍`
    a.href = `search.html?query= ${InputUser}`

    li.appendChild(a);
      Ul.appendChild(li);

    
    
} )


console.log(buttonAddMenu)

