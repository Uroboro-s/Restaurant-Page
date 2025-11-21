// Customer Reviews Data

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2025-01-15",
    review: "Absolutely loved the fusion concept! The Butter Chicken Pizza was mind-blowing. Never thought Italian and Indian cuisines could blend so perfectly. The ambiance is elegant and the service is impeccable.",
    helpful: 42,
    isVerified: true
  },
  {
    id: 2,
    name: "Marco Rossi",
    rating: 5,
    date: "2025-01-10",
    review: "As an Italian, I was skeptical at first, but Sonia's has mastered the art of fusion. The pasta quality is authentic, and the Indian spices complement it beautifully. The Godfather dish is a must-try!",
    helpful: 38,
    isVerified: true
  },
  {
    id: 3,
    name: "Anjali Patel",
    rating: 4,
    date: "2025-01-08",
    review: "Great food and wonderful atmosphere. The Tikka Masala Risotto was creamy and flavorful. Only wish the portions were a bit larger for the price. Will definitely come back!",
    helpful: 25,
    isVerified: false
  },
  {
    id: 4,
    name: "Raj Malhotra",
    rating: 5,
    date: "2025-01-05",
    review: "Best restaurant in Mumbai! Been coming here for years and they never disappoint. The quality is consistent and the chef's specials are always innovative. Highly recommended for special occasions.",
    helpful: 31,
    isVerified: true
  },
  {
    id: 5,
    name: "Sofia D'Angelo",
    rating: 5,
    date: "2024-12-28",
    review: "Visited during my trip to Mumbai and was blown away! The Curry Carbonara is genius. Perfect balance of flavors. The staff was incredibly welcoming and the ambiance is perfect for a date night.",
    helpful: 19,
    isVerified: true
  },
  {
    id: 6,
    name: "Vikram Singh",
    rating: 4,
    date: "2024-12-20",
    review: "Solid food with creative combinations. The service was quick and attentive. Prices are on the higher side but worth it for the unique experience. The desserts are particularly impressive!",
    helpful: 15,
    isVerified: false
  }
];

export const reviewStats = {
  averageRating: 4.7,
  totalReviews: 1247,
  ratingDistribution: {
    5: 856,
    4: 287,
    3: 78,
    2: 18,
    1: 8
  }
};

export default { reviews, reviewStats };
