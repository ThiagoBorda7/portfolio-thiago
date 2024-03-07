const menuIcon = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

console.log(menuIcon)


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x-lg')
    navbar.classList.toggle('active')
})