# CLAUDE.md - Restaurant Page Project Guide

## Project Overview

**Project Name:** Sonia's Restaurant
**Type:** Modern Single-page application (SPA)
**Primary Technology:** Vanilla JavaScript with modern build tools
**Purpose:** A breathtaking, feature-rich restaurant website with stunning UI/UX, dynamic content rendering, and comprehensive functionality

This is a restaurant website for "Sonia's" - a fusion Italian-Indian eatery. The redesigned application features a modern landing page, comprehensive menu system, customer reviews, and elegant animations.

---

## 🎯 REDESIGN VISION

### Design Philosophy
- **Breathtaking UI:** Modern, elegant design with smooth animations and micro-interactions
- **User-Centric:** Intuitive navigation with accessibility in mind
- **Performance-First:** Optimized loading, lazy loading images, code splitting
- **Mobile-Responsive:** Flawless experience across all devices
- **SEO-Optimized:** Proper meta tags, semantic HTML, structured data

### Key Design Elements
- Hero sections with parallax effects
- Glass-morphism UI components
- Smooth scroll animations (AOS - Animate On Scroll)
- Custom cursor effects for desktop
- Skeleton loading states
- Dark mode support
- Gradient overlays and backdrop filters
- Card-based layouts with hover effects
- Floating action buttons
- Toast notifications for user feedback

---

## 📁 NEW DIRECTORY STRUCTURE

