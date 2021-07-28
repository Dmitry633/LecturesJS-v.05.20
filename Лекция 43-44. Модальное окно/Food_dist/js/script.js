window.addEventListener('DOMContentLoaded', () => {
//Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
          //скроем ненужные нам табы 7,20
    function hideTadContent() { //этой функцией мы скроем весь контент на сайте
        tabsContent.forEach(item => {
           item.classList.add('hide');// ипользуем классы, вместо item.style.display = 'none';
           item.classList.remove('show', 'fade');// ипользуем классы, вместо item.style.display = 'none';
        });
        // убираем класс активности у всех табов
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade'); //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');//добавляем класс активности одной табе
    }

    hideTadContent();
    showTabContent();
    //используем Делегирование событий (Д С)
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) { //далее мы сделаем так, 
//чтобы при клике на определенное меню, показывался конкретный контент. И сделаем это обычным перебором
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTadContent();
                    showTabContent(i);  //нужно проработать, чтобы не осталось вопросов
                }
            })
        }
    })
//Timer
    const deadline = '2021-08-11';//перерменная дэдлайна

    function getTimeRemaning(endtime) { //фция определяющая разницу м ду дэдлайном  и текущим времпенем
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return { //возвращаем объект из ф-ции
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) { //aф ция установки часов
        const timer = document.querySelector(selector);
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);//длязапуска ежесекундного обновления

              updateClock();//для исправлнеия мигания верстки

        function updateClock() { //ф-ция  ежесекундного обновления таймера
            const t = getTimeRemaning(endtime);
            days.innerHTML = getZero(t.days);//помещаем рассчетные величины на страницу
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {//для остановки таймера
                clearInterval(timeInterval);
            }
        }     
    }

    setClock ('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),//кнопки открытия модалки
          modal = document.querySelector('.modal'),// модальное окно
          modalCloseBtn = document.querySelector('[data-close]');//кнопка закрытия модалки

          //создадим две ф-ции - одна открывает, другая закрывает модалку
    // modalTrigger.forEach(btn => {//при использовании псевдомассива (несколько кнопок) неоеобходимо перебарть этот псевдомассив
    //         btn.addEventListener('click', () => {  //-c лекции 43
    //             modal.classList.add('show');
    //             modal.classList.remove('hide');
    //             // modal.classList.toggle('show');//вариант с тогглом
    //             document.body.style.overflow = 'hidden';//для исключения прокрытки фона
    //         });
    //     });

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show');//вариант с тогглом
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);//для того, чтобы модалка не появилась второй раз, после того как пользолватель сам ее открыл
        };

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });
       
        
        function closeModal() {//dontrepeat yourself
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        };

    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     // modal.classList.toggle('show');//вариант с тогглом
    //     document.body.style.overflow = '';//для возвращения прокрутки
    // });
    modalCloseBtn.addEventListener('click', closeModal);//БЕЗ скобок, тк мы ее не вызываем, а просто передаем 
    // - она будет выполнена только после клика
 
    //закрываем модалку при клике на  подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
           closeModal();//А ЗДЕСЬ мы вызываем ф-цию, тк. нам нужно ее выполнить ПОСЛЕ условия
        }
    })

    //Закрываем модалку  клавишей Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) { //чтобы найти коды клавиш вбей event.code в googl //добавили условие, что модалка открыта
            closeModal();
        }
    });
    //44. Модификации  модалки
    //чтобы модалка появлялась через кое-то время:
    const modalTimerId = setTimeout(openModal, 3000);
    

    //чьлюы модалка открылась при долистывании до конца странициы:

    
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {// не работало, т к опечатался и не соблел регистр
    //         openModal();
    //     };
    // }, {once: true});//добавлена настройка обработчика событий {once: true} - событие будет срабатывать толко один раз, но со скроллом работать не будет, поэтому воспольхуемя removeEventListener

    function showModakByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {// не работало, т к опечатался и не соблел регистр
            openModal();
            window.removeEventListener('scroll', showModakByScroll);
        };
    }

    //чьлюы модалка открылась при долистывании до конца странициы:
    window.addEventListener('scroll', showModakByScroll);//добавлена настройка обработчика событий {once: true} - событие будет срабатывать толко один раз, но со скроллом работать не будет
});