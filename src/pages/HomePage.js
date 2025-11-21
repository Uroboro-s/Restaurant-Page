// Home Page

import { createElement, createButton } from '../utils/domHelpers';
import { RESTAURANT_INFO } from '../utils/constants';
import menuItems from '../data/menuData';
import { reviews } from '../data/reviewsData';

const HomePage = () => {
  const page = createElement('div', 'page-container');

  // Hero Section
  const hero = createElement('section', 'hero');
  const heroContent = createElement('div', 'hero__content');

  const heroTitle = createElement('h1', 'hero__title', RESTAURANT_INFO.name);
  heroTitle.setAttribute('data-aos', 'fade-down');
  heroTitle.setAttribute('data-aos-duration', '1000');

  const heroSubtitle = createElement('p', 'hero__subtitle', RESTAURANT_INFO.tagline);
  heroSubtitle.setAttribute('data-aos', 'fade-up');
  heroSubtitle.setAttribute('data-aos-delay', '200');

  const heroDescription = createElement('p', 'hero__description', RESTAURANT_INFO.description);
  heroDescription.setAttribute('data-aos', 'fade-up');
  heroDescription.setAttribute('data-aos-delay', '400');

  const heroCTA = createElement('div', 'hero__cta');
  heroCTA.setAttribute('data-aos', 'fade-up');
  heroCTA.setAttribute('data-aos-delay', '600');

  const viewMenuBtn = createButton({
    text: 'View Menu',
    className: 'btn btn--primary btn--lg ripple-container',
    onClick: () => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { path: '/menu' } }));
    }
  });

  const contactBtn = createButton({
    text: 'Contact Us',
    className: 'btn btn--secondary btn--lg ripple-container',
    onClick: () => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { path: '/contact' } }));
    }
  });

  heroCTA.append(viewMenuBtn, contactBtn);
  heroContent.append(heroTitle, heroSubtitle, heroDescription, heroCTA);
  hero.appendChild(heroContent);

  // Featured Dishes Section
  const featured = createElement('section', 'featured');
  const featuredContainer = createElement('div', 'container');
  const featuredTitle = createElement('h2', 'featured__title', 'Our Signature Dishes');
  featuredTitle.setAttribute('data-aos', 'fade-up');

  const featuredGrid = createElement('div', 'grid grid-cols-3');

  // Show only featured/chef special items
  const featuredItems = menuItems.filter(item => item.isChefSpecial).slice(0, 3);

  featuredItems.forEach((item, index) => {
    const card = createMenuCard(item);
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${index * 100}`);
    featuredGrid.appendChild(card);
  });

  featuredContainer.append(featuredTitle, featuredGrid);
  featured.appendChild(featuredContainer);

  // Quick Info Section
  const quickInfo = createElement('section', 'quick-info');
  const quickInfoGrid = createElement('div', 'quick-info__grid');

  const locationInfo = createInfoCard('📍', 'Visit Us', `${RESTAURANT_INFO.address.area}, ${RESTAURANT_INFO.address.city}`);
  locationInfo.setAttribute('data-aos', 'zoom-in');
  locationInfo.setAttribute('data-aos-delay', '0');

  const hoursInfo = createInfoCard('🕐', 'Opening Hours', 'Mon-Sun: 11:00 AM - 11:00 PM');
  hoursInfo.setAttribute('data-aos', 'zoom-in');
  hoursInfo.setAttribute('data-aos-delay', '150');

  const phoneInfo = createInfoCard('📞', 'Call Us', RESTAURANT_INFO.phone);
  phoneInfo.setAttribute('data-aos', 'zoom-in');
  phoneInfo.setAttribute('data-aos-delay', '300');

  quickInfoGrid.append(locationInfo, hoursInfo, phoneInfo);
  quickInfo.appendChild(quickInfoGrid);

  // Testimonials Section
  const testimonials = createElement('section', 'testimonials');
  const testimonialsContainer = createElement('div', 'container');
  const testimonialsTitle = createElement('h2', 'testimonials__title', 'What Our Guests Say');
  testimonialsTitle.setAttribute('data-aos', 'fade-up');

  const testimonialsGrid = createElement('div', 'grid grid-cols-3');

  // Show first 3 reviews
  reviews.slice(0, 3).forEach((review, index) => {
    const reviewCard = createReviewCard(review);
    reviewCard.setAttribute('data-aos', 'flip-left');
    reviewCard.setAttribute('data-aos-delay', `${index * 100}`);
    testimonialsGrid.appendChild(reviewCard);
  });

  const viewAllBtn = createButton({
    text: 'View All Reviews',
    className: 'btn btn--outline btn--lg',
    onClick: () => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { path: '/stories' } }));
    }
  });

  const btnWrapper = createElement('div', 'text-center');
  btnWrapper.style.marginTop = 'var(--space-8)';
  btnWrapper.appendChild(viewAllBtn);

  testimonialsContainer.append(testimonialsTitle, testimonialsGrid, btnWrapper);
  testimonials.appendChild(testimonialsContainer);

  page.append(hero, featured, quickInfo, testimonials);

  return page;
};

// Helper function to create menu card
const createMenuCard = (item) => {
  const card = createElement('div', 'card hover-lift');

  const imgContainer = createElement('div', 'image-zoom-container');
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;
  img.className = 'card__image image-zoom';

  const content = createElement('div', 'card__content');
  const title = createElement('h3', 'card__title', item.name);
  const description = createElement('p', 'card__description', item.description);

  const footer = createElement('div', 'card__footer');
  const price = createElement('span', 'card__price', `₹${item.price}`);
  footer.appendChild(price);

  content.append(title, description, footer);
  imgContainer.appendChild(img);
  card.append(imgContainer, content);

  return card;
};

// Helper function to create info card
const createInfoCard = (icon, title, content) => {
  const card = createElement('div', 'quick-info__item');
  const iconEl = createElement('div', 'quick-info__icon', icon);
  const titleEl = createElement('h3', 'quick-info__title', title);
  const contentEl = createElement('p', 'quick-info__content', content);

  card.append(iconEl, titleEl, contentEl);
  return card;
};

// Helper function to create review card
const createReviewCard = (review) => {
  const card = createElement('div', 'card');

  const content = createElement('div', 'card__content');
  const stars = '⭐'.repeat(review.rating);
  const rating = createElement('div', 'card__rating', stars);
  const text = createElement('p', 'card__description', `"${review.review}"`);
  const author = createElement('p', 'card__author');
  author.style.fontWeight = 'var(--font-semibold)';
  author.style.marginTop = 'var(--space-4)';
  author.textContent = `— ${review.name}`;

  content.append(rating, text, author);
  card.appendChild(content);

  return card;
};

export default HomePage;
