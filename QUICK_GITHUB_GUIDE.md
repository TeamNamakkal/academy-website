# Quick GitHub Setup Guide — Complete Steps

**For**: Novice users  
**Time**: ~15 minutes  
**Last Updated**: June 3, 2026

---

## Overview

This guide walks you through pushing your NodalWire Academy website to GitHub in 3 simple steps.

- **Step 1**: Create empty repository on GitHub
- **Step 2**: Push code from your computer to GitHub
- **Step 3**: Add description and topics (optional but recommended)

---

## Step 1: Create Empty Repository on GitHub

### What You Need
- GitHub account (free at https://github.com)

### Instructions

1. **Open GitHub**
   - Go to: https://github.com/new
   - You'll see: "Create a new repository" page

2. **Fill Out the Form**
   
   **Repository name:**
   ```
   academy-website
   ```
   
   **Description:** (optional)
   ```
   Educational platform for network engineering training
   ```
   
   **Visibility:**
   - Select: **Public** ✓

3. **Important: Leave These UNCHECKED**
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license

4. **Create Repository**
   - Click green button: **"Create repository"**

5. **Success**
   - You'll see your repository page
   - URL: `https://github.com/YOUR-USERNAME/academy-website`
   - Note the URL somewhere safe

---

## Step 2: Push Code to GitHub

### Part A: Open Terminal

On your Mac:
1. Press **Command + Space**
2. Type: `terminal`
3. Press **Enter**
4. A black/white window opens (terminal)

### Part B: Navigate to Project

Copy and paste this into terminal:
```bash
cd /Users/surendrannatarajan/Library/Mobile\ Documents/com~apple~CloudDocs/00.NodalWire/08.Academy_website
```

Press **Enter**

You should see:
```
Academy_website %
```

### Part C: Run Git Commands

Copy and paste **each command** below, **one at a time**. Press **Enter** after each.

**Command 1:**
```bash
git init
```
Expected output: `Initialized empty Git repository`

---

**Command 2:**
```bash
git add .
```
Expected: No output (just waits)

---

**Command 3:**
```bash
git commit -m "Initial commit: NodalWire Academy website"
```
Expected output: Shows files changed and insertions

---

**Command 4:**
```bash
git branch -M main
```
Expected: No output

---

**Command 5:**
Replace `YOUR-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/academy-website.git
```

Example (if username is `john123`):
```bash
git remote add origin https://github.com/john123/academy-website.git
```

Expected: No output

---

**Command 6 (FINAL):**
```bash
git push -u origin main
```

Expected output:
```
Enumerating objects: 75, done.
...
To https://github.com/YOUR-USERNAME/academy-website.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

### Success ✅

When you see that final message, your code is on GitHub!

---

## Step 3: Add Description & Topics (Optional but Recommended)

### Part A: Open Settings

1. Go to: `https://github.com/YOUR-USERNAME/academy-website`
2. Click **Settings** button (top right)
3. You'll see repository settings page

### Part B: Add Description

1. Find **Description** field (near top)
2. Click in the field
3. Type:
   ```
   Educational platform for network engineering training
   ```
4. Click **Save** button

### Part C: Add Topics

1. Find **Topics** section (scroll down if needed)
2. Click in the topics field
3. Add these topics (type each, press Enter):
   - `education`
   - `networking`
   - `courses`
   - `website`
   - `telecommunications`

4. Click elsewhere on page when done

### Verify ✅

1. Go back to: `https://github.com/YOUR-USERNAME/academy-website`
2. You should see:
   - Description below repo name
   - 5 topic tags visible

---

## Troubleshooting

### "Command not found"
- Make sure you're in the right folder
- Check: `Academy_website %` at end of line

### "git: command not found"
- Git might not be installed
- Install from: https://git-scm.com/download/mac

### "Repository not found"
- Check your GitHub username is correct in the URL
- Verify you created the repo on GitHub first

### "Everything up-to-date"
- Your code is already there! ✅
- Go verify on GitHub.com

---

## Quick Reference Commands

```bash
# Navigate to project
cd /Users/surendrannatarajan/Library/Mobile\ Documents/com~apple~CloudDocs/00.NodalWire/08.Academy_website

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: NodalWire Academy website"

# Set main branch
git branch -M main

# Connect to GitHub (replace USERNAME)
git remote add origin https://github.com/USERNAME/academy-website.git

# Push to GitHub
git push -u origin main
```

---

## Checklist

Use this checklist to verify each step:

### Step 1: GitHub Repository
- [ ] Created repository named: `academy-website`
- [ ] Repository is **Public**
- [ ] Left README, .gitignore, and license **unchecked**
- [ ] Successfully created (saw confirmation page)

### Step 2: Push Code
- [ ] Opened terminal
- [ ] Navigated to project folder
- [ ] Ran `git init` (saw success message)
- [ ] Ran `git add .` (completed)
- [ ] Ran `git commit` (saw files changed)
- [ ] Ran `git branch -M main` (completed)
- [ ] Ran `git remote add origin` (with correct username)
- [ ] Ran `git push -u origin main` (saw success message)

### Step 3: Polish (Optional)
- [ ] Added description to repository
- [ ] Added 5 topics (education, networking, courses, website, telecommunications)
- [ ] Verified on GitHub.com (all visible)

---

## Your GitHub Repository

**URL**: `https://github.com/YOUR-USERNAME/academy-website`

Save this URL! You'll need it for:
- Sharing your project
- Setting up deployment
- Collaborating with others
- Future reference

---

## What's Next? (Optional)

### To Deploy Your Website
See: `docs/DEPLOYMENT.md` for options:
- Vercel (recommended, free)
- Netlify (free, easy)
- GitHub Pages (free, built-in)

### To Make More Changes
1. Edit files locally on your computer
2. Run: `git add .`
3. Run: `git commit -m "Your description"`
4. Run: `git push`

### To Share Your Project
Just share the URL: `https://github.com/YOUR-USERNAME/academy-website`

---

## Success! 🎉

Your project is now on GitHub with professional setup!

**You've completed:**
✅ Code version control  
✅ Cloud backup  
✅ Easy sharing  
✅ Professional appearance  

---

**Questions?** Review the troubleshooting section above, or refer to the other documentation files in your project.

**Happy coding!** 🚀

---

*Created: June 3, 2026*  
*Project: NodalWire Academy Website*  
*Status: ✅ Complete*
