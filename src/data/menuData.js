// Menu Items Data

import pizzaImg from '../assets/images/menu/bg.jpg';
import golgappeImg from '../assets/images/menu/golgappe.jpg';
import kebabRollImg from '../assets/images/menu/kebab_rolls.jpg';
import omeletteImg from '../assets/images/menu/omelette.jpg';
import paneerPakodaImg from '../assets/images/menu/paneer_pakoda.jpg';
import paneerParathaImg from '../assets/images/menu/paneer_paratha.jpg';
import godfatherImg from '../assets/images/menu/godfather.jpg';

export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil",
    price: 500,
    category: "italian-mains",
    image: pizzaImg,
    tags: ["vegetarian"],
    spiceLevel: 0,
    isChefSpecial: false
  },
  {
    id: 2,
    name: "Golgappa Chaat",
    description: "Crispy puris filled with spiced potato, tangy tamarind water, and mint chutney",
    price: 30,
    category: "appetizers",
    image: golgappeImg,
    tags: ["vegetarian", "vegan"],
    spiceLevel: 2,
    isChefSpecial: false
  },
  {
    id: 3,
    name: "Kebab Roll",
    description: "Spiced chicken kebabs wrapped in soft roti with onions and mint sauce",
    price: 60,
    category: "indian-mains",
    image: kebabRollImg,
    tags: [],
    spiceLevel: 2,
    isChefSpecial: false
  },
  {
    id: 4,
    name: "Masala Omelette",
    description: "Fluffy omelette with onions, tomatoes, green chilies, and Indian spices",
    price: 30,
    category: "appetizers",
    image: omeletteImg,
    tags: ["vegetarian", "glutenFree"],
    spiceLevel: 1,
    isChefSpecial: false
  },
  {
    id: 5,
    name: "Paneer Pakoda",
    description: "Crispy fried cottage cheese fritters with tangy tamarind chutney",
    price: 20,
    category: "appetizers",
    image: paneerPakodaImg,
    tags: ["vegetarian"],
    spiceLevel: 1,
    isChefSpecial: false
  },
  {
    id: 6,
    name: "Paneer Paratha",
    description: "Whole wheat flatbread stuffed with spiced cottage cheese, served with yogurt",
    price: 30,
    category: "indian-mains",
    image: paneerParathaImg,
    tags: ["vegetarian"],
    spiceLevel: 1,
    isChefSpecial: false
  },
  {
    id: 7,
    name: "The Godfather",
    description: "Signature fusion pasta with Indian masala sauce, topped with paneer",
    price: 129,
    category: "fusion",
    image: godfatherImg,
    tags: ["vegetarian", "chefSpecial"],
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 8,
    name: "Tikka Masala Risotto",
    description: "Creamy Italian risotto infused with tikka masala spices and grilled chicken",
    price: 250,
    category: "fusion",
    image: pizzaImg,
    tags: ["chefSpecial", "glutenFree"],
    spiceLevel: 2,
    isChefSpecial: true
  },
  {
    id: 9,
    name: "Curry Carbonara",
    description: "Classic carbonara pasta with a hint of curry leaves and coconut cream",
    price: 180,
    category: "fusion",
    image: pizzaImg,
    tags: ["chefSpecial"],
    spiceLevel: 1,
    isChefSpecial: true
  },
  {
    id: 10,
    name: "Butter Chicken Pizza",
    description: "Naan-style crust topped with butter chicken, mozzarella, and cilantro",
    price: 350,
    category: "fusion",
    image: pizzaImg,
    tags: ["chefSpecial"],
    spiceLevel: 1,
    isChefSpecial: true
  },
  {
    id: 11,
    name: "Spaghetti Vindaloo",
    description: "Spicy Goan vindaloo sauce tossed with spaghetti and tender pork",
    price: 220,
    category: "fusion",
    image: pizzaImg,
    tags: [],
    spiceLevel: 3,
    isChefSpecial: false
  },
  {
    id: 12,
    name: "Gulab Jamun Tiramisu",
    description: "Italian tiramisu layered with Indian gulab jamun and rose syrup",
    price: 150,
    category: "desserts",
    image: pizzaImg,
    tags: ["vegetarian", "chefSpecial"],
    spiceLevel: 0,
    isChefSpecial: true
  }
];

export default menuItems;
