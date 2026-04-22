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


let titleClickCount = 0

header.addEventListener('click', ()=> {
    titleClickCount++;
   
    !(titleClickCount % 3) ? header.style.color = 'red' : header.style.color = 'green'
    if( titleClickCount % 10 === 0){
    header.textContent = 'Вы нашли пасхалку'
    header.style.color = 'red'
   }
})


/* let goods = [
    {name:'apple', price: 1},
    {name:'banana', price: 2},
    {name:'orange', price: 3},
    {name:'kiwi', price: 4},
    {name:'mango', price: 5}
] */
/* 
const goodsList = document.getElementById('goodsList')

const renderGoods = (goodsToRender) => { 
    while(goodsList.firstChild){
        goodsList.firstChild.remove()
    }

    if(!goodsToRender.length){
        const liEmpty  = document.createElement('li');
        liEmpty.textContent = `пусто`
        goodsList.appendChild(liEmpty)
    }

    goodsToRender.forEach((item) => {
        const liGood  = document.createElement('li');
        liGood.textContent = `${item.name} - ${item.price}`
        goodsList.appendChild(liGood)
    })
}

const filterContainer = document.createElement('div')
filterContainer.style.display = 'flex'
filterContainer.style.width = '100%'

const filterInput = document.createElement('input')
filterInput.placeholder = 'Filter goods by price'
filterContainer.appendChild(filterInput)

filterInput.addEventListener('input', (event) => {
    const EventValue = event.target.value.toLowerCase()

    const goodsToRender = goods.filter((good) => {
        return good.name.toLowerCase().includes(EventValue)
    })
    renderGoods(goodsToRender)
})


const containerDiv = document.querySelector('.container');
document.body.insertBefore(filterContainer, containerDiv);


renderGoods(goods);

 */
/* Задание 1: Создание пасхалки со счетчиком кликов
Создайте на странице заголовок с id="pageTitle"
Напишите JavaScript-код, который: Отслеживает клики по заголовку Считает количество кликов Меняет цвет заголовка на красный при каждом третьем клике Возвращает белый цвет при следующем клике после красного
Дополнительно: модифицируйте код так, чтобы при достижении 10 кликов текст заголовка менялся на "Вы нашли пасхалку!" */


/* В HTML файле создайте структуру для магазина:

<div id="filterContainer"></div>

<nav id="mainNav"></nav>

<div id="goodsList"></div>

Используя JavaScript:

1. Создайте массив товаров с полями:



2. Напишите функцию renderGoods(goodsToRender), которая:

Очищает контейнер с id="goodsList"
Создает для каждого товара элемент списка (li)
Отображает название и цену товара
Добавляет элементы в контейнер
При пустом массиве показывает сообщение "Товары не найдены"
3. Создайте поле для фильтрации товаров:

Программно создайте элемент input и добавьте его в filterContainer
Настройте отслеживание события input
При вводе текста фильтруйте товары по названию (без учета регистра)
Обновляйте список товаров при каждом изменении в поле ввода */
const goods = [
    { name: "Яблоко", price: 30 },
    { name: "Банан", price: 45 },
    { name: "Апельсин", price: 50 },
    { name: "Манго", price: 90 },
    { name: "Киви", price: 60 },
    { name: "Ананас", price: 120 }
];

const goodList = document.getElementById('goodsList');
const ulGood = document.createElement('ul');
goodList.appendChild(ulGood);

// Стиль для дорогих товаров
const style = document.createElement('style');
style.textContent = '.expensive { color: red; }';
document.head.appendChild(style);

