'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent =  document.querySelector('.tabheader__items');
        //скроем все описания табов
     function hideTabContent() {
//воспользуемся перебором
       tabsContent.forEach(item => {
       item.classList.add('hide');
       item.classList.remove('show', 'fade');
        // item.style.display = 'none';
       }) 
       tabs.forEach( item => {
        item.classList.remove('tabheader__item_active');
           
       })
    }
    //покажем описание только одного таба
    function showTabContent(i = 0) {
        //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    //D S
    tabsParent.addEventListener('click', (event) => {
       const trgt = event.target;
       if (trgt && trgt.classList.contains('tabheader__item')) {
          tabs.forEach((item, i) => {
              if(trgt == item){
                  hideTabContent();
                  showTabContent(i);
              } } )
       }

    })

})
