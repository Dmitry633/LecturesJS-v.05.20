'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.info-header-tab'),
        tabsContent = document.querySelectorAll('.info-tabcontent'),
        tabsParent = document.querySelector('.info-header');

        //скроем описание табов
        function hideTabContent() {
            tabsContent.forEach(item => {
               // item.style.display = 'none';
               item.classList.add ('hide');
               item.classList.remove ('show');
            })
        }
        //покажем тлко одно писание
        function showTabContent(i = 0) {
            //tabsContent[i].style.display = 'block';
            tabsContent[i].classList.add('show');
            tabsContent[i].classList.remove('hide');
        }

    hideTabContent();
    showTabContent();

    // D S
    tabsParent.addEventListener ('click', (event) => {
        const trgt = event.target;
        if (trgt && trgt.classList.contains('info-header-tab')) {
            tabs.forEach((item, i) => {
            if (trgt == item) {
                hideTabContent();
                showTabContent(i);
                
            }})
        }
    })
})