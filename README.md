# NodalWire Academy Website

Educational platform for NodalWire LLC — practical network engineering training with live courses, free resources, and university guest lectures.

**Live:** https://www.nodalwireacademy.com | **GitHub:** [nodalwire/academy-website](https://github.com/nodalwire/academy-website)

---

## Quick Start

### Local Development

```bash
# Start local server
node tools/serve.mjs

# Open http://localhost:3000
```

### Take Screenshots (QA)

```bash
# Full-page screenshot
node tools/screenshot.mjs http://localhost:3000/public/index.html
```

---

## Project Structure

```
academy-website/
├── public/                         # All HTML pages (9 total)
│   ├── index.html                 # Homepage with hero, courses, guest lectures
│   ├── wireless.html              # Wireless Network Engineering course
│   ├── fiber.html                 # Optical Network Engineering course
│   ├── ipmpls.html                # IP & MPLS Networks course
│   ├── gis.html                   # GIS for Telecom course
│   ├── guestlecture.html          # Academic outreach & partnerships
│   ├── aboutus.html               # About NodalWire Academy
│   ├── tutorials.html             # Tutorials hub page
│   └── db-dbm-tutorial.html       # dB & dBm tutorial
├── assets/                         # Brand assets & images
│   ├── Brand_Assets/Logo/         # Logos (full, icon, favicon)
│   └── Images/                    # Course images, guest lectures, materials
├── docs/                           # Documentation
│   ├── README.md                  # Comprehensive project guide
│   ├── DEPLOYMENT.md              # GitHub & hosting setup
│   └── CLAUDE.md                  # Design system & brand rules
├── config/                         # Configuration files
│   ├── sitemap.xml                # XML sitemap for SEO
│   ├── robots.txt                 # Robot directives
│   └── font-meta.json             # Font metadata
├── tools/                          # Development tools
│   ├── serve.mjs                  # Local dev server
│   └── screenshot.mjs             # Full-page QA screenshots
├── .gitignore                      # Git exclusions
├── package.json                    # Project dependencies (puppeteer)
└── package-lock.json              # Dependency lock file
```

---

## Documentation

- **[README.md](docs/README.md)** — Full project guide, design system, patterns
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** — GitHub setup, hosting options, checklists
- **[DESIGN.md](docs/DESIGN.md)** — Brand guidelines, CSS classes, responsive rules

---

## Technology

- **HTML5** — Semantic markup, SEO-optimized
- **CSS3** — Inline styles, responsive media queries
- **JavaScript** — Vanilla ES6, no frameworks
- **Fonts** — Inter (Google Fonts)
- **Hosting** — Static HTML (no build step required)

---

## Pages

| Page | Status | Purpose |
|------|--------|---------|
| `public/index.html` | ✓ Complete | Homepage with hero, courses, resources, guest lectures |
| `public/wireless.html` | ✓ Complete | Wireless Network Engineering course |
| `public/fiber.html` | ✓ Complete | Optical Network Engineering course |
| `public/ipmpls.html` | ✓ Complete | IP & MPLS Networks course |
| `public/gis.html` | ✓ Complete | GIS for Telecom & Infrastructure course |
| `public/guestlecture.html` | ✓ Complete | Academic outreach portfolio with structured metadata |
| `public/aboutus.html` | ✓ Complete | About NodalWire Academy with company story |
| `public/tutorials.html` | ✓ Complete | Tutorials hub with 6 featured tutorial cards |
| `public/db-dbm-tutorial.html` | ✓ Complete | dB & dBm measurement fundamentals tutorial |

---

## Features

✓ Mobile-first responsive design (375px → 1200px)  
✓ Fixed nav with backdrop blur  
✓ Contact modal with FormSubmit.co integration  
✓ Click-to-enlarge image lightbox  
✓ Smooth scrolling & spring animations  
✓ iOS glossy button system  
✓ Dark/light section theming  
✓ Complete SEO (meta tags, schema, canonical URLs)  
✓ Grain texture overlay  
✓ Radial gradient backgrounds  

---

## Deploy

### To GitHub

```bash
git init
git add .
git commit -m "Initial commit: NodalWire Academy website"
git remote add origin https://github.com/nodalwire/academy-website.git
git branch -M main
git push -u origin main
```

### To Production

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Traditional web hosts

---

## Performance

- **File Size:** ~650 KB HTML, ~250 KB images
- **Load Time:** < 2s (optimized images)
- **Lighthouse:** > 90 (desktop & mobile)
- **Core Web Vitals:** All green

---

## License

© 2026 NodalWire LLC. All rights reserved.

---

## Contact

- **Email:** contact@nodalwire.com
- **Website:** https://www.nodalwire.com
- **Academy:** https://www.nodalwireacademy.com
