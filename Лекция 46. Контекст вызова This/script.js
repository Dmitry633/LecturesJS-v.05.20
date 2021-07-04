'use strict';
//46.Контекст вызова This
//что такое this - это то ,что окружает ф-цию
//ф-ция может вызываться 4мя способами и в кажлом контекст вызова будет отличатся
//1 метод - вызов ф-ции - когда мы получаем котекст вызова о ф-ции - в итоге получаем window/undefined
/*
function showThis (){
    console.log(this);//-ф-ция "бомж"(выводится window, т.к ф-ция своим контекстом считает window)
}
showThis();
*/
/*
function showThis (a, b){
    console.log(this);//window
    function sum(){
        console.log(this);//window
        return this.a +this.b// эта часть выполнится не может, потому и NaN, т.к. sum() не находит a и b
    }                        //т.о. ф-ция внутри ф-ции все равно своим контекстом считает window
    console.log(sum());//NaN
}

showThis(4, 5);
*/

//при этом window -> undefined(в ES6 при отсутствии контекста ф-ции - ее значение undefined)
//для того, чтобы сделать правльно, необходимо использовать замыкание ф-ции:
/*
function showThis (a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b//после поиска внутри ф-ции, переменные будут искаться снаружи
    }                        
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);
*/
//2 способ -метод объекта this = объекту
/*
const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this);// в этом случае контекстом будет не window а  сам объект, т.к. это уже не просто ф-ция , а метод объекта
        function shout (){
            console.log(this); //  а вто здесь снова контест - window, т.к. shout  -уже не метод, а просто ф-ция внутри ф-ции
        }
        shout();
    }
}
obj.sum();
*/
// 3 способ - через  конструктор (new) - this = новый созданный объект
/*
//ПРи этом, когда мы ф-цию вызываем через new, this ссылается на новосозданный объект, т.е. котекстом вызова будет этот объект
//т.е. если у нес есть ф-ция-конструктор или класс, который создает новых пользователей, то при их вызове this будет ссылаться каждый раз на нового пользователя:
//ivan, alex и т. д
function User(name, id) {//ф-ция относится к объектам, потому в нее можно записать и методы и свойства:
    this.name = name;
    this.id = id;
    this.human = true;
    console.log(this);
    this.hello = function() {//пропишем метод
        console.log(`Hello!  ${this.name}`);//здесь идет обращение к св-ву объекта
        console.log(this);
    }; 
}

//создадим новых пользователей:
const ivan = new User('Ivan', 25);
ivan.hello();
*/
//4 спозоб - ручное присваивание this любой ф-ции/ Указание конкретного котекста - call, apply, bind

/*

function sayName() { //ф-ция и объект никак не связаны, 
    console.log(this);
    console.log(this.name);
}
*/
/*
const user = {
    name: 'John'
};

//console.log(sayName.call(user));
//console.log(sayName.apply(user));


function sayName(surname) { //ф-ция и объект никак не связаны, //добавили аргумент
    console.log(this);
    console.log(this.name + surname);
}

//нам надо их связать - есть три метода, при помощи которых мы можем насильно привязать контект вызова

sayName.call(user, ' Smith');//1)call -- принимает аргументы в виде строки(можно передать неск-ко  аргументов)
sayName.apply(user, [' Snow']);//2)отличие метода от предыдущего в том, что apply принимает аргументы в виде масива(можно передать неск-ко  аргументов)

//3) метод bind  - в отличие от предыдущих 2-х методов, создает НОВУЮ функцию 
//и привязывает контекст под нее

function count(number){
    return this * number;
}
const double = count.bind(2);// - В этой переменной создается НОВАЯ ф-ция. здесь мы при помощи bind привязываем 2 к count,
//это значит, что каждый раз когда мы вызываем ф-цию double, а это действительно ф-ция, т.к мы в нее записали ф-цию, у нас контекстом вызова будет "2"
//если уж совсем просто, то то что попадает в аргумент bind взегда заменяет this (в нашем случае  this -> 2)
console.log(double(3));
console.log(double(10));
*/
//Рассмотрим как контекст вызова работает в DOM, тюею на нашей странице

let btn = document.querySelector('button');
btn.addEventListener('click', function(){ // если здесь использовать (=>), то this = undefined
    console.log(this);//получи м сам эл-т <button></button>, т.е. если в О С мы используем контекст вызова и используем обычное объявлениеф-ции, то контекстом будет этот жлемент, на котором применяется наше событие
    this.style.backgroundColor = 'red';//пример; если говорить честно - то это чем то похоже на e.target,(this можно заменить на e.target)
    // НО ф-ция внутри ф-ции бдет имент контекст вызова window:
    function showThis(){
        console.log(this);
    }
    showThis();
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

       say();
    }
};

obj.sayNumber();
/*
//упростим стрелочную ф-цию
const double = (a) => {
    return a * 2;
};
// то же самое, что и 
const double = (a) => a * 2;//т.к. тело ф-ции помещается в одну строку, то можно записать так
//// то же самое, что и 
const double = a => a * 2;// если в стрелочной ф-ции принимается один аргумент , то можно записать так
*/
/*
var numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers); // => true
      function calculate() {
        console.log(this === numbers); // => true
        return this.numberA + this.numberB;
      }
      // use .call() method to modify the context
      return calculate.call(numbers);
    }
 };
 console.log(numbers.sum())
 */

 