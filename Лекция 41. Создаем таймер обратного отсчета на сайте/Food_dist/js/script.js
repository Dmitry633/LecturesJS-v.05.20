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
});