```
Restaurant-Page/
├── dist/                           # Build output (Webpack-generated)
│   ├── index.html                 # Entry HTML
│   ├── bundle.js                  # Main JS bundle
│   ├── vendor.bundle.js           # Third-party libraries (code-split)
│   ├── styles.css                 # Extracted CSS (production)
│   └── assets/                    # Optimized images, fonts, icons
│       ├── images/                # Compressed images with WebP support
│       ├── fonts/                 # Web fonts
│       └── icons/                 # SVG icons
│
├── src/                           # Source code
│   ├── assets/                    # Raw assets
│   │   ├── images/               # Image files
│   │   │   ├── hero/             # Hero section images
│   │   │   ├── menu/             # Menu item photos
│   │   │   ├── gallery/          # Restaurant gallery
│   │   │   ├── team/             # Chef/staff photos
│   │   │   └── icons/            # SVG icons
│   │   ├── fonts/                # Custom fonts
│   │   └── videos/               # Background videos (optional)
│   │
│   ├── components/               # Reusable UI components
│   │   ├── common/              # Shared components
│   │   │   ├── Header.js        # Navigation header
│   │   │   ├── Footer.js        # Footer component
│   │   │   ├── Button.js        # Custom button component
│   │   │   ├── Card.js          # Reusable card component
│   │   │   ├── Modal.js         # Modal/dialog component
│   │   │   ├── Loader.js        # Loading spinner/skeleton
│   │   │   ├── Toast.js         # Toast notifications
│   │   │   └── ScrollToTop.js   # Scroll to top button
│   │   │
│   │   ├── home/                # Home/Landing page components
│   │   │   ├── HeroSection.js   # Hero banner with CTA
│   │   │   ├── FeaturedDishes.js # Featured items carousel
│   │   │   ├── QuickInfo.js     # Hours, location, quick links
│   │   │   ├── Testimonials.js  # Quick testimonials preview
│   │   │   ├── Reservation.js   # Quick reservation widget
│   │   │   └── SpecialOffers.js # Promotions banner
│   │   │
│   │   ├── menu/                # Menu page components
│   │   │   ├── MenuGrid.js      # Menu items grid/list
│   │   │   ├── MenuItem.js      # Individual menu item card
│   │   │   ├── MenuFilter.js    # Category/dietary filters
│   │   │   ├── MenuSearch.js    # Search functionality
│   │   │   └── MenuCategories.js # Category navigation
│   │   │
│   │   ├── about/               # About Us components
│   │   │   ├── StorySection.js  # Restaurant story
│   │   │   ├── ChefProfiles.js  # Chef/team profiles
│   │   │   ├── Timeline.js      # History timeline
│   │   │   ├── Awards.js        # Awards & recognition
│   │   │   ├── Gallery.js       # Photo gallery
│   │   │   └── Values.js        # Mission & values
│   │   │
│   │   ├── contact/             # Contact page components
│   │   │   ├── ContactForm.js   # Contact form with validation
│   │   │   ├── LocationMap.js   # Google Maps integration
│   │   │   ├── ContactInfo.js   # Address, phone, email
│   │   │   ├── Hours.js         # Operating hours
│   │   │   └── FAQ.js           # Frequently asked questions
│   │   │
│   │   └── stories/             # Customer reviews/stories
│   │       ├── ReviewsGrid.js   # Reviews display grid
│   │       ├── ReviewCard.js    # Individual review card
│   │       ├── ReviewForm.js    # Submit review form
│   │       ├── RatingFilter.js  # Filter by rating
│   │       └── ReviewStats.js   # Rating statistics
│   │
│   ├── pages/                   # Page controllers
│   │   ├── HomePage.js          # Landing page orchestrator
│   │   ├── MenuPage.js          # Menu page orchestrator
│   │   ├── AboutPage.js         # About page orchestrator
│   │   ├── ContactPage.js       # Contact page orchestrator
│   │   └── StoriesPage.js       # Reviews page orchestrator
│   │
│   ├── utils/                   # Utility functions
│   │   ├── domHelpers.js        # DOM manipulation helpers
│   │   ├── validators.js        # Form validation functions
│   │   ├── animations.js        # Animation utilities
│   │   ├── api.js               # API/data fetching (if needed)
│   │   ├── storage.js           # LocalStorage helpers
│   │   ├── dateHelpers.js       # Date formatting utilities
│   │   └── constants.js         # App-wide constants
│   │
│   ├── data/                    # Static data/mock data
│   │   ├── menuData.js          # Menu items data
│   │   ├── reviewsData.js       # Customer reviews data
│   │   ├── teamData.js          # Team/chef information
│   │   ├── faqData.js           # FAQ data
│   │   └── awardsData.js        # Awards and achievements
│   │
│   ├── styles/                  # Stylesheets
│   │   ├── base/               # Base styles
│   │   │   ├── reset.css       # CSS reset/normalize
│   │   │   ├── variables.css   # CSS custom properties
│   │   │   ├── typography.css  # Font styles
│   │   │   └── animations.css  # Keyframe animations
│   │   │
│   │   ├── components/         # Component-specific styles
│   │   │   ├── header.css      # Header styles
│   │   │   ├── footer.css      # Footer styles
│   │   │   ├── button.css      # Button styles
│   │   │   ├── card.css        # Card styles
│   │   │   ├── modal.css       # Modal styles
│   │   │   └── form.css        # Form styles
│   │   │
│   │   ├── pages/              # Page-specific styles
│   │   │   ├── home.css        # Landing page
│   │   │   ├── menu.css        # Menu page
│   │   │   ├── about.css       # About page
│   │   │   ├── contact.css     # Contact page
│   │   │   └── stories.css     # Stories page
│   │   │
│   │   ├── themes/             # Theme support
│   │   │   ├── light.css       # Light mode
│   │   │   └── dark.css        # Dark mode
│   │   │
│   │   └── main.css            # Main stylesheet (imports all)
│   │
│   ├── router/                 # Routing logic
│   │   └── Router.js           # Client-side routing
│   │
│   ├── state/                  # State management (if needed)
│   │   ├── AppState.js         # Global state
│   │   └── observers.js        # State observers/subscribers
│   │
│   └── index.js                # Application entry point
│
├── config/                     # Configuration files
│   ├── webpack.dev.js         # Development webpack config
│   ├── webpack.prod.js        # Production webpack config
│   └── webpack.common.js      # Shared webpack config
│
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependencies
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── babel.config.js           # Babel configuration
├── README.md                 # Project README
└── CLAUDE.md                 # This file
```

---

## 🎨 FEATURE BREAKDOWN

