#!/usr/bin/env node

/**
 * GA4 Validation Script
 * Ensures all HTML pages include Google Analytics 4 tracking
 * Prevents commits without GA4 code
 */

const fs = require('fs');
const path = require('path');

const GA4_MEASUREMENT_ID = 'G-L062T9T12C';
const GA4_CODE = 'googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;

// HTML files to check (in root directory and public folder)
const htmlFiles = [
  'index.html',
  'aboutus.html',
  'db-dbm-tutorial-v2.html',
  'fiber.html',
  'gis.html',
  'guestlecture.html',
  'ipmpls.html',
  'tutorials.html',
  'wireless.html',
];

console.log('🔍 Validating GA4 in all HTML pages...\n');

let missingGA4 = [];
let hasGA4 = [];
let errors = [];

htmlFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);

  try {
    if (!fs.existsSync(filePath)) {
      // File doesn't exist yet, skip
      return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes(GA4_CODE)) {
      hasGA4.push(file);
      console.log(`✅ ${file}`);
    } else {
      missingGA4.push(file);
      console.log(`❌ ${file} - MISSING GA4`);
    }
  } catch (err) {
    errors.push(`⚠️  ${file} - Error reading file: ${err.message}`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION RESULTS');
console.log('='.repeat(60));

console.log(`\n✅ Pages with GA4: ${hasGA4.length}`);
console.log(`❌ Pages missing GA4: ${missingGA4.length}`);

if (errors.length > 0) {
  console.log(`\n⚠️  Errors:`);
  errors.forEach(err => console.log(`   ${err}`));
}

if (missingGA4.length > 0) {
  console.log(`\n❌ FAILED: The following pages are missing GA4 code:`);
  missingGA4.forEach(file => console.log(`   • ${file}`));
  console.log(`\n📝 Fix: Use template-page.html as a starting point for new pages.`);
  console.log(`   Or manually add this code immediately after <head>:`);
  console.log(`\n   <!-- Google tag (gtag.js) -->`);
  console.log(`   <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}"></script>`);
  console.log(`   <script>`);
  console.log(`     window.dataLayer = window.dataLayer || [];`);
  console.log(`     function gtag(){dataLayer.push(arguments);}`);
  console.log(`     gtag('js', new Date());`);
  console.log(`     gtag('config', '${GA4_MEASUREMENT_ID}');`);
  console.log(`   </script>`);

  process.exit(1); // Exit with error code
} else {
  console.log(`\n✅ SUCCESS: All pages have GA4 tracking!`);
  process.exit(0);
}
