//rest - оператор обратный spread ,формирует из элементов массив
const log = function (a, b, ...c) { //мы не знаем сколько аргументов поступит в функцию. rest оператор записывается как ... и всегда последним
    console.log(a, b, c);
}
log ('basic', 'rest', 'operation', 'usage');//-> basic rest [ 'operation', 'usage' ] - два последних элемента собранны в массив
function calcOrDouble(number, basis = 2) { // вслучае если второй аргумент не задан в ES6
    //basis = basis || 2;    // вслучае если второй аргумент не задан (до ES6)
    console.log (number * basis);
}
calcOrDouble(3, 5);// ->15
calcOrDouble(3);// ->6