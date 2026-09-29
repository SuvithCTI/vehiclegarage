/**
 * ApexAuto Security & Sanitization Utility
 * Provides defensive protections against XSS, prototype pollution, injection, and spam flooding.
 */

// Basic HTML / script tag sanitizer
export const sanitizeText = (input, maxLength = 500) => {
  if (typeof input !== 'string') return '';
  
  return input
    // Remove null bytes
    .replace(/\0/g, '')
    // Strip HTML/script tags
    .replace(/<[^>]*>?/gm, '')
    // Encode potentially dangerous characters
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
    .slice(0, maxLength);
};

// Safe unescaped text (for plain display in React JSX which automatically prevents HTML injection)
export const sanitizePlain = (input, maxLength = 500) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/\0/g, '')
    .replace(/<[^>]*>?/gm, '')
    .trim()
    .slice(0, maxLength);
};

// Sanitize and normalize phone numbers
export const sanitizePhone = (phone) => {
  if (typeof phone !== 'string') return '';
  // Allow numbers, spaces, plus, dashes, and parentheses
  const cleaned = phone.replace(/[^0-9+\s\-()]/g, '').trim().slice(0, 20);
  return cleaned;
};

// Validate and clean email addresses
export const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return '';
  const cleaned = email.trim().toLowerCase().slice(0, 100);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleaned) ? cleaned : '';
};

// Prevent prototype pollution when assigning or parsing objects
export const sanitizeObject = (obj, maxDepth = 4) => {
  if (!obj || typeof obj !== 'object' || maxDepth < 0) return obj;
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item, maxDepth - 1));
  }
  
  const cleanObj = {};
  for (const [key, value] of Object.entries(obj)) {
    // Block prototype pollution keys
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue;
    }
    
    if (typeof value === 'string') {
      cleanObj[key] = sanitizePlain(value, 2000);
    } else if (typeof value === 'object' && value !== null) {
      cleanObj[key] = sanitizeObject(value, maxDepth - 1);
    } else {
      cleanObj[key] = value;
    }
  }
  return cleanObj;
};

// Safe JSON parser with fallback and prototype pollution defense
export const safeJsonParse = (jsonString, fallbackValue = null) => {
  if (!jsonString || typeof jsonString !== 'string') return fallbackValue;
  try {
    const parsed = JSON.parse(jsonString);
    return sanitizeObject(parsed);
  } catch (err) {
    console.warn('[Security] Safe JSON parse error, returning fallback:', err.message);
    return fallbackValue;
  }
};

// Client-side rate limiter for spam prevention (e.g. rapid booking or enquiry submissions)
const rateLimitMap = new Map();

export const isRateLimited = (actionKey, limitMs = 3000) => {
  const now = Date.now();
  const lastCall = rateLimitMap.get(actionKey) || 0;
  if (now - lastCall < limitMs) {
    return true; // Throttle/Rate limited
  }
  rateLimitMap.set(actionKey, now);
  return false;
};
