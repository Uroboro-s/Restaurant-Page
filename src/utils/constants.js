// Application Constants

// Restaurant Information
export const RESTAURANT_INFO = {
  name: "Sonia's",
  tagline: "Where Italy Meets India",
  description: "Experience the extraordinary fusion of Italian elegance and Indian spices",
  established: 1946,
  foundedIn: "Bombay (now Mumbai)",
  email: "hello@soniasrestaurant.com",
  phone: "+91 22 1234 5678",
  address: {
    street: "123 Heritage Lane",
    area: "Colaba",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipCode: "400001"
  }
};

// Business Hours
export const BUSINESS_HOURS = {
  monday: { open: "11:00 AM", close: "11:00 PM", isClosed: false },
  tuesday: { open: "11:00 AM", close: "11:00 PM", isClosed: false },
  wednesday: { open: "11:00 AM", close: "11:00 PM", isClosed: false },
  thursday: { open: "11:00 AM", close: "11:00 PM", isClosed: false },
  friday: { open: "11:00 AM", close: "12:00 AM", isClosed: false },
  saturday: { open: "11:00 AM", close: "12:00 AM", isClosed: false },
  sunday: { open: "12:00 PM", close: "11:00 PM", isClosed: false }
};

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/sonias_restaurant",
  facebook: "https://facebook.com/sonias.restaurant",
  twitter: "https://twitter.com/sonias_eats",
  youtube: "https://youtube.com/@sonias_restaurant"
};

// Navigation Menu Items
export const NAV_ITEMS = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/menu", label: "Menu", icon: "📖" },
  { path: "/about", label: "About", icon: "ℹ️" },
  { path: "/contact", label: "Contact", icon: "📧" },
  { path: "/stories", label: "Stories", icon: "⭐" }
];

// Menu Categories
export const MENU_CATEGORIES = [
  { id: "all", name: "All", icon: "🍽️" },
  { id: "appetizers", name: "Appetizers", icon: "🥗" },
  { id: "soups", name: "Soups & Salads", icon: "🥣" },
  { id: "indian-mains", name: "Indian Mains", icon: "🍛" },
  { id: "italian-mains", name: "Italian Mains", icon: "🍝" },
  { id: "fusion", name: "Fusion Specials", icon: "✨" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "beverages", name: "Beverages", icon: "🍹" }
];

// Dietary Tags
export const DIETARY_TAGS = {
  vegetarian: { icon: "🥬", label: "Vegetarian", color: "#87AE73" },
  vegan: { icon: "🌱", label: "Vegan", color: "#10B981" },
  glutenFree: { icon: "🌾", label: "Gluten-Free", color: "#F59E0B" },
  spicy: { icon: "🌶️", label: "Spicy", color: "#EF4444" },
  chefSpecial: { icon: "⭐", label: "Chef's Special", color: "#D4AF37" },
  containsNuts: { icon: "⚠️", label: "Contains Nuts", color: "#F59E0B" }
};

// Spice Levels
export const SPICE_LEVELS = {
  none: { level: 0, label: "No Spice", icon: "" },
  mild: { level: 1, label: "Mild", icon: "🌶️" },
  medium: { level: 2, label: "Medium", icon: "🌶️🌶️" },
  hot: { level: 3, label: "Hot", icon: "🌶️🌶️🌶️" },
  veryHot: { level: 4, label: "Very Hot", icon: "🌶️🌶️🌶️🌶️" }
};

// Review Rating Options
export const RATING_OPTIONS = [
  { value: 5, label: "Excellent", icon: "⭐⭐⭐⭐⭐" },
  { value: 4, label: "Very Good", icon: "⭐⭐⭐⭐" },
  { value: 3, label: "Good", icon: "⭐⭐⭐" },
  { value: 2, label: "Fair", icon: "⭐⭐" },
  { value: 1, label: "Poor", icon: "⭐" }
];

// FAQ Categories
export const FAQ_CATEGORIES = {
  general: "General",
  reservations: "Reservations",
  menu: "Menu & Dietary",
  events: "Events & Catering",
  delivery: "Delivery & Takeout"
};

// Toast/Notification Types
export const TOAST_TYPES = {
  success: { icon: "✓", color: "#10B981" },
  error: { icon: "✕", color: "#EF4444" },
  warning: { icon: "⚠", color: "#F59E0B" },
  info: { icon: "ℹ", color: "#3B82F6" }
};

// Animation Delays (for staggered animations)
export const ANIMATION_DELAYS = {
  fast: 100,
  normal: 200,
  slow: 300
};

// Breakpoints (for JavaScript responsive logic)
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536
};

// API Endpoints (if using external APIs)
export const API_ENDPOINTS = {
  menu: "/api/menu",
  reviews: "/api/reviews",
  contact: "/api/contact",
  reservation: "/api/reservation"
};

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: "sonias_theme",
  favorites: "sonias_favorites",
  cart: "sonias_cart",
  recentlyViewed: "sonias_recently_viewed"
};

// Error Messages
export const ERROR_MESSAGES = {
  generic: "Something went wrong. Please try again.",
  network: "Network error. Please check your connection.",
  required: "This field is required.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  rating: "Please select a rating."
};

// Success Messages
export const SUCCESS_MESSAGES = {
  formSubmit: "Thank you! We'll get back to you soon.",
  reviewSubmit: "Thank you for your review!",
  newsletterSignup: "Successfully subscribed to our newsletter!",
  reservationRequest: "Reservation request submitted successfully!"
};

// Page Titles
export const PAGE_TITLES = {
  home: "Sonia's - Italian-Indian Fusion Restaurant",
  menu: "Our Menu - Sonia's",
  about: "About Us - Sonia's",
  contact: "Contact Us - Sonia's",
  stories: "Customer Stories - Sonia's"
};

// Meta Descriptions
export const META_DESCRIPTIONS = {
  home: "Experience the extraordinary fusion of Italian and Indian cuisine at Sonia's. Est. 1946 in Mumbai.",
  menu: "Explore our diverse menu featuring authentic Italian dishes, traditional Indian flavors, and unique fusion creations.",
  about: "Learn about Sonia's rich history spanning over 75 years of culinary excellence in Mumbai.",
  contact: "Get in touch with Sonia's. Visit us, call us, or send us a message for reservations and inquiries.",
  stories: "Read what our customers are saying about their dining experiences at Sonia's."
};

// Max file sizes (in bytes)
export const MAX_FILE_SIZES = {
  image: 5 * 1024 * 1024, // 5MB
  document: 10 * 1024 * 1024 // 10MB
};

// Accepted file types
export const ACCEPTED_FILE_TYPES = {
  image: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  document: ['application/pdf', 'application/msword']
};

// Pagination
export const PAGINATION = {
  menuItemsPerPage: 12,
  reviewsPerPage: 9,
  postsPerPage: 6
};

// Currency
export const CURRENCY = {
  symbol: "₹",
  code: "INR",
  name: "Indian Rupee"
};

// Default values
export const DEFAULTS = {
  theme: "light",
  language: "en",
  itemsPerPage: 12,
  animationDuration: 300
};
