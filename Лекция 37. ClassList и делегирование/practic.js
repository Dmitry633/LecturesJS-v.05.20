'use strict'
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('#first');


btns[1].classList.add('red', 'dsf');
console.log (btns[1].classList.item(1));
console.log (btns[1].classList.length);
btns[1].classList.toggle('blue');
console.log (btns[1].classList.item(2));

btns[1].classList.toggle('blue');
console.log (btns[1].classList.item(2));

if (btns[0].classList.contains('blue')) {
    console.log ('blue too');
}


//О С
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    }
    else {
        btns[1].classList.remove('red');
    }
})
// Д С
// wrapper.addEventListener ('click', (event) => {
//     // console.dir (event.target);
//     // if (event.target && event.target.tagName == 'BUTTON') {
//     //     console.log ('hello!');
//     // }
//     if (event.target && event.target.classList.contains('red')) {
//         console.log ('bye!');
//     }
// } );
// google
wrapper.addEventListener ('click', (event) => {
    if (event.target && event.target.matches ('.btn-block button.red')) {
        console.log ('hi!');
    }
})


// ОС без ДС

// btns.forEach (btn => {
//     btn.addEventListener ('click', () =>{
//         console.log ('hi hi');
//     })
// }
// )
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

