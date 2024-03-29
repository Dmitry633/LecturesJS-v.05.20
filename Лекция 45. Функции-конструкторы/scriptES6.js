// ?45 Функции конструкторы
'use strict';
/*
//Э длинный синтаксис для создания типов данных (начинается с ключ слова New)
const num = new Function(3);//устаревший синтаксис - создали новую ф-цию, если такатя ф будет
//содержать методы и свойства, то она нам создаст  оюъект
console.log(num);

function User(name, id) {//ф-ция относится к объектам, потому в нее можно записать и методы и свойства:
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {//пропишем метод
        console.log(`Hello!  ${this.name}`);//здесь идет обращение к св-ву объекта
    }; 
}

//создадим новых пользователей:
const ivan = new User('Ivan', 25),
      alex = new User('Alex', 20);//В этих переменных лежат объекты , а не функции!!!
    //т.к.  при вызове ф-ции Юзер и передаче ей аргументов имя и ай ди, то она стала ф-цией-конструктором 
    //конструирующюю новых юзеров: - return в таких приписывать не надо
console.log(ivan.hello());
ivan.hello();
console.log(alex);

//св-во prototype - с помощью него добавляем новые методы в конструктор и они будут наследоваться у потомков:
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}
ivan.exit();
//ТО конструкторы нам нужны для создания однотипных объектов
//Все что было выше было по стандарту ES5
*/
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;

    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}
const ivan = new User('Ivan', 25);
ivan.hello();
console.log(ivan.hello());
 