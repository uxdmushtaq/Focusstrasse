# GitHub + Vercel Quick Start

## TL;DR - 5 Minute Deployment

### 1. Export Assets (2 minutes)

Export these 3 images from Figma Make and save them to `public/assets/`:

```
public/
└── assets/
    ├── focus-strasse-logo.png
    ├── mountain-illustration.png
    └── forest-illustration.png
```

**How:** Right-click each image → "Save image as..."

### 2. Push to GitHub (1 minute)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Deploy to Vercel (2 minutes)

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy"

**Done!** Your site will be live at `your-project.vercel.app`

---

## Asset Export Details

### From Figma Make:

The code now uses these paths (already updated):
- `/assets/focus-strasse-logo.png`
- `/assets/mountain-illustration.png`
- `/assets/forest-illustration.png`

**To export from Figma Make:**
1. Open your project in Figma Make
2. Right-click on the logo image → Save as `focus-strasse-logo.png`
3. For mountain/forest backgrounds, you may need to:
   - Screenshot the mountain/forest scenes when selected
   - OR use placeholder images
   - OR find similar illustrations on Unsplash/free resources

**Alternative:** Use placeholder images:
- Logo: Create a simple text logo or use a placeholder
- Illustrations: Find free landscape illustrations on:
  - https://unsplash.com (search "mountain" and "forest")
  - https://www.pexels.com
  - https://pixabay.com

---

## Commands Reference

```bash
# Local development
npm install
npm run dev

# Build for production
npm run build
npm run preview  # Test production build locally

# Git commands
git add .
git commit -m "Your message"
git push origin main

# Vercel CLI (optional)
npm install -g vercel
vercel login
vercel
```

---

## What Changed from Figma Make

✅ **Updated:** `App.tsx` - Logo import converted to standard path
✅ **Updated:** `AnimatedBackground.tsx` - Illustration imports converted
✅ **Created:** `.gitignore` - Prevents committing node_modules, etc.
✅ **Ready:** All other files work as-is

🔄 **Action Required:** Export and add 3 image files to `public/assets/`

---

## Deployment Flow

```
Local Dev (Figma Make)
    ↓
Export Assets
    ↓
Add to public/assets/
    ↓
Push to GitHub
    ↓
Connect Vercel
    ↓
Auto-Deploy ✨
```

Every time you push to GitHub, Vercel automatically deploys the changes!

---

## Verification Checklist

After deployment, verify:

- [ ] Logo appears in top left
- [ ] Timer displays and works
- [ ] Search bar redirects to Google
- [ ] Beach Waves background animates
- [ ] Rain background shows mist and drops
- [ ] Mountains background shows illustration and snow
- [ ] Forest background shows illustration and leaves
- [ ] Ambient sounds play (after user interaction)
- [ ] Footer links work and change color
- [ ] Volume controls work
- [ ] Timer arrows adjust duration

---

## Need Help?

1. **Build fails?** Check Vercel logs in dashboard
2. **Images missing?** Verify files are in `public/assets/`
3. **Audio not working?** Normal - browsers block autoplay (works after clicking Start)

Full guide: See `VERCEL_DEPLOYMENT_GUIDE.md`
