# NodalWire Academy — Website

Educational platform and knowledge base for NodalWire LLC — practical network engineering training with live courses, free resources, and university guest lectures.

**Live Site:** https://www.nodalwireacademy.com

---

## Project Structure

```
├── Brand_Assets/          # Logo, favicon, brand images
│   └── Logo/
│       ├── fulllogo_transparent.png    (nav/footer)
│       ├── fulllogo.jpg                (og:image)
│       └── icononly_transparent_nobuffer.png (favicon)
├── Images/                # Course and content images
│   ├── Guest Lectures/    (invitation, event materials, press)
│   └── [other sections]
├── index.html             # Homepage (canonical reference)
├── guestlecture.html      # Academic outreach & guest lectures
├── wireless.html          # Wireless Network Engineering course
├── fiber.html             # Optical Network Engineering course
├── ipmpls.html            # IP & Network Infrastructure course
├── gis.html               # GIS for Telecom course
├── iot.html               # IoT & Smart Infrastructure (in development)
├── robots.txt             # SEO crawler rules
├── sitemap.xml            # XML sitemap for search engines
├── font-meta.json         # Font configuration metadata
└── README.md              # This file
```

---

## Technology Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — inline styles, responsive media queries
- **Tailwind CSS** — via CDN (no build step required)
- **JavaScript (ES6)** — vanilla JS, no frameworks
- **Fonts** — Inter (Google Fonts)

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#1D78C4` | Primary CTA buttons, links, accents |
| `--brand-dark` | `#155a9a` | Hover states |
| `--navy` | `#060e1a` | Dark backgrounds (nav, hero, footer) |
| `--muted` | `#7a9bbf` | Secondary text, muted labels |
| `--bright` | `#eef4ff` | Light text on dark backgrounds |

### Typography

- **Font:** Inter (weights: 300, 400, 500, 600, 700, 800)
- **Body:** 14–15.5px, line-height 1.6–1.78
- **Headings:** Clamp sizing (responsive), -0.03em letter-spacing
- **Never use:** Lato, Roboto, system fonts

### Components

- **iOS Gloss Buttons** — `.btn-gloss-p` (primary blue), `.btn-gloss-s` (light blue)
- **Cards** — `.cl` (light bg), `.cd` (glass dark bg)
- **Sections** — `.s-light` (white), `.s-dark` (dark navy with gradients)
- **Form Elements** — `.ff-input`, `.ff-select`, `.ff-textarea`, `.ff-btn`

---

## Key Pages

### Homepage (`index.html`)
1. **Nav** — Fixed, dark, blurred backdrop
2. **Hero** — Dark navy, eyebrow + H1 + sub + facts strip + 2 CTAs + SVG network diagrams
3. **About** — White section, 4 paragraphs on platform purpose
4. **Learning Tracks** — 8 cards in 4-column grid
5. **Free Learning** — YouTube CTA + study materials
6. **Courses** — 6 course cards (Wireless, Fiber, IP/MPLS, GIS, IoT, Automation)
7. **Guest Lectures** — University outreach with request + view past lectures CTA
8. **Contact** — Form modal system
9. **Footer** — Dark, 4-column layout

### Course Pages (`wireless.html`, `fiber.html`, `ipmpls.html`, `gis.html`)
1. **Hero** — Course title, facts strip, 2 CTAs
2. **Who This Course Is For** — 2×2 grid + split panels (industries/roles)
3. **What You Will Learn** — 5 numbered outcomes with skill chips
4. **Module Explorer** — Tabbed accordion with View Details button
5. **Tuition** — 3-column pricing panel (student/professional tiers)
6. **Contact** — Form section
7. **Footer**

### Guest Lectures (`guestlecture.html`)
1. **Hero** — Academic outreach intro, 5 institutions, 6 engagements
2. **Academic Engagement Summary** — White table with clickable institution links
3. **Invited Lectures & Academic Engagements** — Light section with 5 detailed cards
   - Institution name + department
   - Structured fields (event title, date, mode, role, audience, representatives)
   - Click-to-enlarge image lightbox
   - Image captions in dark navy, bold, uppercase
4. **Contact** — Invite form
5. **Footer**

---

## Development Workflow

### Local Server (Development)

```bash
node serve.mjs
# Opens http://localhost:3000
```

### Screenshots (QA)

```bash
node screenshot.mjs http://localhost:3000/index.html
# Saves full-page screenshot to Temp_Screenshots/
```

