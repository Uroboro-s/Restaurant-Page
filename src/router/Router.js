// Client-side Router
import AOS from 'aos';
import { initRippleEffect } from '../utils/animations';

class Router {
  constructor(routes, rootElement) {
    this.routes = routes;
    this.rootElement = rootElement;
    this.currentPath = window.location.pathname || '/';

    // Listen for navigation events
    window.addEventListener('navigate', (e) => {
      this.navigate(e.detail.path);
    });

    // Listen for browser back/forward
    window.addEventListener('popstate', () => {
      this.render(window.location.pathname);
    });

    // Initial render
    this.render(this.currentPath);
  }

  navigate(path) {
    if (path !== this.currentPath) {
      this.currentPath = path;
      window.history.pushState({}, '', path);
      this.render(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  render(path) {
    const route = this.routes[path] || this.routes['/'];

    if (route) {
      // Add fade out animation
      this.rootElement.style.opacity = '0';
      this.rootElement.style.transition = 'opacity 0.2s ease';

      setTimeout(() => {
        // Clear current content
        while (this.rootElement.firstChild) {
          this.rootElement.removeChild(this.rootElement.firstChild);
        }

        // Render new page
        const page = route();
        this.rootElement.appendChild(page);

        // Fade in animation
        requestAnimationFrame(() => {
          this.rootElement.style.opacity = '1';
        });

        // Refresh AOS animations and ripple effects
        setTimeout(() => {
          AOS.refresh();
          initRippleEffect();
        }, 100);

        // Update active nav links
        document.querySelectorAll('.nav__link').forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === path) {
            link.classList.add('nav__link--active');
          }
        });
      }, 200);
    }
  }
}

export default Router;
