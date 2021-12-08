const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav');
const navLogo = document.querySelector('#navbar__logo');


menu.addEventListener('click', mobileMenu);



const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const blogsMenu = document.querySelector('#blog-page');
    const contactMenu = document.querySelector('#contact-page');
    
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.add('highlight');
        blogsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        blogsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.add('highlight');
        blogsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (wimdow.innerWidth > 960 && scrollPos < 3000) {
        aboutMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');
        blogsMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);




menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);