### Mobile-First Responsive Design

- **Desktop:** Full width, 1160px container
- **Tablet (960px):** 2-column grids collapse to stacked
- **Mobile (768px):** 1-column, hamburger nav, optimized spacing
- **Small Mobile (560px):** Footer 1-column

---

## SEO & Performance

### SEO Pattern (Every Page)

Every page includes:
- Unique `<title>` ending with " — NodalWire Academy"
- Meta description (150–160 chars) with telecom keywords
- OG tags (og:title, og:description, og:image, og:url)
- Twitter card tags
- Canonical URL
- JSON-LD schema (EducationalOrganization + Course + BreadcrumbList)
- Favicon + apple-touch-icon

### Performance Optimizations

- **No external stylesheets** — CSS inlined in `<style>`
- **No render-blocking resources** — Tailwind via CDN, fonts preconnected
- **Smooth scrolling** — `html { scroll-behavior: smooth; }`
- **Hardware acceleration** — CSS transforms only (no layout thrashing)
- **Grain texture** — Fixed SVG overlay at z-index 9999, pointer-events: none

---

## Contact Modal System

All CTA buttons (`data-modal` attribute) trigger a shared popup:

```html
<a href="#" class="btn-gloss-p" data-modal 
   data-title="Request Course Details"
   data-subject="Course Inquiry — Topic">
  Button Label
</a>
```

The modal:
- Uses FormSubmit.co for email delivery
- Centered, scalable 520px max-width
- Closes on Escape, outside click, or success
- Auto-focuses first input field

---

## Navigation Structure

### Main Nav (Desktop)
- Home
- Courses (#programs)
- Learning Tracks (dropdown: 8 options)
- YouTube (external)
- Guest Lectures
- About Us (#about)
- Contact (#contact)
- **CTA Button:** Invite Us (modal)

### Mobile Nav
- Hamburger menu (3-line icon)
- Same links, stacked vertically
- Dropdown menus expand inline
- CTA button hidden (use contact form instead)

---

## Build & Deployment

### No Build Step Required

This is a static HTML site — all files are production-ready. Simply:

```bash
git clone https://github.com/nodalwire/academy-website.git
cd academy-website
# Deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)
```

### Production Checklist

- [ ] All external image paths verified
- [ ] Links tested (internal + external)
- [ ] Mobile screenshot at 375px, 768px, 1200px
- [ ] Form submission tested
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] SEO tags complete (title, description, og:image, schema)

---

## Maintainer Notes

### Common Edits

**Change a course title:**
1. Update `<title>` tag
2. Update hero H1
3. Update og:title, og:description
4. Update Course schema in JSON-LD
5. Update BreadcrumbList if needed

**Add a new learning track:**
1. Add card to Section 3 (Learning Tracks grid on index.html)
2. Add link to nav dropdown
3. Add link to footer Learning Tracks column

**Update guest lecture data:**
1. Edit the Academic Engagement Summary table (rows)
2. Edit matching `.engagement-card` with id matching summary link
3. Update hero facts strip if institution/engagement count changes

### Typography Hierarchy

- **H1 (hero):** `clamp(32px, 4.5vw, 56px)`, weight 800, -0.04em tracking
- **H2 (section):** `clamp(24px, 3vw, 38px)`, weight 700, -0.03em tracking
- **Body:** 14–15.5px, weight 400, line-height 1.6–1.78
- **Labels:** 10–11px, weight 600–700, 0.1em tracking, uppercase

### Animation Rules

- Only animate `transform` and `opacity`
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Layout easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Stagger reveals with `animation-delay`
- **Never use:** `transition-all`

---

## File Sizes & Performance

| File | Size | Type |
|------|------|------|
| index.html | ~89 KB | Main homepage |
| wireless.html | ~104 KB | Course page (largest) |
| fiber.html | ~99 KB | Course page |
| ipmpls.html | ~90 KB | Course page |
| gis.html | ~94 KB | Course page |
| guestlecture.html | ~62 KB | Guest lectures |
| iot.html | ~25 KB | Course stub (in development) |

All HTML files are minifiable; currently uncompressed for ease of maintenance.

---

## License

© 2026 NodalWire LLC. All rights reserved.

---

## Contact

- **Email:** contact@nodalwire.com
- **Website:** https://www.nodalwire.com
- **Academy:** https://www.nodalwireacademy.com
