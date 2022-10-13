import loadPage from "./modules/page-load";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact"
import loadHome from "./modules/home";


init()

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
    loadHome();
    loadContact();
    addNavEvents();
}