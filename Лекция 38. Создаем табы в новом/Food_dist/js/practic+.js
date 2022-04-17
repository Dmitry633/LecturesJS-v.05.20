'+6use strict';
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');
    
          function hideAll() {
             tabsContent.forEach(item => {
                //item.style.display = 'none';
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
             });
             tabs.forEach(item => {
                 item.classList.remove('tabheader__item_active');
                });
            }
        function showOne(i = 0) {
            //tabsContent[i].style.display = 'block';
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
               
        }

    hideAll();
    showOne();

    tabParent.addEventListener('click', (event) => {
        const trgt = event.target;
        if (trgt && trgt.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => { 
                if (trgt == item) {
                hideAll();
                showOne(i); 
                }
            })
        }
    })
});