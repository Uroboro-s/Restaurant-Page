import golgappe_pic from './images/golgappe.jpg';
import kebab_roll_pic from './images/kebab_rolls.jpg';
import godfather_pic from './images/godfather.jpg';
import pizza_pic from './images/bg.jpg';
import paneer_paratha_pic from './images/paneer_paratha.jpg';
import paneer_pakoda_pic from './images/paneer_pakoda.jpg';
import omelette_pic from './images/omelette.jpg';



const menuPageLoad = () => {

    const main_content = document.getElementById('main-content');
    main_content.textContent = "";

    const subContent = document.createElement('div');
    const menuContainer = document.createElement('div');
    const menuHeading = document.createElement('h2');

    subContent.id = "subcontent";
    menuContainer.id = "menu-container";
    menuHeading.id = "menu-heading";
    menuHeading.textContent = "Menu";

    subContent.appendChild(menuHeading);
    subContent.appendChild(menuContainer);
    main_content.appendChild(subContent);

    console.log("This is the menu tab");
    
    createItems("Pizza", pizza_pic, "Rs 500");
    createItems("Golgappa", golgappe_pic, "Rs 30");
    createItems("Kebab Roll", kebab_roll_pic, "Rs 60");
    createItems("Omelette", omelette_pic, "Rs 30");
    createItems("Paneer Pakoda", paneer_pakoda_pic, "Rs 20");
    createItems("Paneer Paratha", paneer_paratha_pic, "Rs 30");
    createItems("The Godfather", godfather_pic, "Rs 129");

}
const createItems = (name, img, price) =>{
    const menuContainer = document.getElementById('menu-container');

    const menuItem = document.createElement('div');
    menuItem.className = "menu-item";
    
    const itemName = document.createElement('h1');
    const itemPicture = document.createElement('img');
    const itemPrice = document.createElement('p');

    itemName.textContent = name;
    itemPicture.src = img;
    itemPrice.textContent = price;


    menuItem.append(itemName, itemPicture, itemPrice);



    menuContainer.append(menuItem);

     

}

export default menuPageLoad;
