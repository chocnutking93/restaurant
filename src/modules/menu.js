function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }

export default function loadMenu () {
    const content = document.getElementById('tab-content');

    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');

    content.textContent = '';
    setBtnActive('menu');

    // DOM for Heading
    const headerMenu = document.createElement('h1');
    headerMenu.innerText = "Menu"
    headerMenu.classList.add("menu-header");
    content.appendChild(headerMenu);

    //Dom for chicken wings
    const chickenWings = document.createElement('img');
    chickenWings.classList.add('menu-img');
    chickenWings.src = "/images/chicken-wings.jpg";
    chickenWings.alt = "Image of fried chicken wings";
    content.appendChild(chickenWings);

    //DOM for chicken wings info
    const infoChickenWings = document.createElement('p');
    infoChickenWings.classList.add('menu-info');
    infoChickenWings.textContent = "8 boneless or classic wings in your choice of flavor between buffalo and original"
    content.appendChild(infoChickenWings);

    //DOM for chicken tenders
    const chickenTenders = document.createElement('img');
    chickenTenders.classList.add('menu-img');
    chickenTenders.src = "/images/chicken-tender.jpg";
    chickenTenders.alt = "Image of chicken tenders";
    content.appendChild(chickenTenders);

    //DOM for chicken tenders info
    const infoChickenTenders = document.createElement('p');
    infoChickenTenders.classList.add('menu-info');
    infoChickenTenders.textContent = "3 large chicken tenders with a side of ranch";
    content.appendChild(infoChickenTenders);

    //DOM for french fries
    const frenchFries = document.createElement('img');
    frenchFries.classList.add('menu-img');
    frenchFries.src = "/images/garlic-fries.jpg";
    frenchFries.alt = "Image of garlic french fries";
    content.appendChild(frenchFries);

    //Dom for french fries info
    const infoFrenchFries = document.createElement('p');
    infoFrenchFries.classList.add('menu-info');
    infoFrenchFries.textContent = "Garlic parmesan french fries";
    content.appendChild(infoFrenchFries);
}