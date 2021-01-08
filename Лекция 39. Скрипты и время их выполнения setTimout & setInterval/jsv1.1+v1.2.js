//v1.2
/*
const timerId = setTimeout(function() {
    console.log('Hello');// на этом этапе (до этой строки) ф-ция не вызывается, а лишь объявлена
}, 2000)//а на этом она уже вызывается через 2 сек.
*/
//добавим аргументы(аргументы для ф-ции внутри)
/*
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello again')//то же самое, что и стр 12-14 (аргументов может быть бесконечное количество)
*/
// также может передаваться готовая ф-ция
/*
const timerId = setTimeout(logger, 2000)//здесь logger не вызывается(нет скобок), 
   // объявляется(по сути ссылка на нее), вызовется она ерез 2 сек

function logger() {
    console.log('text');
}
*/
//зачем мы поместили setTimeout в переменную? - (ф-ция работает и без нее)
//для того, чтобы у sT был идентификатор(емы могли его определять), т.к. на странице их м б много
//а определять и нужно для того, чтобы их потом останавливать с помощью clearInterval():
//clearInterval(timerId);

//пример "после клика на кнопку"
const btn = document.querySelector('.btn');
   let timerId,
   i = 0;
//Для повторения ф-ции через определнный интервыл есть ф-ция setInterval()(строка с sT заменена на sI (c 36)):

// btn.addEventListener('click', () => {
// //const timerId = setTimeout(logger, 2000)//здесь timerId is not defined (не определена), 
// //т к она внутри О С  - и являетсялокальной переменной- для решения объявляется переменная на уровне выше(c 29)
// timerId = setInterval(logger, 500);

// })

// //clearInterval(timerId);//не сработает, т.к timerId теперь - undefined - добавим итератор i в logger

// function logger() {
//     if (i === 3){
//         clearInterval(timerId);//а теперь сработает
//     }
//     console.log('text');
//     i++;
// }
// /* Отличие setTimeout от setInterval
// setInterval - не учитывает сколько исполняется ф-ция внутри нее и задержка по времени может быть выставлена меньше, чем время
// исполнения ф-ции => может возникнуть проблема
//Также sI повторяет действия многократно, а sT  - выполняет только один раз
// setTimeout - рекурсивный вызов (значит ф-ция вызывает сама себя) и эта проблема решается setTimeut:
// */
// let id =setTimeout(function log(){
//     console.log('Hi');
//     id = setTimeout(log, 2000);//запускаем sT c этой же ф-цией(перезаписываем переменную)
// }, 5000);    //сначала ожидание 5 с, затем ф-ция повторяется с интервалом 2 с.
    //напишем простую анимацию
    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame (){
            if (pos == 300){
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
    
            }
        }
    }
    btn.addEventListener('click', myAnimation);
    

//--------------------------------------------------------------------------------------------------------------
//v1.1
/*
let timerId = setTimeout(sayHello, 3000);//первый аргумент - запускаемая ф-ция, задержка в мс, также можно передать аргументы, используемые в ф-ции, но это испо-ся редку
clearTimeout(timerId);//для остановки таймера setTimeout

function sayHello() {
    alert('Hello World!');
}
*/
//v1.1//для скрипта через определенный интервал времени
/*
let timerId = setInterval(sayHello, 3000);
clearTimeout(timerId);//для остановки таймера setInerval

function sayHello() {
    console.log('Hello World!');
}
*/
//v1.1
/* Отличие setTimeout от setInterval
setInterval - не учитывает сколько исполняется ф-ция внутри нее и задержка по времени может быть выставлена меньше, чем время
исполнения ф-ции => может возникнуть проблема
setTimeout - рекурсивный вызов (значит ф-ция вызывает сама себя) и эта проблема решается setTimeut
*/
//v1.1
/*
let timerId = setTimeout(function log(){
    console.log("Hello");
    setTimeout(log, 2000);//рекурсия - ф-ция внутри себя вызывает саму же себя
});
*/
//v1.1
/*
//Пропишем самую простую js анимацию
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame (){
        if (pos == 300){
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';

        }
    }
}
btn.addEventListener('click', myAnimation);
*/