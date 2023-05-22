

import initialFoundationPage from './initialPageLoad.js';
import homePageLoad from './home.js';
import menuPageLoad from './menu.js';
import contactPageLoad from './contact.js';
import './styles/styleInitial.css';
import './styles/styleMenu.css';
import './styles/styleHome.css';
import './styles/styleContact.css';

const pageCompiler = () =>{

    initialFoundationPage();
    homePageLoad();

    const home = document.getElementById('home-tab');
    const menu = document.getElementById('menu-tab');
    const contact = document.getElementById('contact-tab');

    home.addEventListener('click', homePageLoad);
    menu.addEventListener('click', menuPageLoad);
    contact.addEventListener('click', contactPageLoad);

    
}

pageCompiler();
