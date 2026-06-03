# CLAUDE.md — NodalWire Academy Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## Project Overview

- **Live site:** https://www.nodalwireacademy.com
- **Purpose:** Education and knowledge platform of NodalWire LLC — practical training for network engineers
- **Parent brand:** NodalWire (nodalwire.com)
- **Audience:** Aspiring network engineers, career-switchers, telecom students, academic institutions

---

## Design Mandate

- Build **desktop and mobile simultaneously** — never defer mobile to a second pass
- Match brand character of nodalwire.com: technical credibility, engineering maturity, enterprise trust
- The Academy site has a **lighter, educational tone** — but the same brand rigor
- Avoid generic SaaS / bootcamp aesthetics

---

## Brand Assets

- **Always** use exact casing: `Brand_Assets/Logo/` (Linux server is case-sensitive)
- **Never** write `brand_assets/`, `Brand_assets/`, or any variant

| File | Usage |
|---|---|
| `Brand_Assets/Logo/fulllogo_transparent.png` | Nav and footer |
| `Brand_Assets/Logo/fulllogo.jpg` | OG image (`og:image`) |
| `Brand_Assets/Logo/icononly_transparent_nobuffer.png` | Favicon |

---

## Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

- **Inter only** — every element: headings, body, nav, buttons, labels, captions
- Weights: `300`, `400`, `500`, `600`, `700`, `800`
- **Never** use Lato, Roboto, Space Grotesk, or system fonts

---

## Canonical `<head>` (copy to every page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE — NodalWire Academy</title>
  <!-- ── SEO ── -->
  <!-- SEO block here -->
  <!-- ── /SEO ── -->
  <link rel="icon" type="image/png" href="Brand_Assets/Logo/icononly_transparent_nobuffer.png">
  <link rel="apple-touch-icon" href="Brand_Assets/Logo/icononly_transparent_nobuffer.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --brand:      #1D78C4;
      --brand-dark: #155a9a;
      --navy:       #060e1a;
      --muted:      #7a9bbf;
      --bright:     #eef4ff;
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--navy);
      color: #fff;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }
    /* Grain texture */
    body::after {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
      pointer-events: none; z-index: 9999;
    }
  </style>
