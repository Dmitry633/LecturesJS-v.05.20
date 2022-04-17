'use strict';
//AJAX и общение с сервером
// получим объекты со страницы:
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
//реализуем следующее: после ввода в инпут руб, на основании обработки  сервера будет выдаваться значение в инпут ЮСД. Назначим О С :
inputRub.addEventListener('input', () => {//есть также событие change - происходит, когда фокус переключается с текущего объекта, а input проиходит, каждый раз когда что-то  вводится или удаляестя в инпут(в нашем случае inputRub)
    const request = new XMLHttpRequest(); // делаем запрос на сервер посредством обращения во встроенный объект в браузер XMLHTTPrequest
    // в стр 7 создан новый объект, у которого есть свои свойство методы события. начнем с методов:
    request.open('GET', 'js/current.json');//request.open(method, url, async, login, pass)open - собирает настройки, помогающие далать запрос; 
    //method - используется для запроса (гет(получение информации),пост(чтобы постить данные) и тд); 
    //url - путь к нашему серверу(т.к. запрос посылаем из html-файла то и путь должен быть относитльно этого файла);
    // async - отвечает за асинхронность (асинхронный код не блокирует остальной код, а синхронный выполняется по порядку. AJAX запросы по умолчанию являются асинхронным кодом(true)), 
    //login, pass - логин и пароль для авторизации
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //HTTP заголовки  - указываем  что именно мы отправляем ("тип контента", 'какой тип; кодировка')
   request.send();// оправляем гэт запрос
   //свойства:
   //status - статус запроса (404, 0, 200 и т д)
   //statusText - текстовое описание ответа от сервера
   //response - ответ от сервера заданный бэкэнд разработчиком, то что мы должны использовать на клиенте
   //readyState - чодержит текущее состояние нащегр запроса

   //события:
   //readystatechange - отслеживает готовнорсть нашего запроса в данный момент 0->1 или 3->4
   //load -оно проще, т.к срабатываеттолько один раз, когда запрос полностьью закгрузился и получен какойто результат, но "готов" не значит что завершен успешно
   /*
   request.addEventListener('readystatechange', () => {
       if (request.readyState === 4 && request.status === 200) {
           console.log(request.response);
           const data = JSON.parse(request.response);
           inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
       } else {
            inputUsd.value = 'Что-то пошло не так';
       }
   });
   */
   //или
   request.addEventListener('load', () => {
    if (request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
         inputUsd.value = 'Что-то пошло не так';
    }
});

}); 