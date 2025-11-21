// Animation Utility Functions

/**
 * Add ripple effect to an element
 * @param {HTMLElement} element - The element to add ripple effect to
 * @param {Event} event - The click event
 */
export const createRipple = (element, event) => {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');

  // Remove existing ripples
  const existingRipple = element.querySelector('.ripple');
  if (existingRipple) {
    existingRipple.remove();
  }

  element.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

/**
 * Add ripple effect to all elements with specified selector
 * @param {string} selector - CSS selector for elements
 */
export const initRippleEffect = (selector = '.ripple-container') => {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener('click', (e) => {
      createRipple(element, e);
    });
  });
};

/**
 * Add stagger animation to children elements
 * @param {HTMLElement} container - Parent container
 * @param {string} animationClass - Animation class to add
 * @param {number} delayIncrement - Delay between each child (ms)
 */
export const staggerChildren = (container, animationClass = 'fade-in-up', delayIncrement = 100) => {
  const children = container.children;
  Array.from(children).forEach((child, index) => {
    child.classList.add(animationClass);
    child.style.animationDelay = `${index * delayIncrement}ms`;
  });
};

/**
 * Observe element and add animation when in viewport
 * @param {HTMLElement} element - Element to observe
 * @param {string} animationClass - Animation class to add
 * @param {Object} options - Intersection observer options
 */
export const animateOnScroll = (element, animationClass, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(element);
};

/**
 * Add parallax effect to element
 * @param {HTMLElement} element - Element to apply parallax
 * @param {number} speed - Parallax speed (0.1 to 1)
 */
export const addParallax = (element, speed = 0.5) => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const offset = scrolled * speed;
    element.style.transform = `translateY(${offset}px)`;
  });
};

/**
 * Smooth scroll to element
 * @param {string|HTMLElement} target - Element or selector to scroll to
 * @param {number} offset - Offset from top (px)
 */
export const smoothScrollTo = (target, offset = 0) => {
  const element = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Add fade-in animation when element enters viewport
 * @param {string} selector - CSS selector for elements
 */
export const initFadeInOnScroll = (selector) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => observer.observe(element));
};

/**
 * Add counter animation to number elements
 * @param {HTMLElement} element - Element containing number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration (ms)
 */
export const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

/**
 * Create page transition effect
 * @param {Function} callback - Function to execute during transition
 */
export const pageTransition = async (callback) => {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(128, 0, 32, 0.95));
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  `;

  document.body.appendChild(overlay);

  // Fade in
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);

  // Execute callback
  setTimeout(() => {
    if (callback) callback();

    // Fade out
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
    }, 300);
  }, 300);
};

/**
 * Add hover tilt effect to card
 * @param {HTMLElement} card - Card element
 * @param {number} maxTilt - Maximum tilt angle
 */
export const addTiltEffect = (card, maxTilt = 5) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
};

export default {
  createRipple,
  initRippleEffect,
  staggerChildren,
  animateOnScroll,
  addParallax,
  smoothScrollTo,
  initFadeInOnScroll,
  animateCounter,
  pageTransition,
  addTiltEffect
};
