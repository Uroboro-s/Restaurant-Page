// DOM Manipulation Helper Functions

/**
 * Create a DOM element with className and optional text content
 * @param {string} tag - HTML tag name
 * @param {string|string[]} className - Class name(s) to add
 * @param {string} textContent - Optional text content
 * @returns {HTMLElement}
 */
export const createElement = (tag, className = '', textContent = '') => {
  const element = document.createElement(tag);

  if (className) {
    if (Array.isArray(className)) {
      element.classList.add(...className);
    } else {
      element.className = className;
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
};

/**
 * Create an image element with src and alt
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @param {string} className - Optional class name
 * @returns {HTMLImageElement}
 */
export const createImage = (src, alt, className = '') => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';

  if (className) {
    img.className = className;
  }

  return img;
};

/**
 * Create a button element
 * @param {Object} options - Button options
 * @param {string} options.text - Button text
 * @param {string} options.className - CSS class
 * @param {Function} options.onClick - Click handler
 * @param {string} options.type - Button type (button, submit, reset)
 * @param {string} options.ariaLabel - Aria label for accessibility
 * @returns {HTMLButtonElement}
 */
export const createButton = ({
  text,
  className = '',
  onClick = null,
  type = 'button',
  ariaLabel = ''
}) => {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;

  if (className) {
    button.className = className;
  }

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  if (ariaLabel) {
    button.setAttribute('aria-label', ariaLabel);
  }

  return button;
};

/**
 * Create a link element
 * @param {Object} options - Link options
 * @returns {HTMLAnchorElement}
 */
export const createLink = ({
  text,
  href = '#',
  className = '',
  onClick = null,
  target = '_self'
}) => {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  link.target = target;

  if (className) {
    link.className = className;
  }

  if (onClick) {
    link.addEventListener('click', onClick);
  }

  if (target === '_blank') {
    link.rel = 'noopener noreferrer';
  }

  return link;
};

/**
 * Clear all children from an element
 * @param {HTMLElement} element - Element to clear
 */
export const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/**
 * Toggle a class on an element
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class to toggle
 */
export const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

/**
 * Add multiple classes to an element
 * @param {HTMLElement} element - Target element
 * @param {string[]} classes - Array of class names
 */
export const addClasses = (element, classes) => {
  element.classList.add(...classes);
};

/**
 * Remove multiple classes from an element
 * @param {HTMLElement} element - Target element
 * @param {string[]} classes - Array of class names
 */
export const removeClasses = (element, classes) => {
  element.classList.remove(...classes);
};

/**
 * Check if element has a class
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to check
 * @returns {boolean}
 */
export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

/**
 * Query selector with error handling
 * @param {string} selector - CSS selector
 * @param {HTMLElement} parent - Parent element (default: document)
 * @returns {HTMLElement|null}
 */
export const qs = (selector, parent = document) => {
  return parent.querySelector(selector);
};

/**
 * Query selector all with error handling
 * @param {string} selector - CSS selector
 * @param {HTMLElement} parent - Parent element (default: document)
 * @returns {NodeList}
 */
export const qsAll = (selector, parent = document) => {
  return parent.querySelectorAll(selector);
};

/**
 * Add event listener with automatic cleanup
 * @param {HTMLElement} element - Target element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @param {Object} options - Event listener options
 */
export const addEvent = (element, event, handler, options = {}) => {
  element.addEventListener(event, handler, options);

  // Return cleanup function
  return () => element.removeEventListener(event, handler, options);
};

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function}
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for performance
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;

  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Scroll to element smoothly
 * @param {HTMLElement|string} target - Target element or selector
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (target, offset = 0) => {
  const element = typeof target === 'string' ? qs(target) : target;

  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Set multiple attributes on an element
 * @param {HTMLElement} element - Target element
 * @param {Object} attributes - Object with attribute key-value pairs
 */
export const setAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};
