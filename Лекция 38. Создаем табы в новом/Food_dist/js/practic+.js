'use strict';
window.addEventListener ('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');
          
    // пропишем функцию сокрытия описания табов(воспользуемся перебором)
    function hideTabContent() {
        tabsContent.forEach(item => {
            //item.style.display = 'none';
            item.classList.add ('hide');
            item.classList.remove ('show', 'fade');
        })
        // убираем класс активностиу всех табов
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }
    function showTabContent(i = 0) {
       // tabsContent[i].style.display = 'block';
       tabsContent[i].classList.remove ('hide');
       tabsContent[i].classList.add ('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }
    
hideTabContent(); 
showTabContent();

tabParent.addEventListener ('click', (event) => {
    const trgt = event.target;
    if (trgt && trgt.classList.contains('tabheader__item')) {
        //сделаем так, чтобы при клике на табу ппоказывалось ссответсвующее описание
        tabs.forEach((item, i) => {
            if (trgt == item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})

})


//ДС