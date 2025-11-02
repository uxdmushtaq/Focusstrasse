# ✅ Vercel Deployment Checklist

Use this checklist to ensure a smooth deployment to Vercel.

---

## Pre-Deployment

### Assets
- [ ] Created `public/assets/` directory
- [ ] Exported `focus-strasse-logo.png` from Figma Make
- [ ] Exported `mountain-illustration.png` from Figma Make
- [ ] Exported `forest-illustration.png` from Figma Make
- [ ] Placed all 3 images in `public/assets/`
- [ ] Verified file names are exact (case-sensitive)

### Local Testing
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` - site loads at http://localhost:5173
- [ ] Verified logo appears in top-left corner
- [ ] Verified search bar works
- [ ] Verified timer starts/pauses/resets
- [ ] Verified Beach Waves animation works
- [ ] Verified Rain animation works
- [ ] Verified Mountains animation + illustration works
- [ ] Verified Forest animation + illustration works
- [ ] Verified volume controls work
- [ ] Verified mute button works
- [ ] Verified footer links work and change color
- [ ] Ran `npm run build` successfully (no errors)
- [ ] Ran `npm run preview` - production build works

---

## Git Setup

- [ ] Initialized Git: `git init`
- [ ] Checked `.gitignore` exists
- [ ] Verified `node_modules/` is in `.gitignore`
- [ ] Added all files: `git add .`
- [ ] Created initial commit: `git commit -m "Initial commit"`
- [ ] Verified assets are in commit: `git log --stat` (should show public/assets/)

---

## GitHub

- [ ] Created GitHub account (if new)
- [ ] Created new repository on GitHub
- [ ] Repository name chosen (e.g., `focus-strasse-start-page`)
- [ ] Did NOT initialize with README (already have one)
- [ ] Copied repository URL from GitHub
- [ ] Added remote: `git remote add origin <URL>`
- [ ] Pushed to GitHub: `git push -u origin main`
- [ ] Verified files on GitHub (browse repository)
- [ ] Verified assets folder visible on GitHub: `public/assets/`
- [ ] Verified all 3 images uploaded to GitHub

---

## Vercel

### Account Setup
- [ ] Created Vercel account at https://vercel.com/signup
- [ ] Connected GitHub account to Vercel
- [ ] Authorized Vercel to access repositories

### Project Import
- [ ] Clicked "Add New" → "Project" in Vercel dashboard
- [ ] Selected "Import Git Repository"
- [ ] Found my repository in the list
- [ ] Clicked "Import"

### Build Configuration
- [ ] Framework Preset: **Vite** (auto-detected)
- [ ] Root Directory: `./` (default)
- [ ] Build Command: `npm run build` (auto-detected)
- [ ] Output Directory: `dist` (auto-detected)
- [ ] Install Command: `npm install` (auto-detected)

### Deployment
- [ ] Clicked "Deploy"
- [ ] Waited for build to complete (1-2 minutes)
- [ ] Build succeeded (green checkmark)
- [ ] Received deployment URL

---

## Post-Deployment Verification

### Visit Your Live Site
- [ ] Copied deployment URL from Vercel
- [ ] Opened URL in browser
- [ ] Site loads successfully

### Functionality Test
- [ ] Logo displays correctly
- [ ] Date and weather display
- [ ] Search bar present
- [ ] Typed in search bar and pressed Enter → opens Google search
- [ ] Timer displays (25:00)
- [ ] Clicked Start button → timer counts down
- [ ] Clicked Pause button → timer pauses
- [ ] Clicked Reset button → timer resets to 25:00
- [ ] Up/Down arrows adjust timer duration
- [ ] Progress bar fills as timer runs

### Ambient Sounds Test
- [ ] Rain auto-selected when starting timer first time
- [ ] Clicked Beach Waves → animation appears
- [ ] Beach Waves → audio plays
- [ ] Clicked Rain → animation appears
- [ ] Rain → audio plays
- [ ] Clicked Mountains → animation + illustration appears
- [ ] Mountains → audio plays
- [ ] Clicked Forest → animation + illustration appears
- [ ] Forest → audio plays
- [ ] Deselected sound → animation stops
- [ ] Volume slider works
- [ ] Mute button works

### Visual Test
- [ ] Animations are smooth
- [ ] No broken image icons
- [ ] Footer links visible
- [ ] Footer links change color (black/white) based on Forest selection
- [ ] Footer links opacity reduced (60%)
- [ ] All UI elements aligned properly
- [ ] Responsive on mobile (if tested)

---

## Optional Enhancements

- [ ] Set up custom domain (Vercel Settings → Domains)
- [ ] Enabled Vercel Analytics
- [ ] Added environment variables (if needed)
- [ ] Configured custom redirects (if needed)
- [ ] Set up branch preview deployments

---

## Common Issues Resolution

### If Build Fails
- [ ] Checked Vercel deployment logs
- [ ] Identified error message
- [ ] Fixed error locally
- [ ] Tested with `npm run build`
- [ ] Committed fix: `git add . && git commit -m "Fix build error"`
- [ ] Pushed to GitHub: `git push origin main`
- [ ] Vercel auto-rebuilds

### If Images Don't Show
- [ ] Verified files exist in `public/assets/` locally
- [ ] Checked file names match exactly (case-sensitive)
- [ ] Verified files committed to Git: `git status`
- [ ] Verified files on GitHub (browse repo)
- [ ] Pushed missing files: `git add public/assets/ && git commit && git push`
- [ ] Triggered redeploy in Vercel
- [ ] Cleared browser cache (Ctrl+Shift+R)

### If Audio Doesn't Play
- [ ] Understood: Browsers block autoplay (expected behavior)
- [ ] Verified: Audio plays after clicking Start button
- [ ] Checked: Volume is not muted
- [ ] Checked: Browser console for errors (F12)
- [ ] Tested in different browser
- [ ] Verified audio URLs are accessible

---

## Documentation Reference

- **Start Here:** [DEPLOY_TO_VERCEL_START_HERE.md](./DEPLOY_TO_VERCEL_START_HERE.md)
- **Quick Start:** [GITHUB_VERCEL_QUICKSTART.md](./GITHUB_VERCEL_QUICKSTART.md)
- **Full Guide:** [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)
- **Asset Help:** [ASSET_EXPORT_INSTRUCTIONS.md](./ASSET_EXPORT_INSTRUCTIONS.md)
- **Summary:** [DEPLOYMENT_SUMMARY_VERCEL.md](./DEPLOYMENT_SUMMARY_VERCEL.md)

---

## Success!

Once all items are checked:

✅ **Your site is live on the internet!**

🎉 **Share your URL:**
- With friends and colleagues
- On social media
- As your browser start page

🔄 **Future updates:**
```bash
# Make changes, then:
git add .
git commit -m "Description of changes"
git push origin main
# Vercel auto-deploys in 1-2 minutes!
```

---

**Deployment Date:** _________________

**Live URL:** _______________________________________

**Repository:** https://github.com/_____________/________________

---

*Print this checklist or keep it open while deploying for a smooth experience!*
