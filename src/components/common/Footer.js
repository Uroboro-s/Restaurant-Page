// Footer Component

import { createElement, createLink } from '../../utils/domHelpers';
import { RESTAURANT_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../../utils/constants';

const Footer = () => {
  const footer = createElement('footer', 'footer');
  const container = createElement('div', 'footer__container');

  const content = createElement('div', 'footer__content');

  // Brand Section
  const brandSection = createElement('div', 'footer__section');
  const brand = createElement('div', 'footer__brand', RESTAURANT_INFO.name);
  const description = createElement('p', 'footer__description', RESTAURANT_INFO.tagline);

  const social = createElement('div', 'footer__social');
  Object.entries(SOCIAL_LINKS).forEach(([platform, url]) => {
    const link = createLink({
      text: platform.charAt(0).toUpperCase(),
      href: url,
      className: 'footer__social-link',
      target: '_blank'
    });
    social.appendChild(link);
  });

  brandSection.append(brand, description, social);

  // Quick Links
  const linksSection = createElement('div', 'footer__section');
  const linksTitle = createElement('h3', 'footer__section-title', 'Quick Links');
  const linksList = createElement('ul', 'footer__list');

  NAV_ITEMS.forEach(item => {
    const li = createElement('li');
    const link = createLink({
      text: item.label,
      href: item.path,
      className: 'footer__link',
      onClick: (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('navigate', { detail: { path: item.path } }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    li.appendChild(link);
    linksList.appendChild(li);
  });

  linksSection.append(linksTitle, linksList);

  // Contact Info
  const contactSection = createElement('div', 'footer__section');
  const contactTitle = createElement('h3', 'footer__section-title', 'Contact');
  const contactList = createElement('ul', 'footer__list');

  const phone = createElement('li', '', `📞 ${RESTAURANT_INFO.phone}`);
  const email = createElement('li', '', `✉️ ${RESTAURANT_INFO.email}`);
  const address = createElement('li', '', `📍 ${RESTAURANT_INFO.address.city}, ${RESTAURANT_INFO.address.country}`);

  contactList.append(phone, email, address);
  contactSection.append(contactTitle, contactList);

  content.append(brandSection, linksSection, contactSection);

  // Bottom
  const bottom = createElement('div', 'footer__bottom');
  const year = new Date().getFullYear();
  bottom.textContent = `© ${year} ${RESTAURANT_INFO.name}. All rights reserved. Est. ${RESTAURANT_INFO.established}`;

  container.append(content, bottom);
  footer.appendChild(container);

  return footer;
};

export default Footer;
