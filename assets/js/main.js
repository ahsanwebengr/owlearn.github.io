// Responsvie Navbar for Mobile 

const menuIcon = document.querySelector('#icon');
const menuNav = document.querySelector('.nav_menu');

menuIcon.addEventListener('click', ()=> {
    menuNav.classList.toggle('active');
    menuIcon.classList.toggle("fa-times")
});

// ON Scrolled 

const nav = document.querySelector('.navbar');

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("onScrolled");
    }else{
        nav.classList.remove("onScrolled");
    }
} 