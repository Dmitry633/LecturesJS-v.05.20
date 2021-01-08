//37. ClassList и делегирование событий
//получим элементы
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
//Для обращения  к классам нам необходимо прописать classlist - это свойство DOM-узла
console.log(btns[0].classList.length);//2 шт классов у первой кнопки(св-во classlist length)
//рассмотрим методы:
console.log(btns[0].classList.item(0));//метод получающий класс под конкретным индексом (порядк № класса пишется в ())
console.log(btns[1].classList.add('red', 'sdfsdf'));//доб класса
//console.log(btns[0].classList.remove('blue'));//удаление класса
//console.log(btns[0].classList.toggle('blue'));//метод добавляющий класс, при его отсутсвии на элементе, и удалающий при наличии
//Наличие класса можно использовать вусловиях (получив при помощи item, но лучше contains)
//contains Позволяет проверять наличие класса на определенном элементе и возвращаеи буллиновое значение
if(btns[0].classList.contains('red')){
    console.log('red');
}
//этот прием позволяет динамически преобразовывать страницы
// btns[0].addEventListener('click',() => {
//     if (!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });
//Попробуем реализовать то же самое при помощи тоггла:
btns[0].addEventListener('click',() => {        //работает также, как и алгоритм с if, но в сложных скрптах могут быть баги
    btns[1].classList.toggle('red')
});

//Есть устаревшее!!! свойство className, соб=держит классы в качестве одной строки
   // console.log(btns[0].className);//неудобностьв том , что получаем список классов как одну строку и 
    //для манипуляции классами, необходимо изменять этоу строку каки либо методом, намного удобнее исп-ть уже готовые методы (стрю7-10)

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
//назначим обработсик событий (О С) на родителя элементов, для реализации этого события на каждом потомке
// wrapper.addEventListener('click', (event) => { //event - объект события, содержит всю информацию об элементе, на котором происходит событие
//     //console.dir(event.target);//убедимся в изобилил информации в event
//     if (event.target && event.target.tagName == 'BUTTON') { //убедимся, что кликнули в кнопку
//     //проиписали в т ч event.target тк Э тэги, на которые невозмлжно кликнуть и поэтому у них не будет event.target
//        console.log('hello'); 
//     }
//    /* if (event.target && event.target.classList.contains('blue')) { //можно и через классДист
//         console.log('hello');
//     }*/
// });

//Еще один спопоб (любят сотрудники гугла)
    wrapper.addEventListener('click', (event) => { //event - объект события, содержит всю информацию об элементе, на котором происходит событие
        //console.dir(event.target);//убедимся в изобилил информации в event
        if (event.target && event.target.matches('button.red')) { //более продвинутое делегирование, т.к. указан слектор интересующий нас
           console.log('hello'); 
        }
    });
    

//Назначим тот же О С методом обычного перебора, без делегирования
// btns.forEach(btn => {// гворим, что btn  - это каждая кнопка в этом псевдомассиве
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });
// //при этом вновь добавленный элемент(стр. 66-69) буде уже без О С, т.к О С был добавлен 
// //до объявления (стр. 66-69)  - делегирование мы здесь не используем  - ЭТО КЛАССИЧЕСКАЯ ОШИБКА

//добавим элементы на страницу
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);//добавим на страницу созданный элемент
//элемент добавлен и на нем тоже есть О С (стр. 36)
console.log(btn);