### 1. HOME / LANDING PAGE

**Hero Section:**
- Full-viewport hero with stunning background image/video
- Restaurant name with elegant typography
- Compelling tagline/description
- Primary CTA buttons: "Reserve Table", "View Menu", "Order Online"
- Subtle scroll indicator animation
- Parallax background effect

**Featured Dishes Carousel:**
- Auto-rotating carousel of signature dishes
- High-quality food photography
- Dish name, brief description, price
- "Order Now" or "View Details" buttons
- Touch/swipe support for mobile
- Navigation dots/arrows

**Quick Info Section:**
- Operating hours with visual indicators
- Location with map preview
- Phone number (click-to-call on mobile)
- Special announcements/events banner

**Testimonials Preview:**
- 3-4 rotating customer reviews
- Star ratings
- Customer photos/avatars
- Link to full stories page

**Reservation Widget:**
- Quick reservation form (date, time, party size)
- Real-time availability check (or mock)
- "Book Now" CTA
- Alternative: Link to third-party reservation system

**Special Offers Banner:**
- Highlight current promotions
- Seasonal specials
- Events calendar preview
- Newsletter signup CTA

### 2. MENU PAGE

**Menu Categories:**
- Appetizers / Starters
- Soups & Salads
- Main Course (Indian)
- Main Course (Italian)
- Fusion Specials
- Desserts
- Beverages (Hot & Cold)
- Wine & Cocktails

**Menu Item Features:**
- High-quality food photography
- Item name with elegant typography
- Detailed description
- Price display
- Dietary indicators (icons):
  - Vegetarian 🥬
  - Vegan 🌱
  - Gluten-free 🌾
  - Spicy level 🌶️
  - Chef's special ⭐
  - Contains nuts ⚠️
- Allergen warnings
- Nutritional information (optional tooltip)
- "Add to Order" button (for future online ordering)

**Filter & Search:**
- Category filter tabs
- Dietary preference checkboxes
- Price range slider
- Spice level filter
- Search bar with autocomplete
- Sort options (price, popularity, name)
- "Clear all filters" button

**Menu Views:**
- Grid view (default) - Cards with images
- List view - Compact with smaller images
- Table view - Traditional menu layout

**Additional Features:**
- PDF menu download button
- Print-friendly version
- Chef's recommendations badge
- Daily specials section
- Pairing suggestions (wine with dishes)
- Combo deals/meal packages

### 3. ABOUT US PAGE

**Restaurant Story:**
- Founding story (established 1946 in Bombay)
- Mission statement
- Vision and values
- What makes us unique (Italian-Indian fusion)
- Heritage and tradition

**Timeline:**
- Interactive timeline of milestones
- Key dates with photos
- Awards and achievements
- Location expansions
- Menu evolution

**Meet the Team:**
- Head Chef profile with biography
- Sous chefs
- Founder/owner story
- Staff photos and roles
- Chef's philosophy and inspiration

**Gallery:**
- Restaurant interior photos
- Kitchen behind-the-scenes
- Food preparation process
- Events and celebrations
- Lightbox/modal view for full images
- Grid layout with lazy loading

**Awards & Recognition:**
- Industry awards
- Press features
- Customer ratings (Google, Yelp, TripAdvisor)
- Certifications (health, sustainability)
- Social proof elements

**Sustainability & Values:**
- Local sourcing practices
- Sustainability initiatives
- Community involvement
- Dietary accommodations philosophy
- Cultural fusion commitment

### 4. CONTACT PAGE

**Contact Form:**
- Fields: Name, Email, Phone, Subject, Message
- Input validation (real-time feedback)
- Required field indicators
- Character count for message
- Submit button with loading state
- Success/error toast notifications
- CAPTCHA (optional, for spam prevention)

**Contact Information:**
- Multiple locations (if applicable)
- Each location with:
  - Full address
  - Phone number (click-to-call)
  - Email (click-to-email)
  - Opening hours
  - Direction links

