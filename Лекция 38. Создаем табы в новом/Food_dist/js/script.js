window.addEventListener('DOMContentLoaded', () => {

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

});