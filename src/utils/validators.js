// Form Validation Utilities

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate phone number (flexible format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
};

/**
 * Validate required field (not empty)
 * @param {string} value - Value to validate
 * @returns {boolean}
 */
export const validateRequired = (value) => {
  return value.trim().length > 0;
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length required
 * @returns {boolean}
 */
export const validateMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum length allowed
 * @returns {boolean}
 */
export const validateMaxLength = (value, maxLength) => {
  return value.trim().length <= maxLength;
};

/**
 * Validate number range
 * @param {number} value - Number to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean}
 */
export const validateNumberRange = (value, min, max) => {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean}
 */
export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Validate date (YYYY-MM-DD format)
 * @param {string} date - Date string to validate
 * @returns {boolean}
 */
export const validateDate = (date) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) return false;

  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
};

/**
 * Validate rating (1-5)
 * @param {number} rating - Rating to validate
 * @returns {boolean}
 */
export const validateRating = (rating) => {
  return validateNumberRange(rating, 1, 5);
};

/**
 * Validate name (letters, spaces, hyphens only)
 * @param {string} name - Name to validate
 * @returns {boolean}
 */
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name.trim()) && name.trim().length >= 2;
};

/**
 * Show validation error on input
 * @param {HTMLElement} input - Input element
 * @param {string} message - Error message
 */
export const showValidationError = (input, message) => {
  // Remove existing error
  removeValidationError(input);

  // Add error class
  input.classList.add('input-error');

  // Create error message element
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.setAttribute('role', 'alert');

  // Insert error message after input
  input.parentNode.insertBefore(errorElement, input.nextSibling);

  // Set aria-invalid
  input.setAttribute('aria-invalid', 'true');
};

/**
 * Remove validation error from input
 * @param {HTMLElement} input - Input element
 */
export const removeValidationError = (input) => {
  input.classList.remove('input-error');

  // Remove error message
  const errorMessage = input.parentNode.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }

  // Remove aria-invalid
  input.removeAttribute('aria-invalid');
};

/**
 * Show success state on input
 * @param {HTMLElement} input - Input element
 */
export const showValidationSuccess = (input) => {
  removeValidationError(input);
  input.classList.add('input-success');
};

/**
 * Validate entire form
 * @param {HTMLFormElement} form - Form to validate
 * @param {Object} rules - Validation rules object
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateForm = (form, rules) => {
  const errors = {};
  let isValid = true;

  Object.entries(rules).forEach(([fieldName, fieldRules]) => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    if (!input) return;

    const value = input.value;

    // Check required
    if (fieldRules.required && !validateRequired(value)) {
      errors[fieldName] = fieldRules.requiredMessage || 'This field is required';
      showValidationError(input, errors[fieldName]);
      isValid = false;
      return;
    }

    // Check email
    if (fieldRules.email && value && !validateEmail(value)) {
      errors[fieldName] = fieldRules.emailMessage || 'Please enter a valid email';
      showValidationError(input, errors[fieldName]);
      isValid = false;
      return;
    }

    // Check phone
    if (fieldRules.phone && value && !validatePhone(value)) {
      errors[fieldName] = fieldRules.phoneMessage || 'Please enter a valid phone number';
      showValidationError(input, errors[fieldName]);
      isValid = false;
      return;
    }

    // Check min length
    if (fieldRules.minLength && value && !validateMinLength(value, fieldRules.minLength)) {
      errors[fieldName] = fieldRules.minLengthMessage ||
        `Minimum ${fieldRules.minLength} characters required`;
      showValidationError(input, errors[fieldName]);
      isValid = false;
      return;
    }

    // Check max length
    if (fieldRules.maxLength && value && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[fieldName] = fieldRules.maxLengthMessage ||
        `Maximum ${fieldRules.maxLength} characters allowed`;
      showValidationError(input, errors[fieldName]);
      isValid = false;
      return;
    }

    // If all checks pass, show success
    if (value) {
      showValidationSuccess(input);
    }
  });

  return { isValid, errors };
};

/**
 * Get validation rules for common form types
 */
export const validationRules = {
  contact: {
    name: {
      required: true,
      requiredMessage: 'Please enter your name',
      minLength: 2,
      minLengthMessage: 'Name must be at least 2 characters'
    },
    email: {
      required: true,
      requiredMessage: 'Please enter your email',
      email: true,
      emailMessage: 'Please enter a valid email address'
    },
    phone: {
      required: false,
      phone: true,
      phoneMessage: 'Please enter a valid phone number'
    },
    message: {
      required: true,
      requiredMessage: 'Please enter your message',
      minLength: 10,
      minLengthMessage: 'Message must be at least 10 characters'
    }
  },
  review: {
    name: {
      required: true,
      requiredMessage: 'Please enter your name'
    },
    email: {
      required: true,
      requiredMessage: 'Please enter your email',
      email: true
    },
    rating: {
      required: true,
      requiredMessage: 'Please select a rating'
    },
    review: {
      required: true,
      requiredMessage: 'Please write a review',
      minLength: 20,
      minLengthMessage: 'Review must be at least 20 characters'
    }
  }
};
