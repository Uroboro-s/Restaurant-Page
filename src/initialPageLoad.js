

const loadFoundationPage = () => {

    const main = document.getElementById('content');
    
    const header = document.createElement('header');
    const main_content = document.createElement('div');
    
    header.textContent = "";
    main_content.id = "main-content";
    /* main_content.textContent = "JayZ Eatery"; */
    
    
    
    main.append(header, main_content);

    const tab_container = document.createElement('div');
    
    const restaurant_title = document.createElement('h1');
    restaurant_title.textContent = "Sonia's";

    header.append(restaurant_title, tab_container);
    tab_container.append(tabComponents("home-tab", "HOME"), tabComponents("menu-tab", "MENU"), tabComponents("contact-tab", "CONTACT ME"));
    
    
    };
    
    const tabComponents = (id, name) => {
        
        const tabElement = document.createElement('div');
    
        tabElement.textContent = name;
        tabElement.id = id;
    
        return tabElement;
    
    };
    
    export default loadFoundationPage;