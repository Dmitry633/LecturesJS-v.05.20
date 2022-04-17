'use strict'
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


//console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'sfdf'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));
// if (btns[0].classList.contains('red')) {
//     console.log ('red');
// }

btns[0].addEventListener('click', () => {
  
        btns[1].classList.toggle('red');
    }
    //  else {
    //     btns[1].classList.remove('red');
    // }
);
// console.log(btns[0].classList);
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello!');
    }
});

// btns.forEach(b => {
//     b.addEventListener('click', () => {
//         console.log('Hello!');
//     })
// })
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

