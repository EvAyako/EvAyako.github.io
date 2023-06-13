const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});