// Функция рендера (обновляет список и счётчик)
function renderGoods(goodsToRender) {
    // Очищаем ulGood (не goodsList, иначе удалим сам ulGood)
    while (ulGood.firstChild) {
        ulGood.firstChild.remove();
    }

    if (goodsToRender.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Товары не найдены';
        li.style.margin = '5px';
        li.style.backgroundColor = '#f9f9f9';
        ulGood.appendChild(li);
    } else {
        /* Бонусное задание: Интерактивность элементов
Добавьте обработку событий для элементов списка товаров:
При наведении мыши на товар меняйте его фон на светло-голубой
При клике на товар добавляйте его в новый массив "корзина"
Создайте элемент для отображения количества товаров в корзине
При повторном клике на товар, уже добавленный в корзину, удаляйте его из корзины */
        goodsToRender.forEach(el => {
            const li = document.createElement('li');
            li.textContent = `${el.name} - ${el.price}`;
            if (el.price > 80) {
                li.classList.add('expensive');
            }
            ulGood.appendChild(li);

            li.addEventListener('click', () => {
                const existing = basketCount.findIndex(item => item.name === el.name);
                if (existing === -1) {
                    basketCount.push(el);
                } 
                basket.textContent = `Корзина: ${basketCount.length}`;
            });

            li.addEventListener('mouseenter', () => {
                li.style.backgroundColor = 'lightblue';
            });


            li.addEventListener('mouseleave', () => {
                li.style.backgroundColor = ''; // возвращаем исходный фон (прозрачный или тот, что был)
            });

        });
    }

    // Обновляем счётчик (количество найденных / общее)
    filterGoodscounter.textContent = `Найдено товаров: ${goodsToRender.length} из ${goods.length}`;
}

// Создаём счётчик (сразу добавим в filterContainer)
const filterGoodscounter = document.createElement('div');
filterGoodscounter.id = 'goodsCounter';

// Создаём контейнер фильтров
const filterContainer = document.createElement('div');
filterContainer.style.display = 'flex';
filterContainer.style.width = '100%';




// Поля ввода и кнопка
const filterInputName = document.createElement('input');
filterInputName.placeholder = 'Filter goods by name';
const filterInputPrice = document.createElement('input');
filterInputPrice.placeholder = 'Filter goods by price';
const filterButton = document.createElement('button');
filterButton.textContent = 'Сбросить фильтры';

const basket = document.createElement('div');
const basketCount = [];
basket.textContent = 'Корзина: 0';


// Добавляем всё в контейнер
filterContainer.append(filterInputName, filterInputPrice, filterButton, filterGoodscounter,basket);

// Вставляем фильтры перед .container
const containerDiv = document.querySelector('.container');
document.body.insertBefore(filterContainer, containerDiv);

// Стили для списка товаров
goodList.style.width = '100%';
goodList.style.padding = '10px';
goodList.style.border = '1px solid #ccc';

// Обработчики событий
filterButton.addEventListener('click', () => {
    filterInputName.value = '';
    filterInputPrice.value = '';
    renderGoods(goods);
});

filterInputPrice.addEventListener('input', (event) => {
    const priceValue = Number(event.target.value);
    const filtered = goods.filter(item => item.price >= priceValue);
    renderGoods(filtered);
});

filterInputName.addEventListener('input', (event) => {
    const nameQuery = event.target.value.toLowerCase();
    const filtered = goods.filter(item => item.name.toLowerCase().includes(nameQuery));
    renderGoods(filtered);
});

// Первоначальный рендер всех товаров
renderGoods(goods);
/* /* Задание 3: Расширенная фильтрация
1. Добавьте второе поле ввода для фильтрации по цене:

Программно создайте элемент input с типом "number"
Добавьте атрибут placeholder="Максимальная цена"
Фильтруйте товары так, чтобы отображались только те, чья цена меньше или равна введенному значению
2. Объедините логику фильтрации:

Товары должны соответствовать обоим критериям (и названию, и цене)
При пустом поле цены учитывайте только фильтр по названию
При пустом поле названия учитывайте только фильтр по цене */




/* Задание 4: Улучшение интерфейса
Добавьте стили для списка товаров:
Для контейнера goodsList: ширина 100%, отступы 10px, рамка 1px solid #ccc
Для элементов списка: margin: 5px, padding: 10px, background-color: #f9f9f9
Для товаров, цена которых больше 80: добавляйте класс .expensive с красным текстом цены
2. Создайте кнопку "Сбросить фильтры":

Программно создайте button и добавьте в filterContainer
При нажатии очищайте оба поля ввода
После очистки полей обновите список товаров (отобразите все товары) */


/* Бонусное задание: Интерактивность элементов
Добавьте обработку событий для элементов списка товаров:
При наведении мыши на товар меняйте его фон на светло-голубой
При клике на товар добавляйте его в новый массив "корзина"
Создайте элемент для отображения количества товаров в корзине
При повторном клике на товар, уже добавленный в корзину, удаляйте его из корзины */