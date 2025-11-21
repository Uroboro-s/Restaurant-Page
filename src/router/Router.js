// Client-side Router

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
      // Clear current content
      while (this.rootElement.firstChild) {
        this.rootElement.removeChild(this.rootElement.firstChild);
      }

      // Render new page
      const page = route();
      this.rootElement.appendChild(page);

      // Update active nav links
      document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('href') === path) {
          link.classList.add('nav__link--active');
        }
      });
    }
  }
}

export default Router;
