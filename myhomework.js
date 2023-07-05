//Тесты
// 1)
//как расшифровывается DOM?
// Document Object Model

// 2)
//для чего нужен DOM?
//Для взаимодействия с документом: изменение элементов, их стилей, атрибутов, и т.д.

// 3)
//измените содержимое тега 'p' на 'Новый текст'
{/* <p id="txt">Some text</p> */}
// document.getElementById('txt').innerHTML = 'Новый текст'

// 4)
//выведите в консоли содержимое тега 'p'
{/* <p id="txt">Some text</p> */}
console.log(document.getElementById('txt').innerHTML)

// 5)
//получите доступ к элементу с помощью (get...)
{/* <div class="master"></div> */}
// document.getElementsByClassName('master')
//или
// document.querySelectorAll('.master')

// 6)
//получите доступ к элементу с помощью (get...)
{/* <div id="master"></div> */}
// document.getElementById('master')

// 7)
//получите доступ к элементу с помощью (get...)
{/* <div></div> */}
// document.getElementsByTagName('div')

// 8)
//получите доступ к элементу с помощью (query...) через имя атрибута
/* <div title="someText"></div> */
?????

// 9)
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
/* <div title="someText"></div> */
// document.querySelectorAll('div').title

// 10)
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
/* <div title="someText"></div> */
// document.querySelectorAll('div').title

// 11)
//получите доступ к элементу с помощью (query...) через имя класса
/* <div class="someText"></div> */
// document.querySelectorAll('.someText')

// 12)
//получите доступ к элементу с помощью (query...) через имя идентификатора
/* <div id="someText"></div> */
// document.querySelector('#someText')

// 13)
//получите доступ к элементу с помощью (query...) через тег
/* <div></div> */
// document.querySelectorAll('div')

// 14)
//измените значение атрибута 'type' на 'number' с помощью DOM метода
//<input type="text">
document.querySelectorAll('input')[0].type = 'number'
document.querySelectorAll('input')[0].setAttribute('type', 'number')

// 15)
//измените фоновый цвет блока div на красный с помощью DOM метода
/* <div id='block'></div> */
document.getElementById('block').style.backgroundColor = 'red'

// 16)
//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
/* <div></div> */
document.querySelectorAll('div')[0].title = 'message'
document.querySelectorAll('div')[0].setAttribute('title', 'message')

// 17)
//с помощью какого метода DOM можно создать элемент в javascript?
// .createElement()

// 18)
//с помощью какого метода DOM можно удалить элемент в javascript?
// .removeChild()

// 19)
//с помощью какого метода DOM можно добавить элемент в javascript?
// .append() или .appendChild()

// 20)
//с помощью какого метода DOM можно заменить элемент в javascript?
// .replaceChild(новый элемент, старый элемент)

// 21)
//с помощью какого метода DOM можно записать текст в элемент в javascript?
//.innerText или .innerHTML