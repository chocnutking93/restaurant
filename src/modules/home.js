export default function showIntro () {
    // console.log('Hey this is yum yum');
    const about = document.createElement('section');
    about.classList.add('section');

    const title = document.createElement('h1');
    title.classList.add('section-title');
    title.textContent = "Our mission";

    about.appendChild(title);

    const aboutText = document.createElement('p');
    aboutText.classList.add('section-description');
    aboutText.textContent = 'This fried chicken is finga lickin good! Mmm mm mmm!';
    about.appendChild(aboutText);
    return about;

}

