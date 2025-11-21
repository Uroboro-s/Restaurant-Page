// Contact Page

import { createElement, createButton } from '../utils/domHelpers';
import { RESTAURANT_INFO, BUSINESS_HOURS } from '../utils/constants';
import faqs from '../data/faqData';
import { validateForm, validationRules } from '../utils/validators';

const ContactPage = () => {
  const page = createElement('div', 'contact-page');

  // Header
  const header = createElement('div', 'contact-header');
  const title = createElement('h1', 'contact-header__title', 'Get In Touch');
  const subtitle = createElement('p', 'contact-header__subtitle');
  subtitle.textContent = "We'd love to hear from you!";
  subtitle.style.fontSize = 'var(--text-xl)';
  subtitle.style.color = 'var(--text-secondary)';
  header.append(title, subtitle);

  // Content
  const content = createElement('div', 'contact-content');

  // Contact Form
  const formWrapper = createElement('div', 'contact-form');
  const formTitle = createElement('h2', 'contact-form__title', 'Send us a message');

  const form = createElement('form', 'form');
  form.setAttribute('novalidate', 'true');

  // Name field
  const nameGroup = createFormGroup('name', 'Name', 'text', 'Your name', true);

  // Email field
  const emailGroup = createFormGroup('email', 'Email', 'email', 'your@email.com', true);

  // Phone field
  const phoneGroup = createFormGroup('phone', 'Phone', 'tel', '+91 1234567890', false);

  // Message field
  const messageGroup = createElement('div', 'form__group');
  const messageLabel = createElement('label', 'form__label form__label--required');
  messageLabel.textContent = 'Message';
  messageLabel.setAttribute('for', 'message');

  const messageInput = document.createElement('textarea');
  messageInput.className = 'form__textarea';
  messageInput.name = 'message';
  messageInput.id = 'message';
  messageInput.placeholder = 'Your message...';
  messageInput.required = true;

  messageGroup.append(messageLabel, messageInput);

  // Submit button
  const actions = createElement('div', 'form__actions');
  const submitBtn = createButton({
    text: 'Send Message',
    className: 'btn btn--primary btn--full',
    type: 'submit'
  });
  actions.appendChild(submitBtn);

  form.append(nameGroup, emailGroup, phoneGroup, messageGroup, actions);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = validateForm(form, validationRules.contact);

    if (result.isValid) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        alert('Thank you! Your message has been sent. We\'ll get back to you soon.');
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 1500);
    }
  });

  formWrapper.append(formTitle, form);

  // Contact Info
  const info = createElement('div', 'contact-info');

  const phoneCard = createContactCard('📞', 'Phone', RESTAURANT_INFO.phone);
  const emailCard = createContactCard('✉️', 'Email', RESTAURANT_INFO.email);
  const locationCard = createContactCard(
    '📍',
    'Address',
    `${RESTAURANT_INFO.address.street}, ${RESTAURANT_INFO.address.area}, ${RESTAURANT_INFO.address.city}, ${RESTAURANT_INFO.address.state} ${RESTAURANT_INFO.address.zipCode}`
  );

  const hoursCard = createElement('div', 'contact-info-card');
  const hoursIcon = createElement('div', 'contact-info-card__icon', '🕐');
  const hoursTitle = createElement('h3', 'contact-info-card__title', 'Business Hours');
  const hoursContent = createElement('div', 'contact-info-card__content');
  hoursContent.textContent = 'Mon-Sun: 11:00 AM - 11:00 PM';
  hoursCard.append(hoursIcon, hoursTitle, hoursContent);

  info.append(phoneCard, emailCard, locationCard, hoursCard);

  content.append(formWrapper, info);

  // FAQ Section
  const faqSection = createElement('section', 'faq-section');
  const faqTitle = createElement('h2', 'faq-section__title', 'Frequently Asked Questions');

  faqs.forEach(faq => {
    const faqItem = createElement('div', 'faq-item');

    const question = createButton({
      text: faq.question,
      className: 'faq-item__question',
      onClick: (e) => {
        const item = e.target.closest('.faq-item');
        item.classList.toggle('faq-item--open');
      }
    });

    const answer = createElement('div', 'faq-item__answer');
    const answerContent = createElement('div', 'faq-item__answer-content', faq.answer);
    answer.appendChild(answerContent);

    faqItem.append(question, answer);
    faqSection.appendChild(faqItem);
  });

  faqSection.insertBefore(faqTitle, faqSection.firstChild);

  page.append(header, content, faqSection);

  return page;
};

// Helper function to create form group
const createFormGroup = (name, label, type, placeholder, required) => {
  const group = createElement('div', 'form__group');

  const labelEl = createElement('label', `form__label ${required ? 'form__label--required' : ''}`);
  labelEl.textContent = label;
  labelEl.setAttribute('for', name);

  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.id = name;
  input.className = 'form__input';
  input.placeholder = placeholder;
  if (required) input.required = true;

  group.append(labelEl, input);
  return group;
};

// Helper function to create contact info card
const createContactCard = (icon, title, content) => {
  const card = createElement('div', 'contact-info-card');

  const iconEl = createElement('div', 'contact-info-card__icon', icon);
  const titleEl = createElement('h3', 'contact-info-card__title', title);
  const contentEl = createElement('div', 'contact-info-card__content', content);

  card.append(iconEl, titleEl, contentEl);
  return card;
};

export default ContactPage;
