# GitHub Setup Guide

Complete checklist to push NodalWire Academy website to GitHub.

---

## Prerequisites

- GitHub account
- Git installed locally (`git --version`)
- Repository created on GitHub (nodalwire/academy-website)

---

## Step 1: Initialize Local Repository

```bash
cd /path/to/Academy_website

# Initialize git
git init

# Add all files (respects .gitignore)
git add .

# Verify what will be committed
git status

# Create first commit
git commit -m "Initial commit: NodalWire Academy website

- 9 complete pages (index, courses, tutorials, aboutus, guestlecture)
- Standardized hero sections with consistent gradients
- Fixed navigation with dropdowns
- Contact modal with FormSubmit.co integration
- Fully responsive design (mobile-first)
- Complete SEO setup (meta tags, schema, sitemap)
- Dark/light theme sections
- All assets organized and optimized"
```

---

## Step 2: Connect to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/nodalwire/academy-website.git

# Verify remote
git remote -v

# Rename branch to main (GitHub default)
git branch -M main
```

---

## Step 3: Push to GitHub

```bash
# Push to GitHub
git push -u origin main

# Verify push succeeded
git log --oneline -5
```

---

## Verify Structure Before Push

✓ Folder structure is clean:
- `public/` contains all 9 .html files
- `assets/` has Brand_Assets and Images folders
- `config/` has sitemap.xml, robots.txt, font-meta.json
- `docs/` has README.md, DEPLOYMENT.md, CLAUDE.md
- `tools/` has serve.mjs, screenshot.mjs
- Root has package.json, .gitignore, README.md

✓ .gitignore excludes:
- node_modules/
- package-lock.json
- .DS_Store
- .env files
- IDE files (.vscode, .idea)
- Temporary files (*.tmp, *.log)

✓ No sensitive files committed:
- No .env with credentials
- No API keys
- No private keys

---

## Post-Push: GitHub Settings

Once pushed to GitHub:

1. **Add Description**
   - "Educational platform for network engineering training"

2. **Add Topics**
   - `education`, `networking`, `telecommunications`, `courses`, `website`

3. **Enable Pages** (if needed)
   - GitHub Pages → Deploy from main branch
   - Custom domain: www.nodalwireacademy.com (if using)

4. **Add Collaborators**
   - Settings → Collaborators → Add team members

5. **Branch Protection** (optional)
   - Settings → Branches → Protect main branch
   - Require pull request reviews before merge

---

## Version Control Workflow Going Forward

### Making Changes Locally

```bash
# Create feature branch
git checkout -b feature/page-updates

# Make changes to files
# ...

# Stage changes
git add public/index.html docs/README.md

# Commit
git commit -m "Update homepage hero section and documentation"

# Push to GitHub
git push -u origin feature/page-updates

# Create Pull Request on GitHub
# Review → Merge to main
```

### Keep Local Updated

```bash
# Fetch latest from GitHub
git fetch origin

# Pull changes
git pull origin main
```

---

## Deployment Options

After pushing to GitHub:

### Option 1: Vercel (Recommended)
- Connect GitHub repo to Vercel
- Auto-deploy on every push to main
- Free tier available
- [Setup Guide](https://vercel.com/docs/concepts/deployments/git)

### Option 2: Netlify
- Connect GitHub repo to Netlify
- Auto-deploy with custom domain
- Free tier available
- [Setup Guide](https://www.netlify.com/blog/2016/9/29/a-step-by-step-guide-deploying-on-netlify/)

### Option 3: GitHub Pages
- Settings → Pages → Deploy from main
- Free, no extra setup needed
- URL: https://nodalwire.github.io/academy-website

### Option 4: Traditional Hosting
- Use SFTP or Git hooks to auto-deploy
- See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for details

---

## Troubleshooting

### "Everything up-to-date"
```bash
# Verify branch is correct
git branch -v

# Check remote is set
git remote -v

# Commit and push again if needed
git status
```

### "Repository not found"
- Verify GitHub repo URL is correct
- Check GitHub account has access
- Verify SSH keys are configured (if using SSH)

### ".gitignore not working"
```bash
# Clear git cache
git rm -r --cached .

# Re-add files
git add .

# Commit
git commit -m "Fix .gitignore"
```

---

## Next Steps

1. ✅ Push to GitHub (this guide)
2. ✅ Set up GitHub Pages or deployment service
3. ✅ Configure custom domain
4. ✅ Set up CI/CD for automated testing
5. ✅ Monitor analytics and uptime

---

**Repository**: https://github.com/nodalwire/academy-website  
**Website**: https://www.nodalwireacademy.com  
**Last Updated**: June 2, 2026