**Interactive Map:**
- Google Maps embed
- Multiple markers for locations
- Custom map styling to match theme
- "Get Directions" link
- Parking information nearby

**Quick Links:**
- Social media buttons (Instagram, Facebook, Twitter)
- WhatsApp business link
- Email newsletter signup
- Career inquiries link
- Press/media inquiries

**FAQ Section:**
- Collapsible accordion items
- Common questions:
  - Reservations policy
  - Parking information
  - Dietary accommodations
  - Private events
  - Delivery/takeout options
  - Payment methods
  - Dress code
  - Group bookings

**Business Hours:**
- Daily schedule with visual representation
- Special holiday hours
- Last seating times
- Kitchen closing times
- Happy hour timing

### 5. STORIES / CUSTOMER REVIEWS PAGE

**Review Display:**
- Card-based layout for each review
- Customer name (or anonymous option)
- Avatar/photo (or default icon)
- Star rating (1-5)
- Review date
- Review text
- Photos from customers (optional)
- "Helpful" vote button
- Response from restaurant (optional)

**Review Statistics:**
- Overall average rating (large display)
- Total number of reviews
- Rating breakdown (5 stars: X%, 4 stars: Y%, etc.)
- Visual bar chart for distribution
- Recent rating trend

**Filtering & Sorting:**
- Filter by rating (5 stars, 4+, 3+, etc.)
- Sort by:
  - Most recent
  - Highest rated
  - Lowest rated
  - Most helpful
- Filter by keyword/search
- Date range filter

**Submit Review Form:**
- Star rating selector (interactive)
- Review title field
- Review text area
- Photo upload (optional)
- Name and email fields
- Anonymous option checkbox
- Submit button
- Success confirmation
- Moderation notice

**Featured Reviews:**
- Highlighted testimonials at top
- Reviews from verified customers
- Media/influencer reviews
- Long-standing customer stories

**Review Sources:**
- Display reviews from multiple platforms
- Google Reviews integration
- Yelp reviews
- TripAdvisor
- Facebook reviews
- Native website reviews

---

## 🎨 DESIGN SYSTEM

### Color Palette

**Primary Colors:**
```css
--primary-gold: #D4AF37;        /* Elegant gold for accents */
--primary-dark: #1a1a1a;        /* Deep black for text */
--primary-burgundy: #800020;    /* Rich burgundy for emphasis */
```

**Secondary Colors:**
```css
--secondary-cream: #F5F5DC;     /* Warm cream for backgrounds */
--secondary-sage: #87AE73;      /* Sage green for freshness */
--secondary-terracotta: #E07A5F; /* Terracotta for warmth */
```

**Neutral Colors:**
```css
--white: #FFFFFF;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

**Semantic Colors:**
```css
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

**Dark Mode:**
```css
--dark-bg-primary: #0F0F0F;
--dark-bg-secondary: #1A1A1A;
--dark-bg-tertiary: #262626;
--dark-text-primary: #FFFFFF;
--dark-text-secondary: #A3A3A3;
```

### Typography

**Font Families:**
```css
--font-heading: 'Playfair Display', serif;  /* Elegant headings */
--font-body: 'Inter', sans-serif;           /* Clean, readable body */
--font-accent: 'Dancing Script', cursive;   /* Handwritten accent */
--font-mono: 'Roboto Mono', monospace;      /* For special use */
```

