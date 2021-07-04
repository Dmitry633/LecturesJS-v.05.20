'use strict';
//47.Классы

class Rectangle {// c большой буквы!
    constructor(height, width) {//конструирует класс
        this.height = height;   // структра экземпляра объекта(св-ва)
        this.width =width;
    }//;не ставится!
    //запишем метод
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);// в переменной лежит объект
const long = new Rectangle(20, 100);

class ColoredRectangleWithText extends Rectangle {//пропишем наследованность (у нового класса будут наследоваться
    //  методы и св-ва от  класса Rectangle )
    constructor(height, width, text, bgColor) {
        super(height, width);//далее, нужно прописать св-ва из класса Rectangle, 
        //чтобы их не копировать есть св-во super (работает в связке с extends), в() указ нужные св-ва-
        //-указывается первым в конструкторе!!!
        this.text = text;
        this.bgColor = bgColor;
    }
    
    shoMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.shoMyProps();
console.log(div.calcArea());
console.log(square.calcArea());
console.log(long.calcArea());
/*Принципы ООП:
1. Абстракция - когда отделяем концепцию(шаблон, по к-ромы мы чтото создаем стр.4-14) 
от ее экземпляра, созданного по этому шаблону(стр15-16)
2. Наследование - способность объекта/класса базироваться на другом объекте/классе - 
главный механизм для повторного использования какого-то кода.
*/
