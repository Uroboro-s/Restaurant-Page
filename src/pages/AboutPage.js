// About Page

import { createElement } from '../utils/domHelpers';
import { RESTAURANT_INFO } from '../utils/constants';
import { chefs, timeline } from '../data/teamData';

const AboutPage = () => {
  const page = createElement('div', 'about-page');

  // Hero
  const hero = createElement('div', 'about-hero');
  const heroTitle = createElement('h1', 'about-hero__title', `About ${RESTAURANT_INFO.name}`);
  const heroSubtitle = createElement('p', 'about-hero__subtitle');
  heroSubtitle.textContent = `Est. ${RESTAURANT_INFO.established} in ${RESTAURANT_INFO.foundedIn}`;
  heroSubtitle.style.fontSize = 'var(--text-xl)';
  heroSubtitle.style.color = 'var(--text-secondary)';
  hero.append(heroTitle, heroSubtitle);

  // Story Section
  const story = createElement('section', 'story-section');
  const storyContent = createElement('div', 'story-section__content');

  const p1 = createElement('p');
  p1.textContent = `Established on December 9 of ${RESTAURANT_INFO.established} in ${RESTAURANT_INFO.foundedIn}, ${RESTAURANT_INFO.name} is a very original eatery representing the fusion of Italian and Indian cuisines! It is the first of its kind where not only do you get the luxury of mouth-watering Italian and Indian dishes made in the same way they are supposed to be made but also 'originals' borne from the ideas and inspirations from various people and places.`;

  const p2 = createElement('p');
  p2.textContent = "Our restaurant embodies the perfect marriage of two rich culinary traditions. From our wood-fired pizzas with tandoori toppings to our curry-infused pasta dishes, every item on our menu tells a story of cultural fusion and culinary innovation.";

  const p3 = createElement('p');
  p3.textContent = "Over the decades, we've remained committed to using only the finest ingredients, traditional cooking methods, and family recipes passed down through generations. Our chefs blend authentic Italian techniques with the bold, aromatic spices of India to create dishes that are truly one-of-a-kind.";

  storyContent.append(p1, p2, p3);
  story.appendChild(storyContent);

  // Timeline Section
  const timelineSection = createElement('section', 'timeline');
  const timelineTitle = createElement('h2', 'timeline__title', 'Our Journey');

  timeline.forEach(item => {
    const timelineItem = createElement('div', 'timeline__item');

    const year = createElement('div', 'timeline__year', item.year.toString());
    const content = createElement('div', 'timeline__content');
    const title = createElement('h3', '', item.title);
    const description = createElement('p', '', item.description);

    content.append(title, description);
    timelineItem.append(year, content);
    timelineSection.appendChild(timelineItem);
  });

  timelineSection.insertBefore(timelineTitle, timelineSection.firstChild);

  // Chefs Section
  const chefsSection = createElement('section', 'chefs-section');
  const chefsTitle = createElement('h2', 'chefs-section__title', 'Meet Our Chefs');
  const chefsGrid = createElement('div', 'chefs-grid');

  chefs.forEach(chef => {
    const card = createElement('div', 'chef-card');

    const name = createElement('h3', 'chef-card__name', chef.name);
    const role = createElement('div', 'chef-card__role', chef.role);
    const bio = createElement('p', 'chef-card__bio', chef.bio);
    const specialty = createElement('div', 'chef-card__specialty', `Specialty: ${chef.speciality}`);

    card.append(name, role, bio, specialty);
    chefsGrid.appendChild(card);
  });

  chefsSection.append(chefsTitle, chefsGrid);

  page.append(hero, story, timelineSection, chefsSection);

  return page;
};

export default AboutPage;
