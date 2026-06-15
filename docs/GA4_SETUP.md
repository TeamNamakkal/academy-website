# Google Analytics 4 Setup

**Measurement ID:** `G-L062T9T12C`

## 📋 Requirement for ALL HTML Pages

Every HTML page on NodalWire Academy **MUST** include the Google Analytics 4 (GA4) tag.

## 🤖 Automation System

We have an **automatic validation system** that prevents commits without GA4. You cannot accidentally commit a page without GA4!

### How It Works:
1. ✅ Before each commit, a git hook runs automatically
2. ✅ The hook checks all HTML files for GA4 code
3. ❌ If GA4 is missing, the commit is BLOCKED
4. ✅ You must add GA4 before committing

This ensures GA4 is never forgotten!

## 🔧 How to Add GA4 to a New Page

### Option 1: Use the Template (RECOMMENDED)
1. Copy `template-page.html` to your new page
2. Rename it to your page name (e.g., `newpage.html`)
3. Edit the content - **GA4 is already included!**
4. Commit and push - validation will pass automatically ✅

### Option 2: Copy the GA4 Code Manually
Add this code **immediately after the `<head>` tag** in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Page Title</title>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L062T9T12C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L062T9T12C');
</script>

<!-- Rest of your head content -->
<link rel="preconnect" href="https://fonts.googleapis.com">
...
</head>
<body>
```

### Step 2: Important Rules

✅ **DO:**
- Add GA4 code **immediately after `<head>`**
- Add it to **every public HTML page**
- Keep the measurement ID: `G-L062T9T12C`
- Add it only **once per page**

❌ **DON'T:**
- Modify the measurement ID
- Add multiple GA4 tags on the same page
- Add it anywhere other than the `<head>` section

## 📄 Current Pages with GA4

All 9 pages already have GA4 installed:

1. ✅ index.html
2. ✅ aboutus.html
3. ✅ wireless.html
4. ✅ fiber.html
5. ✅ ipmpls.html
6. ✅ gis.html
7. ✅ tutorials.html
8. ✅ guestlecture.html
9. ✅ db-dbm-tutorial-v2.html

## 🔍 Verification

To verify GA4 is installed correctly on any page:
1. Open the page in a browser
2. Open Developer Tools (F12 or Cmd+Option+I)
3. Go to the **Network** tab
4. Search for `gtag.js`
5. You should see a request to `googletagmanager.com`

If you don't see it, the GA4 code wasn't added correctly.

## 🛠️ Automation Tools

### Files You Should Know About:

1. **`template-page.html`** — Use this as a starting point
   - Copy this file for every new page
   - GA4 is already included
   - Just edit the content

2. **`validate-ga4.js`** — Validation script
   - Runs automatically before each commit
   - Checks all HTML files for GA4
   - Run manually: `node validate-ga4.js`

3. **`.git/hooks/pre-commit`** — Git hook
   - Runs validation automatically
   - Blocks commits if GA4 is missing
   - You don't need to do anything - it just works!

### Running Validation Manually

If you want to check GA4 status before committing:
```bash
node validate-ga4.js
```

You'll see:
- ✅ Pages with GA4
- ❌ Pages missing GA4
- 📋 Instructions to fix any issues

## 📊 Dashboard

Monitor GA4 analytics at:
**Google Analytics Dashboard** → [Your GA4 Account]

---

**Last Updated:** 2025-06-14
**Measurement ID:** G-L062T9T12C

## ✨ Summary

- 🤖 **Automation:** Git hook prevents commits without GA4
- 📋 **Template:** Use `template-page.html` for new pages
- ✅ **Validation:** All 9 current pages have GA4
- 🔒 **Safety:** Cannot accidentally forget GA4
