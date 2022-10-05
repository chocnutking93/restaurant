function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
  
    const homeButton = createBtn('home', 'home');
    const menuButton = createBtn('menu', 'menu');
    const contactButton = createBtn('contact', 'contact');
  
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}


export default function loadPage() {

    const content = document.getElementById('content');
    const header = createHeader('header', 'Chickn Lickn');
    content.appendChild(header);

    //////Nav Bar
    const nav = createNav('nav');
    content.appendChild(nav);

    /////////Main Image default page
    const mainImg = document.createElement('img');
    mainImg.classList.add("main-image");
    mainImg.src = "/images/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg";
    mainImg.alt = "Image of fried chicken";
    content.appendChild(mainImg);

    ///////////Main Page opening statement
    const para1 = document.createElement('p');
    para1.classList.add("front-page");
    para1.textContent = "This fried chicken is finga lickin good! Mmm mm mmm!";
    content.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add("front-page");
    para2.textContent = "Family friendly, bring a friend and enjoy watching your favorite sports teams!";
    content.appendChild(para2);

    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);

    ////////Footer
    const footer = createFooter('footer', 'Created by Charles Kelly');
    content.appendChild(footer);
}
