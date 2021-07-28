'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');


// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log (width, height);

btn.addEventListener('click', () => { 
    //box.style.height = box.scrollHeight + 'px'; //нажатие кнопки разворачивает текст
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

//РАзберем как получить стили, которые уже были применены к элементу при помощи css
const style = window.getComputedStyle(box); //вторым аргументом указывается псевдоэлемент
//ВАЖНО не путать ComputedStyle, которые прогружаются с самого начала (т.к заданы в цсс)
// с inlineStyle, которые мы получаем в JS, они появляются внутри верстки и происываются в тэг - см стр 19
console.log(style.display);

//для глобальных обектов:
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400);
window.scrollTo(0, 400);