```

---

## Nav

### Nav CSS (key values)

```css
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  height: 90px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 56px;
  background: rgba(6,14,26,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(29,120,196,0.16);
}
.nav-logo img { height: 78px; width: auto; filter: brightness(0) invert(1); }
.nav-links {
  display: flex; gap: 28px; list-style: none;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.nav-links a {
  font-weight: 500; font-size: 15px; letter-spacing: 0.01em;
  color: #fff; text-decoration: none; position: relative; transition: color 0.2s ease;
}
/* Underline on hover (non-dropdown links) */
.nav-links > li > a::after {
  content: ''; position: absolute; bottom: -3px; left: 0;
  width: 0; height: 1px; background: var(--brand);
  transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
}
.nav-links > li > a:hover::after { width: 100%; }
/* Dropdown caret — uses .caret span, not ::after */
.has-dropdown { position: relative; }
.has-dropdown > a::after { content: '' !important; position: static !important; width: auto !important; height: auto !important; background: none !important; }
.has-dropdown > a .caret { font-size: 10px; opacity: 0.6; margin-left: 2px; }
.nav-dropdown {
  position: absolute; top: calc(100% + 16px); left: 50%;
  transform: translateX(-50%) translateY(-8px);
  min-width: 260px; background: rgba(7,16,31,0.97);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(29,120,196,0.18); border-radius: 10px; padding: 8px 0;
  list-style: none; box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  opacity: 0; pointer-events: none;
  transition: opacity 0.2s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1); z-index: 600;
}
.has-dropdown:hover .nav-dropdown, .has-dropdown:focus-within .nav-dropdown {
  opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0);
}
.nav-dropdown a { display: block; font-size: 14px; font-weight: 500; color: rgba(238,244,255,0.82); text-decoration: none; padding: 10px 20px; transition: color 0.18s, background 0.18s; }
.nav-dropdown a::after { display: none !important; }
.nav-dropdown a:hover { color: #fff; background: rgba(29,120,196,0.12); }
.nav-dropdown::before { content: ''; position: absolute; top: -16px; left: 0; right: 0; height: 16px; }
.nav-dropdown li:not(:last-child) a { border-bottom: 1px solid rgba(255,255,255,0.05); }
.nav-cta {
  font-weight: 600; font-size: 13px; letter-spacing: 0.03em; padding: 9px 20px;
  border: 1px solid #0d449a; border-radius: 6px; color: #fff; text-decoration: none;
  background: linear-gradient(180deg, #3495e8 0%, #1568c0 55%, #0f4fa0 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 8px rgba(29,120,196,0.4);
  transition: filter 0.2s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.nav-cta:hover { filter: brightness(1.12); transform: translateY(-1px); }
```

### Nav HTML

```html
<nav class="nav">
  <a href="/" class="nav-logo" aria-label="NodalWire Academy home">
    <img src="Brand_Assets/Logo/fulllogo_transparent.png" alt="NodalWire Academy">
  </a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="#courses">Courses</a></li>
    <li class="has-dropdown">
      <a href="#">Learning Tracks <span class="caret">▾</span></a>
      <ul class="nav-dropdown">
        <li><a href="#">Microwave Networks</a></li>
        <li><a href="#">Optical Networks</a></li>
        <li><a href="#">Wi-Fi Networks</a></li>
        <li><a href="#">IoT Networks</a></li>
        <li><a href="#">GIS for Telecom</a></li>
        <li><a href="#">AI in Communication Networks</a></li>
        <li><a href="#">Network Automation</a></li>
        <li><a href="#">FTTH / PON Networks</a></li>
      </ul>
    </li>
    <li><a href="https://www.youtube.com/@nodalwire" target="_blank" rel="noopener">YouTube</a></li>
    <li><a href="#guest-lectures">Guest Lectures</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#footer-form" class="nav-cta">Contact Us</a>
  <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### Mobile Nav CSS + JS

```css
.nav-hamburger {
  display: none; flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 40px; height: 40px; background: none;
  border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; cursor: pointer; padding: 0;
}
.nav-hamburger span { display: block; width: 20px; height: 1.5px; background: #fff; border-radius: 2px; transition: transform 0.25s ease, opacity 0.2s ease; }
.nav-hamburger.active span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-hamburger.active span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav { padding: 0 20px !important; height: 68px !important; }
  .nav-logo img { height: 52px !important; }
  .nav-links {
    display: none !important; position: fixed !important;
    top: 68px !important; left: 0 !important; right: 0 !important;
    flex-direction: column !important; gap: 0 !important;
    background: rgba(6,14,26,0.98) !important; backdrop-filter: blur(20px) !important;
    padding: 8px 0 28px !important; border-bottom: 1px solid rgba(29,120,196,0.22) !important;
    z-index: 499 !important; transform: none !important;
  }
  .nav-links.mob-open { display: flex !important; }
  .nav-links > li > a { display: block !important; padding: 14px 24px !important; font-size: 16px !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
  .nav-cta { display: none !important; }
  .nav-hamburger { display: flex !important; }
  .nav-dropdown { position: static !important; opacity: 1 !important; pointer-events: auto !important; transform: none !important; box-shadow: none !important; background: rgba(255,255,255,0.04) !important; border: none !important; border-radius: 0 !important; padding: 4px 0 8px 20px !important; min-width: auto !important; display: none !important; }
  .nav-dropdown::before { display: none !important; }
  .has-dropdown.mob-open > .nav-dropdown { display: block !important; }
  .nav-dropdown li a { font-size: 14px !important; padding: 10px 16px !important; color: rgba(255,255,255,0.8) !important; border-bottom: none !important; }
  body { padding-top: 68px !important; }
}
```

```javascript
(function(){
  var btn = document.querySelector('.nav-hamburger');
  var menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('mob-open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('li:not(.has-dropdown) a').forEach(function(a){
    a.addEventListener('click', function(){ menu.classList.remove('mob-open'); btn.classList.remove('active'); btn.setAttribute('aria-expanded','false'); });
  });
  document.querySelectorAll('.has-dropdown').forEach(function(li){
    li.querySelector(':scope > a').addEventListener('click', function(e){
      if (window.innerWidth > 768) return;
      e.preventDefault();
      var wasOpen = li.classList.contains('mob-open');
      document.querySelectorAll('.has-dropdown').forEach(function(x){ x.classList.remove('mob-open'); });
      if (!wasOpen) li.classList.add('mob-open');
    });
  });
})();
```

---

## Hero

### Hero CSS

```css
.hero { height: 70vh; min-height: 700px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.hero-layout {
  position: relative; z-index: 2; flex: 1;
  display: grid; grid-template-columns: 42fr 58fr; padding-top: 90px;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 100% 70% at 70% 25%, rgba(29,120,196,0.13) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 0% 90%, rgba(29,120,196,0.07) 0%, transparent 60%),
    var(--navy);
}
.hero-grid {
  position: absolute; inset: 0; z-index: 1;
  background-image: radial-gradient(rgba(29,120,196,0.18) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.2) 65%, transparent 100%);
}
.hero-content {
  position: relative; display: flex; flex-direction: column; justify-content: center;
  padding: 32px 16px 48px 88px;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--brand); margin-bottom: 24px;
}
.hero-eyebrow::before { content: ''; display: block; width: 22px; height: 1.5px; background: var(--brand); }
.hero-h1 { font-size: clamp(28px,3.5vw,50px); font-weight: 800; line-height: 1.08; letter-spacing: -0.04em; color: var(--bright); margin-bottom: 20px; }
.hero-h1 em { font-style: normal; color: var(--brand); }
.hero-sub { font-size: 15px; font-weight: 400; line-height: 1.78; color: var(--muted); max-width: 510px; margin-bottom: 34px; }

/* Primary CTA — solid blue, no sheen (same gradient as btn-gloss-p) */
.hero-cta-primary {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 14px; padding: 13px 24px;
  background: linear-gradient(180deg, #3495e8 0%, #1568c0 55%, #0f4fa0 100%);
  color: #fff; border: 1px solid #0d449a; border-radius: 10px;
  text-decoration: none; cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.22), 0 4px 20px rgba(29,120,196,0.45), 0 1px 3px rgba(0,0,0,0.3);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s ease;
}
.hero-cta-primary:hover { transform: translateY(-2px); filter: brightness(1.1); }

/* Secondary CTA — white glass (unchanged) */
.hero-cta-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 14px; padding: 13px 22px;
  background: rgba(255,255,255,0.06); color: #fff;
  border: 1.5px solid rgba(255,255,255,0.2); border-radius: 8px; text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.hero-cta-secondary:hover { background: rgba(255,255,255,0.11); border-color: rgba(255,255,255,0.38); transform: translateY(-1px); }

/* Text link CTAs */
.hero-text-link { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 500; color: var(--muted); text-decoration: none; padding: 5px 8px; border-radius: 4px; transition: color 0.2s ease; }
.hero-text-link:hover { color: var(--bright); }

/* Mobile */
@media (max-width: 768px) {
  .hero { height: auto !important; min-height: auto !important; }
  .hero-layout { grid-template-columns: 1fr !important; padding-top: 68px !important; }
  .hero-content { padding: 36px 24px 48px !important; }
  .hero-h1 { font-size: clamp(26px,8vw,38px) !important; }
}
```

### Hero HTML pattern

```html
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-layout">
    <div class="hero-content">
      <div class="hero-eyebrow">EYEBROW TEXT</div>
      <h1 class="hero-h1">Headline with <em>accent</em> word</h1>
      <p class="hero-sub">Subheading text here.</p>
      <div class="hero-ctas">
        <div class="hero-cta-row">
          <a href="#programs" class="hero-cta-primary">Start Learning →</a>
          <a href="https://www.youtube.com/@nodalwire" target="_blank" class="hero-cta-secondary">YouTube Channel</a>
        </div>
        <div class="hero-links-row">
          <a href="https://www.nodalwire.com" target="_blank" class="hero-text-link">Visit NodalWire LLC →</a>
        </div>
      </div>
    </div>
    <!-- Right column: .hero-visual with animated SVG network diagrams (see index.html) -->
    <div class="hero-visual"><!-- SVG cycle --></div>
  </div>
</section>
```

### Hero Network Diagrams (right column)

8 animated SVGs cycling every 4.5s (FTTH/PON, Wi-Fi, Automation, IoT, Microwave, GIS, Optical/DWDM, AI). White/grey stroke palette, transparent bg. Full implementation in `index.html`.

---

## Content Section System

All content sections (sections 2–7 on homepage) use white backgrounds. Only nav, hero, and footer are dark.

### Shared container
```css
.si { max-width: 1160px; margin: 0 auto; padding: 0 40px; }
```

### Light section (white)
```css
.s-light { padding: 96px 0 100px; background: #ffffff; position: relative; }
.s-light + .s-light { border-top: 1px solid rgba(0,0,0,0.07); }
```

### Dark section (for future use — not used on homepage content sections)
```css
.s-dark {
  padding: 96px 0 100px; position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 20% 50%, rgba(29,120,196,0.12) 0%, transparent 65%),
    radial-gradient(ellipse 60% 50% at 80% 30%, rgba(29,120,196,0.08) 0%, transparent 60%),
    linear-gradient(158deg, #07101f 0%, #0d2340 55%, #122e52 100%);
}
.s-dark::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(rgba(29,120,196,0.14) 1px, transparent 1px);
  background-size: 28px 28px; opacity: 0.35;
}
.s-dark .si { position: relative; z-index: 1; }
```

### Eyebrows
```css
.ew-l, .ew-d {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--brand); margin-bottom: 20px;
}
.ew-l::before, .ew-d::before { content: ''; display: block; width: 22px; height: 1.5px; background: var(--brand); flex-shrink: 0; }
```

### Section headings & subtexts
```css
.sh2-l { font-size: clamp(26px,3vw,40px); font-weight: 700; line-height: 1.12; letter-spacing: -0.03em; color: #0d1a2e; margin-bottom: 16px; }
.sh2-d { font-size: clamp(26px,3vw,40px); font-weight: 700; line-height: 1.12; letter-spacing: -0.03em; color: var(--bright); margin-bottom: 16px; }
.ssub-l { font-size: 15.5px; line-height: 1.76; color: #486080; max-width: 720px; margin-bottom: 48px; }
.ssub-d { font-size: 15.5px; line-height: 1.76; color: var(--muted); max-width: 720px; margin-bottom: 48px; }
/* When dark-class elements appear inside .s-light (e.g. track cards on white bg): */
.s-light .sh2-d { color: #0d1a2e; }
.s-light .ssub-d { color: #486080; }
.s-light .ch-d { color: #0d1a2e; }
.s-light .cp-d { color: #486080; }
.s-light .cd { background: #fff; border: 1px solid rgba(0,0,0,0.09); backdrop-filter: none; box-shadow: 0 1px 6px rgba(0,0,0,0.06); }
.s-light .cexplore { border-top: 1px solid rgba(0,0,0,0.08); color: #7a8a9a; }
.s-light .cexplore strong { color: #486080; }
.s-light .lec-note { color: rgba(72,96,128,0.72); }
```

### Card grids
```css
.cg3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
.cg4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
.cg6 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
/* Responsive: .cg4 → 2-col at 960px, 1-col at 768px; .cg3/.cg6 → 1-col at 768px */
```

### Cards
```css
/* Light card (white sections) */
.cl { background: #fff; border: 1px solid rgba(0,0,0,0.09); border-radius: 12px; padding: 32px; transition: box-shadow 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1); }
.cl:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.1); transform: translateY(-2px); }

/* Glass card (dark sections) */
.cd { background: rgba(255,255,255,0.055); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.09); border-radius: 16px; padding: 26px 28px; box-shadow: 0 4px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07); }
.cd:hover { border-color: rgba(29,120,196,0.3); }

/* Card icon */
.cicon-l { width: 38px; height: 38px; border-radius: 9px; background: rgba(29,120,196,0.08); border: 1px solid rgba(29,120,196,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: var(--brand); }

/* Tags, headings, body */
.ctag-l { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--brand); background: rgba(29,120,196,0.08); border-radius: 4px; padding: 3px 8px; margin-bottom: 12px; }
.ctag   { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--brand); background: rgba(29,120,196,0.1); border-radius: 4px; padding: 3px 8px; margin-bottom: 12px; }
.ch-l { font-size: 16.5px; font-weight: 700; letter-spacing: -0.02em; color: #0d1a2e; margin-bottom: 10px; line-height: 1.3; }
.ch-d { font-size: 15px; font-weight: 700; letter-spacing: -0.02em; color: var(--bright); margin-bottom: 8px; line-height: 1.32; }
.cp-l { font-size: 14px; line-height: 1.72; color: #486080; }
.cp-d { font-size: 13.5px; line-height: 1.7; color: var(--muted); }

/* Explore footer inside track cards */
.cexplore { margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.07); font-size: 12px; color: rgba(122,155,191,0.7); line-height: 1.58; }
.cexplore strong { color: rgba(200,218,238,0.82); font-weight: 600; }
```

### Button System — Site-Wide Rule

> **Every button on every page uses the iOS-style glossy system. No exceptions.**
> - Light sections (`.s-light`, white bg) → `btn-gloss-p` (primary) / `btn-gloss-s` (secondary)
> - Dark sections / hero → `btn-gloss-dark-p` (primary) / `btn-gloss-dark-s` (secondary)
> - `btn-p`, `btn-s`, `btn-outline` are removed — do not use on any page
> - HTML: always wrap button text in `<span>` so it sits above the `::before` gloss sheen
> - YouTube SVG icons: always use `style="color:#FF0000"` for the YouTube logo color

#### iOS Gloss — Light sections

```css
/* Primary — solid blue, no gloss sheen */
.btn-gloss-p {
  display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px;
  padding: 13px 26px; color: #fff; border-radius: 10px;
  text-decoration: none; cursor: pointer;
  background: linear-gradient(180deg, #3495e8 0%, #1568c0 55%, #0f4fa0 100%);
  border: 1px solid #0d449a;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    inset 0 -2px 4px rgba(0,0,0,0.22),
    0 4px 18px rgba(29,120,196,0.52),
    0 1px 3px rgba(0,0,0,0.22);
  transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s ease;
}
.btn-gloss-p:hover { transform: translateY(-2px); filter: brightness(1.1); }

/* Secondary — light blue, no sheen */
.btn-gloss-s {
  display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px;
  padding: 12.5px 24px; color: #1260b8; border-radius: 10px;
  text-decoration: none; cursor: pointer;
  background: linear-gradient(180deg, #e4f0fb 0%, #b8d6f5 55%, #a5c8f0 100%);
  border: 1px solid rgba(29,120,196,0.5);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -2px 4px rgba(29,120,196,0.15),
    0 2px 12px rgba(29,120,196,0.2),
    0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s ease;
}
.btn-gloss-s:hover { transform: translateY(-2px); filter: brightness(0.96); }
```

#### iOS Gloss — Dark sections / hero

Matches the hero section buttons exactly. Primary = brand blue glass. Secondary = white glass.

```css
/* Primary — solid blue, no sheen (same as btn-gloss-p / hero-cta-primary) */
.btn-gloss-dark-p {
  display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px;
  padding: 13px 26px; color: #fff; border-radius: 10px;
  text-decoration: none; cursor: pointer;
  background: linear-gradient(180deg, #3495e8 0%, #1568c0 55%, #0f4fa0 100%);
  border: 1px solid #0d449a;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.22), 0 4px 18px rgba(29,120,196,0.45), 0 1px 3px rgba(0,0,0,0.22);
  transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s ease;
}
.btn-gloss-dark-p:hover { transform: translateY(-2px); filter: brightness(1.12); }

/* Secondary — white glass (matches hero-cta-secondary) */
.btn-gloss-dark-s {
  display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px;
  padding: 13px 22px; color: #fff; border-radius: 8px;
  text-decoration: none; cursor: pointer;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.2);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.btn-gloss-dark-s:hover { background: rgba(255,255,255,0.11); border-color: rgba(255,255,255,0.38); transform: translateY(-1px); }
```

#### HTML usage pattern (all gloss buttons)

```html
<a href="#" class="btn-gloss-p"><span>Button Label</span>
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</a>
```

> `<span>` around label text is **required** — the `::before` gloss overlay uses `z-index: 1` and text nodes (non-positioned) sit below it without the wrapper.

---

## Section Background System

| Area | Background | Text |
|---|---|---|
| Nav | `rgba(6,14,26,0.85)` + blur (fixed) | White |
| Hero | Dark navy + radial gradients + dot grid | `var(--bright)` / `var(--muted)` |
| Content sections 2–6 | `#ffffff` | `#0d1a2e` / `#486080` |
| Footer | `#060e1a` (always solid, never transparent) | White |

---

## Homepage Structure (index.html)

| # | Section | Class | Background | Content |
|---|---|---|---|---|
| 1 | Hero | `.hero` | Dark navy | Headline, 4 CTAs, SVG network diagrams |
| 2 | About | `.s-light #about` | White | "Why This Website Exists" — 4 paragraphs, no cards |
| 3 | Learning Tracks | `.s-light #courses` | White | 8 track cards in `.cg4` grid |
| 4 | Free Learning | `.s-light #resources` | White | YouTube CTA + Study Materials |
| 5 | Courses | `.s-light #programs` | White | 6 course cards in `.cg6` grid |
| 6 | Guest Lectures | `.s-light #guest-lectures` | White | Text + lec-note + 2 glossy CTAs |

---

## Footer

### Footer CSS

```css
.footer-wrap { max-width: 1200px; margin: 0 auto; padding: 48px 40px 0; }
.footer-top { display: grid; grid-template-columns: 1.4fr 1.1fr 1fr 1fr; gap: 48px; padding-bottom: 36px; }
.footer-brand-logo { height: 72px; filter: brightness(0) invert(1); display: block; margin-bottom: 8px; }
.footer-tagline { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; margin-bottom: 14px; }
.footer-desc { font-size: 13.5px; line-height: 1.65; color: rgba(255,255,255,0.7); margin-bottom: 20px; max-width: 260px; }
.footer-social { display: flex; gap: 14px; }
.footer-social a { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.3); color: #fff; text-decoration: none; transition: border-color 0.2s, background 0.2s; }
.footer-social a:hover { border-color: #1D78C4; background: rgba(29,120,196,0.15); }
.footer-col-title { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #eef4ff; margin-bottom: 16px; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a { font-size: 13.5px; color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: #fff; }
.footer-contact-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
.footer-contact-icon { flex-shrink: 0; width: 16px; height: 16px; margin-top: 1px; color: #1D78C4; }
.footer-contact-text { font-size: 13.5px; color: rgba(255,255,255,0.7); line-height: 1.5; }
.footer-contact-text a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
.footer-contact-text a:hover { color: #fff; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding: 18px 40px; max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.footer-copy { font-size: 12.5px; color: rgba(255,255,255,0.5); }
.footer-legal { display: flex; gap: 20px; list-style: none; }
.footer-legal a { font-size: 12.5px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
.footer-legal a:hover { color: rgba(255,255,255,0.8); }
.footer-cta-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #fff; padding: 11px 18px; background: linear-gradient(135deg, rgba(29,120,196,0.55) 0%, rgba(14,60,120,0.7) 100%); border: 1px solid rgba(29,120,196,0.45); border-radius: 8px; backdrop-filter: blur(10px); text-decoration: none; margin-bottom: 16px; transition: background 0.22s ease, transform 0.18s cubic-bezier(0.34,1.56,0.64,1); }
.footer-cta-btn:hover { background: linear-gradient(135deg, rgba(29,120,196,0.75) 0%, rgba(18,70,140,0.88) 100%); transform: translateY(-1px); }
@media (max-width: 900px) { .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; } }
@media (max-width: 560px) { .footer-top { grid-template-columns: 1fr; gap: 28px; } .footer-bottom { flex-direction: column; align-items: flex-start; } }

/* Contact form (compact, inside Contact column) */
.ff-form { display: flex; flex-direction: column; gap: 10px; }
.ff-input, .ff-select, .ff-textarea {
  font-family: 'Inter', sans-serif; font-size: 14px; color: #e5e7eb;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px; padding: 10px 13px; outline: none; width: 100%;
  transition: border-color 0.22s ease, box-shadow 0.22s ease;
}
.ff-input:focus, .ff-select:focus, .ff-textarea:focus {
  border-color: #1D78C4; box-shadow: 0 0 0 3px rgba(29,120,196,0.14);
}
/* Submit button: same CSS as .btn-gloss-p but width: 100% */
```

### Footer HTML (4 columns: Brand / Learning Tracks / Quick Links / Contact)

```html
<footer id="footer" style="background: #060e1a; border-top: 1px solid rgba(255,255,255,0.12);">
  <div class="footer-wrap">
    <div class="footer-top">
      <!-- Brand -->
      <div>
        <img src="Brand_Assets/Logo/fulllogo_transparent.png" alt="NodalWire Academy" class="footer-brand-logo">
        <p class="footer-tagline">Network Engineering Education</p>
        <p class="footer-desc">The education and knowledge platform of NodalWire LLC — making real-world network engineering accessible.</p>
        <div class="footer-social"><!-- LinkedIn + YouTube icons --></div>
      </div>
      <!-- Learning Tracks -->
      <div>
        <p class="footer-col-title">Learning Tracks</p>
        <ul class="footer-links">
          <li><a href="#">Microwave Networks</a></li>
          <li><a href="#">Optical Networks</a></li>
          <li><a href="#">Wi-Fi Networks</a></li>
          <li><a href="#">IoT Networks</a></li>
          <li><a href="#">GIS for Telecom</a></li>
          <li><a href="#">AI in Comms Networks</a></li>
          <li><a href="#">Network Automation</a></li>
          <li><a href="#">FTTH / PON Networks</a></li>
        </ul>
      </div>
      <!-- Quick Links -->
      <div>
        <p class="footer-col-title">Quick Links</p>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#guest-lectures">Guest Lectures</a></li>
          <li><a href="https://www.youtube.com/@nodalwire" target="_blank">YouTube</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.nodalwire.com" target="_blank">NodalWire LLC</a></li>
        </ul>
      </div>
      <!-- Contact -->
      <div>
        <p class="footer-col-title">Contact</p>
        <div class="footer-contact-item"><!-- email icon + contact@nodalwire.com --></div>
        <!-- Compact contact form with id="footer-form" (name, email, role select, message, submit) -->
        <form id="footer-form" class="ff-form">...</form>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 NodalWire LLC. All rights reserved.</p>
    <ul class="footer-legal"><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul>
  </div>
</footer>
```

---

## Animation Rules

- Only animate `transform` and `opacity` — **never `transition-all`**
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Layout easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Stagger reveals with `animation-delay`

---

## SEO Block Pattern

Every page — between `<!-- ── SEO ── -->` and `<!-- ── /SEO ── -->`:

```html
<meta name="description" content="UNIQUE 150-160 CHAR DESCRIPTION WITH TELECOM KEYWORDS">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.nodalwireacademy.com/PAGE.html">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.nodalwireacademy.com/PAGE.html">
<meta property="og:title" content="PAGE TITLE — NodalWire Academy">
<meta property="og:description" content="SAME AS META DESCRIPTION">
<meta property="og:image" content="https://www.nodalwireacademy.com/Brand_Assets/Logo/fulllogo.jpg">
<meta property="og:site_name" content="NodalWire Academy">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="PAGE TITLE — NodalWire Academy">
<meta name="twitter:description" content="SAME AS META DESCRIPTION">
<meta name="twitter:image" content="https://www.nodalwireacademy.com/Brand_Assets/Logo/fulllogo.jpg">
<meta name="author" content="NodalWire Academy">
<meta name="geo.region" content="US-TX">
<meta name="geo.placename" content="Plano, Texas">
<meta name="geo.position" content="33.0198;-96.6989">
<meta name="ICBM" content="33.0198, -96.6989">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "EducationalOrganization", "@id": "https://www.nodalwireacademy.com/#org", "name": "NodalWire Academy", "url": "https://www.nodalwireacademy.com", "logo": "https://www.nodalwireacademy.com/Brand_Assets/Logo/fulllogo_transparent.png", "address": { "@type": "PostalAddress", "addressLocality": "Plano", "addressRegion": "TX", "addressCountry": "US" } },
    { "@type": "WebSite", "@id": "https://www.nodalwireacademy.com/#website", "url": "https://www.nodalwireacademy.com", "name": "NodalWire Academy", "publisher": { "@id": "https://www.nodalwireacademy.com/#org" } }
  ]
}
</script>
```

For program pages: replace `WebSite` with `Course` + `BreadcrumbList` schema.

**SEO keyword focus:** Network engineering training, telecom training, FTTH training, wireless network training, IP/MPLS training, GIS for telecom, network engineering bootcamp, Plano TX, live online telecom course.

---

## Favicon (required on every page)

```html
<link rel="icon" type="image/png" href="Brand_Assets/Logo/icononly_transparent_nobuffer.png">
<link rel="apple-touch-icon" href="Brand_Assets/Logo/icononly_transparent_nobuffer.png">
```

---

## Output Defaults

- Single `*.html` file per page, all styles inline in `<style>` tags
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive always

---

## Local Server & Screenshot Workflow

- **Always serve on localhost** — never screenshot a `file:///` URL
- Start: `node serve.mjs` → `http://localhost:3000`

---

## Project File Inventory

| File | Purpose |
|---|---|
| `index.html` | Homepage — canonical reference for all design patterns |
| `font-meta.json` | Authoritative font metadata |
| `Brand_Assets/Logo/` | All logo and favicon files |
| `serve.mjs` | Dev server — local only, do not deploy |
| `screenshot.mjs` | Puppeteer screenshots — local only, do not deploy |
| `sitemap.xml` | XML sitemap |
| `robots.txt` | Crawler rules |
| `default.php` | Server default — do not modify |

**Program pages (to be built):** fiber.html, wireless.html, ipmpls.html, iot.html, gis.html, microwave.html, ai.html, automation.html

---

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette. Use `#1D78C4` and derive tints
- **Shadows:** Never flat `shadow-md`. Use layered, color-tinted shadows
- **Typography:** Inter only. Tight tracking (`-0.03em`) on large headings, `1.7` line-height on body
- **Backgrounds:** Layer multiple radial gradients for dark sections. Always add dot-grid texture
- **Depth:** Every surface has layering — base → elevated → floating. Nothing sits flat
- **Spacing:** Consistent tokens, not arbitrary Tailwind steps

---

## Contact Modal

All CTA buttons that previously linked to `#contact` or `#footer-form` now open a shared popup modal.

### Trigger pattern (all pages)

```html
<a href="#" class="nav-cta" data-modal
   data-title="Request Course Details"
   data-subject="Course Name — Course Inquiry">Button Label</a>
```

- `data-modal` — required; marks the element as a modal trigger
- `data-title` — sets the modal heading (e.g. "Request GIS Course Details")
- `data-subject` — pre-fills the hidden `_subject` field sent via FormSubmit

### Modal z-index

The modal overlay uses `z-index: 10000` to sit above `body::after` (grain texture at `z-index: 9999`).

### Modal CSS classes

`.modal-overlay` · `.modal-panel` · `.modal-close` · `.modal-ew` · `.modal-h` · `.modal-sub`

The modal form reuses existing `.ff-form`, `.ff-field`, `.ff-input`, `.ff-select`, `.ff-textarea`, `.ff-btn`, `.ff-row`, `.ff-label`, `.ff-note` classes.

### Pages using the modal

| Page | Modal trigger count |
|---|---|
| `index.html` | 2 (nav CTA + guest lecture CTA) |
| `gis.html` | 6 (nav, hero ×2, tuition ×2, footer) |
| `fiber.html` | 6 |
| `wireless.html` | 6 |
| `ipmpls.html` | 6 |

The modal block (CSS + HTML + JS) is injected just before `</body>` on every page.

---

## Hard Rules

- Build desktop and mobile simultaneously — never one without the other
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not use any font other than Inter (Lato is the parent site's font — not here)
- Footer base is always `#060e1a` — layered with radial gradients and dot-grid `::before` for depth; never transparent
- Do not skip the SEO block on any page
- Do not add features or sections not requested
- Content sections background is `#ffffff` — only nav, hero, footer are dark navy
- Hero right column SVG diagrams: white/grey stroke palette, transparent background
