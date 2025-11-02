# 🚀 Deploy to Vercel - START HERE

**Ready to deploy your Focus Strasse start page to the web in 5 minutes? Follow these steps!**

---

## Prerequisites ✓

- [ ] Git installed on your computer
- [ ] GitHub account ([sign up](https://github.com/join) if needed)
- [ ] Vercel account ([sign up](https://vercel.com/signup) if needed - free!)
- [ ] Node.js 18+ installed

---

## Step-by-Step Guide

### 📦 Step 1: Prepare Assets (2 minutes)

You need to export 3 images from Figma Make and add them to your project.

**Create the directory:**
```bash
mkdir -p public/assets
```

**Export these images and place them in `public/assets/`:**
- `focus-strasse-logo.png` - The logo in the top-left corner
- `mountain-illustration.png` - Background for Mountains ambient sound
- `forest-illustration.png` - Background for Forest ambient sound

**Need help exporting?** See [ASSET_EXPORT_INSTRUCTIONS.md](./ASSET_EXPORT_INSTRUCTIONS.md)

**Quick tip:** Right-click images in Figma Make preview → "Save Image As..."

---

### 🔧 Step 2: Install & Test Locally (1 minute)

```bash
# Install dependencies (if you haven't already)
npm install

# Test that everything works
npm run dev
```

Open http://localhost:5173 and verify:
- ✓ Logo appears
- ✓ Timer works
- ✓ Search bar works
- ✓ Mountains shows illustration
- ✓ Forest shows illustration

**If something's missing:** Check [ASSET_EXPORT_INSTRUCTIONS.md](./ASSET_EXPORT_INSTRUCTIONS.md)

---

### 📤 Step 3: Push to GitHub (2 minutes)

#### 3a. Initialize Git (if not already done)

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Focus Strasse start page"
```

#### 3b. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `focus-strasse-start-page` (or your choice)
3. Keep it **Public** or **Private** (your choice)
4. **DO NOT** check "Add README" or "Add .gitignore" (you already have these)
5. Click **"Create repository"**

#### 3c. Push Your Code

GitHub will show you commands. Copy and run them:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace:** `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

---

### 🚀 Step 4: Deploy to Vercel (2 minutes)

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Find your repository and click **"Import"**
5. Vercel auto-detects settings:
   - Framework: **Vite** ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓
   - Install Command: `npm install` ✓
6. Click **"Deploy"**

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts (accept defaults)
```

---

### 🎉 Step 5: Celebrate!

Your site is now live! Vercel will give you a URL like:

```
https://focus-strasse-start-page.vercel.app
```

**Test your live site:**
- [ ] Logo displays
- [ ] Timer works
- [ ] Search bar redirects to Google
- [ ] All 4 ambient sounds work with animations
- [ ] Volume controls work
- [ ] Footer links work

---

## 🔄 Making Updates

Every time you want to update your site:

```bash
# Make your changes
# Then:
git add .
git commit -m "Description of changes"
git push origin main

# Vercel automatically deploys! 🎉
```

**That's it!** No need to manually deploy again.

---

## 🎨 Optional: Custom Domain

Want to use your own domain? (e.g., `focus.yoursite.com`)

1. In Vercel dashboard, go to your project
2. **Settings** → **Domains**
3. Add your domain
4. Follow DNS setup instructions
5. Wait for SSL certificate (5-10 minutes)

---

## 🐛 Troubleshooting

### Build Fails

**Check the logs** in Vercel dashboard → Deployments → (failed deployment) → View Logs

**Common issues:**
- Missing dependencies → Add to `package.json` and push
- TypeScript errors → Fix locally first with `npm run build`

### Images Not Showing

**Check:**
1. Files exist in `public/assets/` locally
2. Files are committed to Git: `git status`
3. Files are pushed to GitHub (check your repo on GitHub)
4. File names match exactly (case-sensitive!)
   - `focus-strasse-logo.png` ✓
   - `Focus-Strasse-Logo.png` ✗ (wrong case)

**Fix:**
```bash
# Add missing files
git add public/assets/
git commit -m "Add missing assets"
git push origin main
```

### Audio Not Playing

**This is normal!** Browsers block autoplay until user interaction. Audio plays after clicking the Start button.

---

## 📚 Additional Resources

- **Full Deployment Guide:** [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)
- **Asset Export Help:** [ASSET_EXPORT_INSTRUCTIONS.md](./ASSET_EXPORT_INSTRUCTIONS.md)
- **Quick Reference:** [GITHUB_VERCEL_QUICKSTART.md](./GITHUB_VERCEL_QUICKSTART.md)

---

## 🆘 Still Stuck?

1. **Test locally first:** `npm run build && npm run preview`
2. **Check Vercel logs** in dashboard
3. **Verify files on GitHub** (browse your repo)
4. **Review error messages** carefully

**Common beginner mistakes:**
- Forgot to add assets to `public/assets/`
- Didn't commit assets to Git
- Didn't push to GitHub after committing
- Typo in file names (case-sensitive!)

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] Assets exported from Figma Make
- [ ] Assets in `public/assets/` folder (3 files)
- [ ] Tested locally (`npm run dev` works)
- [ ] Git repository initialized
- [ ] All files committed to Git
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Deployment successful

**All checked?** Your site should be live! 🎊

---

**Next:** Share your amazing start page with the world! 🌟

Need custom domain? Want analytics? Check the [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for advanced topics.
