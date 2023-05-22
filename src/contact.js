
const contactPageLoad = () =>{

    const main_content = document.getElementById('main-content');
    main_content.textContent = "";

    const contact_us = document.createElement('div');
    
    contact_us.id = "contact-us";
    

    const contact_us_heading = document.createElement('h2');
    contact_us_heading.id = "contact-us-heading";
    contact_us_heading.textContent = "Contact us";

    const contact_us_paragraph = document.createElement('p');
    contact_us_paragraph.id = "contact-us-paragraph";
    contact_us_paragraph.innerHTML = "<span >Address:</span><br>4 Private Drive <br> Little Whinging <br> Surrey, England <br> Great Britain<br><span>Tel no. :</span><br>+01 13131313, +10 31313131<br><span>E-mail:</span><br>soniaeatery@brand.org<br><span>Social Media:</span><br><a href='#'>Instagram</a><br><a href='#'>Twitter</a><br><a href='#'>Facebook</a>";

    

    contact_us.append(contact_us_heading, contact_us_paragraph);
    main_content.appendChild(contact_us);

    console.log("This is the 'contact me' tab");
}

export default contactPageLoad;
