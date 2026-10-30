/* 
const btn = document.querySelector('A');

btn.addEventListener('click', function(){
    document.querySelector('B').classList.toggle('C');
});
 */

const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open-nav');
});

// A: The element to attach the event listener to (usually a button).
// B: The element in HTML that we will add and remove the class to.
// C: The name of the CSS class (in the css file) to toggle. NO PERIOD(.)

/* if youre unsure if your JS is working, go to inspector tool and click on your btn, it should show an "event" button that shows it works. */