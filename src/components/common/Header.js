// Header Component

import { createElement, createLink } from '../../utils/domHelpers';
import { NAV_ITEMS } from '../../utils/constants';

const Header = () => {
  const header = createElement('header', 'header');
  const container = createElement('div', 'header__container');

  // Logo
  const logo = createLink({
    text: "Sonia's",
    href: '/',
    className: 'header__logo',
    onClick: (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('navigate', { detail: { path: '/' } }));
    }
  });

  // Navigation
  const nav = createElement('nav', 'header__nav');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const navList = createElement('ul', 'nav__list');

  NAV_ITEMS.forEach(item => {
    const li = createElement('li');
    const link = createLink({
      text: item.label,
      href: item.path,
      className: `nav__link ${window.location.pathname === item.path ? 'nav__link--active' : ''}`,
      onClick: (e) => {
        e.preventDefault();
        // Remove active class from all links
        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('nav__link--active'));
        // Add active class to clicked link
        e.target.classList.add('nav__link--active');
        // Dispatch navigate event
        window.dispatchEvent(new CustomEvent('navigate', { detail: { path: item.path } }));
        // Close mobile menu if open
        nav.classList.remove('header__nav--open');
      }
    });

    li.appendChild(link);
    navList.appendChild(li);
  });

  nav.appendChild(navList);

  // Mobile menu toggle
  const toggle = createElement('button', 'header__toggle', '☰');
  toggle.setAttribute('aria-label', 'Toggle menu');
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav--open');
    const isOpen = nav.classList.contains('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  container.append(logo, nav, toggle);
  header.appendChild(container);

  return header;
};

export default Header;
