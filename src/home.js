

const homePageLoad = () =>{
    

    const main_content = document.getElementById('main-content');
    main_content.textContent = "";
    
    const about_us = document.createElement('div'); 
    about_us.id = "about-us";
   
    const about_us_heading = document.createElement('h2');
    about_us_heading.id = "about-us-heading";
    about_us_heading.textContent = "About us";

    const about_us_paragraph = document.createElement('p');
    about_us_paragraph.id = "about-us-paragraph";
    about_us_paragraph.textContent = "Established on December 9 of 1946 in Bombay(now Mumbai), Sonia's is a very original eatery representing the fusion of italian and indian cuisines! It is the first of its kind where not only do you get the luxury of mouth-watering Italian and Indian dishes made in the same way they are supposed to be made but also 'originals' borne from the ideas and inspirations from various people and places.";

    about_us.append(about_us_heading, about_us_paragraph);
    main_content.appendChild(about_us);
    console.log("This os the home tab");

};
export default homePageLoad;