// Menu Page

import { createElement, createButton } from '../utils/domHelpers';
import menuItems from '../data/menuData';
import { MENU_CATEGORIES, DIETARY_TAGS, CURRENCY } from '../utils/constants';

const MenuPage = () => {
  const page = createElement('div', 'menu-page');

  // Header
  const header = createElement('div', 'menu-page__header');
  const title = createElement('h1', 'menu-page__title', 'Our Menu');
  const subtitle = createElement('p', 'menu-page__subtitle', 'Explore our fusion of Italian and Indian flavors');
  header.append(title, subtitle);

  // Filters
  const filters = createElement('div', 'menu-filters');

  MENU_CATEGORIES.forEach(category => {
    const filterBtn = createButton({
      text: `${category.icon} ${category.name}`,
      className: `menu-filter ${category.id === 'all' ? 'menu-filter--active' : ''}`,
      onClick: (e) => {
        // Remove active from all
        document.querySelectorAll('.menu-filter').forEach(btn =>
          btn.classList.remove('menu-filter--active')
        );
        // Add active to clicked
        e.target.classList.add('menu-filter--active');
        // Filter items
        filterMenuItems(category.id);
      }
    });
    filterBtn.dataset.category = category.id;
    filters.appendChild(filterBtn);
  });

  // Menu Grid
  const menuGrid = createElement('div', 'menu-grid');
  menuGrid.id = 'menu-grid';

  // Initially show all items
  renderMenuItems(menuItems, menuGrid);

  page.append(header, filters, menuGrid);

  return page;
};

// Render menu items
const renderMenuItems = (items, container) => {
  // Clear container
  container.innerHTML = '';

  items.forEach(item => {
    const menuItem = createElement('div', 'menu-item hover-lift');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'menu-item__image';

    const content = createElement('div', 'menu-item__content');

    const header = createElement('div', 'menu-item__header');
    const name = createElement('h3', 'menu-item__name', item.name);
    const price = createElement('span', 'menu-item__price', `${CURRENCY.symbol}${item.price}`);
    header.append(name, price);

    const description = createElement('p', 'menu-item__description', item.description);

    // Tags
    const tags = createElement('div', 'menu-item__tags');
    if (item.tags && item.tags.length > 0) {
      item.tags.forEach(tagKey => {
        const tagInfo = DIETARY_TAGS[tagKey];
        if (tagInfo) {
          const tag = createElement('span', 'menu-item__tag');
          tag.textContent = `${tagInfo.icon} ${tagInfo.label}`;
          tag.style.backgroundColor = tagInfo.color + '20';
          tag.style.color = tagInfo.color;
          tags.appendChild(tag);
        }
      });
    }

    // Spice level
    if (item.spiceLevel > 0) {
      const spice = createElement('div', 'menu-item__spice');
      spice.textContent = '🌶️'.repeat(item.spiceLevel);
      spice.title = `Spice Level: ${item.spiceLevel}/4`;
      tags.appendChild(spice);
    }

    content.append(header, description, tags);
    menuItem.append(img, content);

    container.appendChild(menuItem);
  });
};

// Filter menu items by category
const filterMenuItems = (categoryId) => {
  const container = document.getElementById('menu-grid');
  let filteredItems = menuItems;

  if (categoryId !== 'all') {
    filteredItems = menuItems.filter(item => item.category === categoryId);
  }

  renderMenuItems(filteredItems, container);

  // Animate in
  const items = container.querySelectorAll('.menu-item');
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'all 0.3s ease-out';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 50);
  });
};

export default MenuPage;
