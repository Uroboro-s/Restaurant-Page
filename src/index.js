// Main Application Entry Point

import './styles/main.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Router from './router/Router';

// Import pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StoriesPage from './pages/StoriesPage';

// Main app initialization
const initApp = () => {
  const root = document.getElementById('content');

  // Clear existing content
  root.innerHTML = '';

  // Create main container
  const appContainer = document.createElement('div');
  appContainer.className = 'page-container';

  // Add header
  const header = Header();
  appContainer.appendChild(header);

  // Create content wrapper for pages
  const contentWrapper = document.createElement('main');
  contentWrapper.id = 'page-content';
  contentWrapper.className = 'content-wrapper';
  appContainer.appendChild(contentWrapper);

  // Add footer
  const footer = Footer();
  appContainer.appendChild(footer);

  // Append to root
  root.appendChild(appContainer);

  // Initialize router with routes
  const routes = {
    '/': HomePage,
    '/menu': MenuPage,
    '/about': AboutPage,
    '/contact': ContactPage,
    '/stories': StoriesPage
  };

  new Router(routes, contentWrapper);

  console.log('🍝 Sonia\'s Restaurant - Application Loaded Successfully!');
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

