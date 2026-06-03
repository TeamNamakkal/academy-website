# Deployment Guide

## GitHub Setup

### First Time Push

```bash
cd "/Users/surendrannatarajan/Library/Mobile Documents/com~apple~CloudDocs/00.NodalWire/08.Academy_website"

# Initialize git repo (if not already done)
git init
git config user.name "Your Name"
git config user.email "your.email@nodalwire.com"

# Add all production files
git add .

# Create initial commit
git commit -m "Initial commit: NodalWire Academy website

- Homepage with hero, courses, resources, guest lectures, and contact
- 6 course pages: Wireless, Fiber, IP/MPLS, GIS, IoT, Automation
- Guest lectures academic portfolio with institutional records
- SEO-optimized with JSON-LD schema, OG tags, canonical URLs
- Mobile-first responsive design (desktop, tablet, mobile)
- Contact form with FormSubmit.co integration
- Static HTML, no build step required"

# Add remote origin
git remote add origin https://github.com/nodalwire/academy-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Updates

```bash
git status
git add [modified files]
git commit -m "Description of changes"
git push origin main
```

---

## Production Deployment

### Option 1: GitHub Pages (Free)

```bash
# In GitHub repo settings:
# 1. Go to Settings > Pages
# 2. Select "Deploy from a branch"
# 3. Choose "main" branch, root folder
# 4. Custom domain: nodalwireacademy.com (if using)
# Site auto-deployed at: https://github.com/nodalwire/academy-website
```

### Option 2: Vercel (Recommended for Production)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Configure:
# - Project name: academy-website
# - Framework: Other (static HTML)
# - Root directory: ./
# - Build command: (leave empty)
# - Output directory: (leave empty)
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Configure:
# - Publish directory: ./
# - Build command: (none)
```

### Option 4: Traditional Web Host (cPanel, etc.)

```bash
# FTP or SFTP all files except:
# - node_modules/
# - serve.mjs
# - screenshot.mjs
# - .gitignore
# - DEPLOYMENT.md
# - CLAUDE.md

# Keep:
# - All .html files
# - Brand_Assets/
# - Images/
# - robots.txt
# - sitemap.xml
# - package.json (optional)
```

---

## Pre-Deployment Checklist

### Content
- [ ] All course titles, descriptions, prices current
- [ ] Contact email correct (contact@nodalwire.com)
- [ ] Social links valid (LinkedIn, YouTube)
- [ ] Guest lecture data complete and verified
- [ ] Image paths correct and optimized

### SEO
- [ ] Meta descriptions unique per page
- [ ] OG tags with og:image pointing to fulllogo.jpg
- [ ] Canonical URLs match domain
- [ ] JSON-LD schema valid (test with https://schema.org/validator)
- [ ] robots.txt configured
- [ ] sitemap.xml updated

### Performance
- [ ] All images optimized (< 500 KB each)
- [ ] No console errors in DevTools
- [ ] Lighthouse score > 90 (run locally: Lighthouse > Generate report)
- [ ] Form submission tested (check email delivery)
- [ ] Mobile responsive (test at 375px, 768px, 1200px)

### Security
- [ ] No API keys in HTML
- [ ] No sensitive email addresses exposed
- [ ] Form uses HTTPS (FormSubmit.co provides this)
- [ ] External links use rel="noopener noreferrer"

### Accessibility
- [ ] All images have alt text
- [ ] Nav links have aria-current or role
- [ ] Form labels associated with inputs
- [ ] Color contrast > 4.5:1 for all text

---

## Domain Setup

### DNS Records

Point your domain to your hosting platform:

**For Vercel:**
```
A     34.74.237.80
CNAME cname.vercel.com (for subdomain)
```

**For Netlify:**
```
A     75.2.60.5
```

**For GitHub Pages:**
```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
CNAME yourgithubusername.github.io (for subdomain)
```

### SSL Certificate

- **GitHub Pages:** Free HTTPS (automatic)
- **Vercel:** Free HTTPS (automatic)
- **Netlify:** Free HTTPS (automatic)
- **Traditional Host:** Use Let's Encrypt (free) or paid certificate

---

## Post-Deployment Verification

```bash
# 1. Test all links work
curl -I https://www.nodalwireacademy.com/
curl -I https://www.nodalwireacademy.com/wireless.html
curl -I https://www.nodalwireacademy.com/guestlecture.html

# 2. Check SEO
# Go to: https://www.seobility.net/en/seocheck/
# Enter: https://www.nodalwireacademy.com

# 3. Check Core Web Vitals
# Go to: https://pagespeed.web.dev/
# Enter: https://www.nodalwireacademy.com

# 4. Test form submission
# Visit site > click "Invite Us" > submit form
# Check email inbox for FormSubmit.co confirmation

# 5. Mobile test
# Go to: https://search.google.com/test/mobile-friendly
# Enter: https://www.nodalwireacademy.com

# 6. Social sharing
# Visit: https://www.facebook.com/sharer/sharer.php?u=https://www.nodalwireacademy.com
# Verify og:image, og:title, og:description preview
```

---

## Monitoring & Maintenance

### Monthly Tasks
- [ ] Check uptime (use https://uptimerobot.com)
- [ ] Review form submissions
- [ ] Verify all external links still work
- [ ] Check Google Search Console for errors

### Quarterly Tasks
- [ ] Update course descriptions if needed
- [ ] Add new guest lecture records
- [ ] Audit Lighthouse score
- [ ] Review analytics (Google Analytics, Vercel Analytics)

### Yearly Tasks
- [ ] Update copyright year (© 2026 → 2027)
- [ ] Security audit (SSL, headers, no vulnerabilities)
- [ ] SEO audit (rankings, backlinks, competitors)
- [ ] Content refresh (ensure all links valid, images recent)

---

## Rollback

If deployment has issues:

```bash
# GitHub: Revert to previous commit
git revert HEAD
git push origin main

# Vercel: Rollback via dashboard
# Go to Deployments > Find previous working deployment > Click "Promote to Production"

# Netlify: Rollback via dashboard
# Go to Deploys > Find previous working deploy > Click "Restore"
```

---

## Environment-Specific Configuration

### Staging (Optional)
Use a separate GitHub branch for staging:
```bash
git checkout -b staging
# Make changes
git push origin staging
# Deploy staging.nodalwireacademy.com from this branch
```

### Production
Main branch is production. All commits go live immediately.

---

## Support & Questions

**For deployment help:**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://pages.github.com

**For domain issues:**
Contact your DNS provider (GoDaddy, Namecheap, etc.)

**For form issues:**
FormSubmit.co Support: https://formsubmit.co
