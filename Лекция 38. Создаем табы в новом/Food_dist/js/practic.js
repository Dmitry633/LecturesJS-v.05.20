window.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.tabheader__item'),
         tabContent = document.querySelectorAll('.tabcontent'),
         tabParent = document.querySelector('.tabheader__items');
//скроем содержание всех табов
    function hideTabContent() {
        tabContent.forEach( (item) =>{
          //  item.style.display = 'none';
          item.classList.add('hide');
          item.classList.remove('show', 'fade');

        });
        //удаляем класс активности всех табов
        tabs.forEach( (item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        //tabContent[i].style.display = 'block';
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');

        tabs[i].classList.add('.tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const trgt = event.target;
        if (trgt && trgt.classList.contains('tabheader__item')){
            tabs.forEach((item,i) => {
                if (trgt == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
});