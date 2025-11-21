// Stories/Reviews Page

import { createElement, createButton } from '../utils/domHelpers';
import { reviews, reviewStats } from '../data/reviewsData';

const StoriesPage = () => {
  const page = createElement('div', 'stories-page');

  // Header
  const header = createElement('div', 'stories-header');
  const title = createElement('h1', 'stories-header__title', 'Customer Stories');
  const subtitle = createElement('p', 'stories-header__subtitle', 'Read what our guests have to say about their experience');
  header.append(title, subtitle);

  // Review Stats
  const stats = createElement('div', 'review-stats');
  const rating = createElement('div', 'review-stats__rating', reviewStats.averageRating.toFixed(1));
  const stars = createElement('div', 'review-stats__stars', '⭐⭐⭐⭐⭐');
  const count = createElement('p', 'review-stats__count', `Based on ${reviewStats.totalReviews} reviews`);
  stats.append(rating, stars, count);

  // Reviews Grid
  const reviewsGrid = createElement('div', 'reviews-grid');

  reviews.forEach(review => {
    const card = createElement('div', 'review-card');

    // Header
    const cardHeader = createElement('div', 'review-card__header');
    const authorInfo = createElement('div');
    const author = createElement('div', 'review-card__author', review.name);
    const date = createElement('div', 'review-card__date', new Date(review.date).toLocaleDateString());
    authorInfo.append(author, date);

    const rating = createElement('div', 'review-card__rating', '⭐'.repeat(review.rating));
    cardHeader.append(authorInfo, rating);

    // Content
    const content = createElement('p', 'review-card__content', `"${review.review}"`);

    // Footer
    const footer = createElement('div', 'review-card__footer');
    const helpful = createElement('span', 'review-card__helpful', `${review.helpful} found this helpful`);

    if (review.isVerified) {
      const verified = createElement('span', 'review-card__verified', '✓ Verified Customer');
      footer.append(helpful, verified);
    } else {
      footer.appendChild(helpful);
    }

    card.append(cardHeader, content, footer);
    reviewsGrid.appendChild(card);
  });

  // Add review button
  const addReviewSection = createElement('div', 'text-center');
  addReviewSection.style.marginTop = 'var(--space-12)';

  const addReviewBtn = createButton({
    text: 'Write a Review',
    className: 'btn btn--primary btn--lg',
    onClick: () => {
      alert('Review form functionality can be added here!');
    }
  });

  addReviewSection.appendChild(addReviewBtn);

  page.append(header, stats, reviewsGrid, addReviewSection);

  return page;
};

export default StoriesPage;
