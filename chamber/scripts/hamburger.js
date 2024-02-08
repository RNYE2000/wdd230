const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
    // mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    mainnav.classList.toggle('hide');
    document.body.classList.toggle('no-scroll');
});