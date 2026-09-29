import { 
  sanitizePlain, 
  sanitizeText, 
  sanitizePhone, 
  sanitizeEmail, 
  sanitizeObject, 
  safeJsonParse, 
  isRateLimited 
} from '../utils/security.js';

console.log('=== RUNNING APEXAUTO SECURITY & BUG AUDIT TESTS ===\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`❌ [FAIL] ${message}`);
  }
}

// 1. XSS Injection Sanitization
const maliciousInput = '<script>alert("XSS")</script><b>Hello</b>';
const cleanedPlain = sanitizePlain(maliciousInput);
assert(!cleanedPlain.includes('<script>') && !cleanedPlain.includes('<b>'), 'Strips HTML & script tags from plain input');

// 2. Phone Sanitizer
const rawPhone = '+91 98451-23456 <script>';
const cleanPhone = sanitizePhone(rawPhone);
assert(cleanPhone === '+91 98451-23456', 'Sanitizes phone numbers and removes injected tags');

// 3. Email Sanitizer
const validEmail = 'customer.service@apexauto.com';
const invalidEmail = 'malicious<script>@bad.com';
assert(sanitizeEmail(validEmail) === 'customer.service@apexauto.com', 'Accepts valid email structure');
assert(sanitizeEmail(invalidEmail) === '', 'Rejects malicious/invalid email payloads');

// 4. Prototype Pollution Protection
const pollutedPayload = JSON.stringify({
  __proto__: { isAdmin: true },
  name: 'Clean Name',
  notes: 'Normal note'
});
const parsedSafe = safeJsonParse(pollutedPayload);
assert(Object.prototype.isAdmin === undefined, 'Prevents prototype pollution from malicious JSON payloads');
assert(parsedSafe.name === 'Clean Name', 'Parses legitimate properties correctly');

// 5. Rate Limiting Test
const action = 'testAction_' + Date.now();
const firstCall = isRateLimited(action, 1000);
const secondCall = isRateLimited(action, 1000);
assert(firstCall === false, 'Allows initial legitimate action');
assert(secondCall === true, 'Throttles rapid spam calls within rate limit window');

console.log(`\n=== TEST RESULTS: ${passedTests}/${totalTests} PASSED ===`);
if (passedTests === totalTests) {
  console.log('🎉 ALL SECURITY AND SANITIZATION TESTS PASSED WITH 0 ERRORS!');
}
