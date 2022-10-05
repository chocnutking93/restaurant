import loadPage from "./modules/page-load";
// import showIntro from './modules/home.js';

init();

function addNavEvents(){
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');
    
    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click',loadContact);
}

function init(){
    loadPage();
    showIntro();
    loadHome();
    loadContact();
    addNavEvents();
}