**Font Sizes (Responsive):**
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
--text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);
--text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);
--text-6xl: clamp(3.75rem, 3rem + 3.75vw, 4.5rem);
```

**Font Weights:**
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Circular */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

### Animations

**Durations:**
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

**Easings:**
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Common Keyframes:**
- Fade in/out
- Slide up/down/left/right
- Scale up/down
- Rotate
- Skeleton loading shimmer
- Pulse
- Bounce
- Shake (for errors)

---

## 🛠️ MODERN BUILD CONFIGURATION

### Webpack Setup

**Development Features:**
- Webpack Dev Server with hot reload
- Source maps for debugging
- Fast refresh
- Error overlay
- Live CSS injection

**Production Optimizations:**
- Code minification (Terser)
- CSS extraction and minification
- Image optimization (imagemin)
- Code splitting (vendor bundles)
- Tree shaking
- Asset hashing for cache busting
- Compression (gzip/brotli)

### Loaders & Plugins

**CSS Processing:**
- PostCSS with autoprefixer
- CSS modules (optional)
- SASS/SCSS support (optional)
- PurgeCSS for unused style removal

**JavaScript:**
- Babel for ES6+ transpilation
- Core-js for polyfills
- ESLint for code quality
- Prettier for formatting

**Assets:**
- Image optimization (WebP conversion)
- SVG sprite generation
- Font loading optimization
- Favicon generation

**Additional Tools:**
- Bundle analyzer
- Performance budgets
- PWA manifest generation
- Service worker (optional)

### NPM Scripts

```json
{
  "scripts": {
    "dev": "webpack serve --config config/webpack.dev.js",
    "build": "webpack --config config/webpack.prod.js",
    "build:analyze": "webpack --config config/webpack.prod.js --analyze",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write \"src/**/*.{js,css,html}\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 📦 RECOMMENDED DEPENDENCIES

### Production Dependencies

```json
{
  "aos": "^2.3.4",                    // Animate on scroll
  "swiper": "^11.0.0",                // Carousel/slider
  "validator": "^13.11.0",            // Form validation
  "date-fns": "^2.30.0"               // Date utilities (optional)
}
```

### Development Dependencies

```json
{
  "webpack": "^5.89.0",
  "webpack-cli": "^5.1.4",
  "webpack-dev-server": "^4.15.1",
  "webpack-merge": "^5.10.0",
  "html-webpack-plugin": "^5.5.4",
  "mini-css-extract-plugin": "^2.7.6",
  "css-loader": "^6.8.1",
  "style-loader": "^3.3.3",
  "postcss": "^8.4.32",
  "postcss-loader": "^7.3.3",
  "autoprefixer": "^10.4.16",
  "sass": "^1.69.5",
  "sass-loader": "^13.3.2",
  "babel-loader": "^9.1.3",
  "@babel/core": "^7.23.5",
  "@babel/preset-env": "^7.23.5",
  "terser-webpack-plugin": "^5.3.9",
  "css-minimizer-webpack-plugin": "^5.0.1",
  "image-minimizer-webpack-plugin": "^3.8.3",
  "imagemin": "^8.0.1",
  "eslint": "^8.55.0",
  "eslint-webpack-plugin": "^4.0.1",
  "prettier": "^3.1.1",
  "webpack-bundle-analyzer": "^4.10.1"
}
```

---

## 🎯 DEVELOPMENT WORKFLOW

### Phase 1: Setup & Infrastructure
1. Update package.json with new dependencies
2. Configure Webpack (dev/prod configs)
3. Set up ESLint and Prettier
4. Create new folder structure
5. Set up CSS variables and design system
6. Create base styles (reset, typography)

### Phase 2: Core Components
1. Build reusable components (Button, Card, Modal, etc.)
2. Create Header with navigation
3. Create Footer
4. Implement Router for navigation
5. Set up state management (if needed)
6. Create utility functions

### Phase 3: Pages Development
1. **Home Page:** Hero, featured dishes, quick info
2. **Menu Page:** Grid, filters, search
3. **About Page:** Story, team, timeline
4. **Contact Page:** Form, map, info
5. **Stories Page:** Reviews, filters, stats

### Phase 4: Enhancements
1. Add animations (AOS, custom transitions)
2. Implement dark mode
3. Add form validation
4. Create loading states
5. Add toast notifications
6. Optimize images
7. Test responsive design

### Phase 5: Polish & Optimization
1. Performance optimization
2. Accessibility audit (WCAG compliance)
3. Cross-browser testing
4. SEO optimization
5. Final design tweaks
6. Documentation updates

---

## 🎨 ANIMATION & INTERACTION PATTERNS

### Scroll Animations (AOS)
```javascript
// Initialize AOS
import AOS from 'aos';
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});
```

**Common AOS Attributes:**
- `data-aos="fade-up"` - Fade and slide up
- `data-aos="fade-down"` - Fade and slide down
- `data-aos="zoom-in"` - Zoom in effect
- `data-aos="flip-left"` - 3D flip effect
- `data-aos-delay="200"` - Delay animation

### Hover Effects

**Cards:**
- Lift on hover (translateY + shadow)
- Image zoom/scale
- Overlay reveal
- Border glow animation

**Buttons:**
- Background color transition
- Scale transform
- Ripple effect
- Icon slide animation

**Images:**
- Ken Burns effect (slow zoom)
- Grayscale to color
- Overlay gradient shift
- Parallax on mouse move

### Loading States

**Skeleton Screens:**
- Use for menu items while loading
- Shimmer animation effect
- Match actual content layout

**Spinners:**
- For button loading states
- For form submissions
- For page transitions

**Progress Indicators:**
- For image uploads
- For multi-step forms

---

## 🎯 CODING CONVENTIONS (UPDATED)

### JavaScript Style

**1. Naming Conventions:**
```javascript
// PascalCase for components
class MenuCard {}
const HeroSection = () => {};

// camelCase for functions and variables
const fetchMenuData = () => {};
let currentPage = 'home';

// UPPER_SNAKE_CASE for constants
const API_ENDPOINT = 'https://api.example.com';
const MAX_REVIEWS = 50;

// kebab-case for CSS classes and IDs
<div class="menu-item" id="featured-dishes">
```

**2. Function Patterns:**
```javascript
// Arrow functions for short operations
const add = (a, b) => a + b;

// Regular functions for component creators
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

// Async/await for API calls
const fetchData = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    showToast('Failed to load data', 'error');
  }
};
```

**3. Component Structure:**
```javascript
// Component creator pattern
const MenuItem = (data) => {
  // Create elements
  const card = document.createElement('div');
  card.className = 'menu-item';

  // Build structure
  const image = createImage(data.image, data.name);
  const title = createTitle(data.name);
  const description = createDescription(data.description);
  const price = createPrice(data.price);

  // Assemble
  card.append(image, title, description, price);

  // Add event listeners
  card.addEventListener('click', () => showItemDetails(data));

  return card;
};

// Helper functions
const createImage = (src, alt) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  return img;
};
```

**4. Module Organization:**
```javascript
// Default export for main function
export default MenuPage;

// Named exports for helpers
export { createMenuItem, filterMenu, searchMenu };
```

**5. Error Handling:**
```javascript
// Always use try-catch for async operations
// Provide user feedback for errors
// Log errors for debugging
try {
  await submitForm(formData);
  showToast('Success!', 'success');
} catch (error) {
  console.error('Form submission failed:', error);
  showToast('Submission failed. Please try again.', 'error');
}
```

### CSS Conventions

**1. Class Naming (BEM-inspired):**
```css
/* Block */
.menu-card {}

/* Block__Element */
.menu-card__image {}
.menu-card__title {}
.menu-card__description {}

/* Block--Modifier */
.menu-card--featured {}
.menu-card--vegetarian {}

/* State classes */
.is-active {}
.is-loading {}
.is-visible {}
```

**2. CSS Organization:**
```css
/* Component file structure */
.component {
  /* Positioning */
  position: relative;
  z-index: 1;

  /* Box model */
  display: flex;
  width: 100%;
  padding: var(--space-4);
  margin-bottom: var(--space-6);

  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);

  /* Visual */
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  /* Animation */
  transition: transform var(--duration-normal) var(--ease-out);
}
```

**3. Responsive Design:**
```css
/* Mobile-first approach */
.component {
  /* Mobile styles (default) */
  font-size: var(--text-sm);
  padding: var(--space-4);
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    font-size: var(--text-base);
    padding: var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    font-size: var(--text-lg);
    padding: var(--space-8);
  }
}
```

---

## 🚀 COMMON DEVELOPMENT TASKS

### Adding a New Page

1. **Create page component** (`src/pages/NewPage.js`):
```javascript
import './styles/pages/newpage.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const NewPage = () => {
  const container = document.createElement('div');
  container.className = 'page-container';

  // Build page content
  const header = Header();
  const content = createPageContent();
  const footer = Footer();

  container.append(header, content, footer);
  return container;
};

const createPageContent = () => {
  const content = document.createElement('main');
  content.className = 'new-page';
  // Add content...
  return content;
};

export default NewPage;
```

2. **Add route** in Router.js:
```javascript
const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/stories': StoriesPage,
  '/newpage': NewPage  // Add new route
};
```

3. **Add navigation link** in Header.js:
```javascript
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/stories', label: 'Stories' },
  { path: '/newpage', label: 'New Page' }  // Add link
];
```

### Creating a Reusable Component

```javascript
// src/components/common/Button.js
const Button = ({ text, onClick, variant = 'primary', size = 'md', icon = null }) => {
  const button = document.createElement('button');
  button.className = `btn btn--${variant} btn--${size}`;
  button.textContent = text;

  if (icon) {
    const iconElement = document.createElement('i');
    iconElement.className = icon;
    button.prepend(iconElement);
  }

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
};

export default Button;

// Usage:
import Button from './components/common/Button';

const reserveBtn = Button({
  text: 'Reserve Table',
  onClick: handleReservation,
  variant: 'primary',
  size: 'lg',
  icon: 'icon-calendar'
});
```

### Adding Form Validation

```javascript
// src/utils/validators.js
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateRequired = (value) => {
  return value.trim().length > 0;
};

// Usage in form:
import { validateEmail, validateRequired } from './utils/validators';

const handleSubmit = (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const name = nameInput.value;

  if (!validateRequired(name)) {
    showError(nameInput, 'Name is required');
    return;
  }

  if (!validateEmail(email)) {
    showError(emailInput, 'Please enter a valid email');
    return;
  }

  // Submit form...
};
```

### Implementing Dark Mode

```javascript
// src/utils/theme.js
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
};

export { toggleTheme, initTheme };

// In CSS:
:root {
  --bg-primary: var(--white);
  --text-primary: var(--gray-900);
}

[data-theme="dark"] {
  --bg-primary: var(--dark-bg-primary);
  --text-primary: var(--dark-text-primary);
}
```

---

## ✅ TESTING CHECKLIST

### Functionality Testing
- [ ] All navigation links work correctly
- [ ] Forms validate input properly
- [ ] Form submissions show appropriate feedback
- [ ] Search functionality returns correct results
- [ ] Filters work as expected
- [ ] Modal open/close functions correctly
- [ ] All buttons have appropriate actions
- [ ] Error states display correctly

### Visual Testing
- [ ] All images load correctly
- [ ] Text is readable (contrast ratios)
- [ ] Layout doesn't break on different screen sizes
- [ ] Animations are smooth and not jarring
- [ ] Dark mode looks good
- [ ] Hover states are visible
- [ ] Focus states are visible (accessibility)

### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Laptop (769px - 1024px)
- [ ] Desktop (1025px+)
- [ ] Touch interactions work on mobile
- [ ] Hamburger menu (if implemented) works

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images are optimized
- [ ] No layout shifts (CLS)
- [ ] Smooth scrolling
- [ ] No memory leaks

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] ARIA labels present
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Alt text for images
- [ ] Form labels properly associated

---

## 🎯 IMPORTANT NOTES FOR AI ASSISTANTS

### Component Development Principles

1. **Reusability First:**
   - Create small, focused components
   - Pass data through parameters, not global state
   - Make components configuration-driven

2. **Accessibility Always:**
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain proper heading hierarchy
   - Provide alt text for images

3. **Performance Conscious:**
   - Use lazy loading for images
   - Debounce search/filter inputs
   - Avoid unnecessary re-renders
   - Minimize DOM manipulations

4. **Error Handling:**
   - Always wrap async operations in try-catch
   - Provide user-friendly error messages
   - Log errors for debugging
   - Have fallback UI for errors

5. **Responsive by Default:**
   - Use mobile-first CSS
   - Test on multiple screen sizes
   - Use relative units (rem, em, %)
   - Leverage CSS Grid and Flexbox

### Common Patterns

**Creating DOM Elements:**
```javascript
// Use helper function for consistency
const createElement = (tag, className, textContent = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};
```

**Event Delegation:**
```javascript
// For dynamic content, use event delegation
container.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    handleMenuItemClick(e.target);
  }
});
```

**Debouncing:**
```javascript
// For search/filter inputs
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce((e) => {
  performSearch(e.target.value);
}, 300));
```

### File Organization Rules

1. **One component per file** (unless helpers are tiny)
2. **Import styles at top of component file**
3. **Group imports**: libraries → components → utils → styles
4. **Export default for main, named for helpers**
5. **Keep files under 300 lines** (split if larger)

### When to Refactor

- Function > 50 lines → Break into smaller functions
- Component doing multiple things → Split into sub-components
- Code repeated 3+ times → Create reusable function/component
- Hard-coded values → Move to constants file
- Complex state logic → Consider state management

### Don't Forget To

- [ ] Update CLAUDE.md when architecture changes
- [ ] Run linter before committing (`npm run lint:fix`)
- [ ] Test on mobile after desktop development
- [ ] Optimize images before adding to project
- [ ] Check accessibility after adding new features
- [ ] Update README with new features
- [ ] Run build before major commits

---

## 📚 RESOURCES & REFERENCES

### Design Inspiration
- Dribbble (restaurant website designs)
- Awwwards (award-winning websites)
- Behance (UI/UX projects)

### Image Resources
- Unsplash (food photography)
- Pexels (free stock photos)
- Foodiesfeed (food-specific images)

### Icon Sets
- Font Awesome
- Heroicons
- Lucide Icons
- Material Icons

### Fonts
- Google Fonts
- Adobe Fonts
- DaFont (for unique fonts)

### Tools
- Figma (design prototyping)
- Adobe Color (color palette generator)
- Coolors (color scheme generator)
- TinyPNG (image compression)
- SVGOMG (SVG optimization)

---

## 🎯 PROJECT GOALS

### User Experience Goals
- Visitors can find menu information within 2 clicks
- Contact information immediately visible
- Reservation process simple and clear
- Mobile experience as good as desktop
- Page loads feel instant (<3s)

### Business Goals
- Increase online reservations
- Showcase restaurant atmosphere
- Build trust through reviews
- Encourage social media following
- Promote special events/offers

### Technical Goals
- Maintainable, modular codebase
- Performance score >90 (Lighthouse)
- WCAG AA accessibility compliance
- SEO-optimized for local search
- Cross-browser compatible

---

## 📝 MIGRATION NOTES

### From Current to New Architecture

**Changes:**
- Tab-based → Router-based navigation
- Inline styles → CSS custom properties
- Monolithic files → Component-based structure
- Limited features → Rich feature set
- Basic styling → Modern design system

**Migration Steps:**
1. Set up new folder structure
2. Extract existing code into components
3. Create new pages with enhanced features
4. Implement router
5. Add new UI components
6. Integrate animations
7. Test thoroughly
8. Deploy

**Backward Compatibility:**
- Keep old files in `/legacy` during transition
- Can reference old implementation if needed
- Remove once migration complete

---

**Last Updated:** 2025-11-21
**Version:** 2.0 (Complete Redesign Plan)
**Status:** Planning Phase - Ready for Implementation

---

## Quick Start for AI Assistants

When working on this project:

1. **Check current implementation** status in git
2. **Review this CLAUDE.md** for architecture decisions
3. **Follow the design system** (colors, spacing, typography)
4. **Create modular components** - don't monolith
5. **Test responsive** - mobile first
6. **Mind accessibility** - ARIA, keyboard nav
7. **Optimize performance** - lazy load, debounce
8. **Update docs** - keep CLAUDE.md current

For questions: Review the relevant section above or ask for clarification on specific implementation details.
