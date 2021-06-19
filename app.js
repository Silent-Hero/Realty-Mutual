const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.navbar .navbar-menu');
const menuItem = document.querySelectorAll('.navbar .nav-link');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = "black";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})