# 🚀 Quick Deploy Guide

Follow these steps to deploy your Focus Strasse start page to Siter.io in under 10 minutes.

## ⚡ Fast Track (Recommended)

### Step 1: Download Assets (2 minutes)
1. In Figma Make preview, right-click these images and save:
   - **Logo** (top-left corner) → save as `focus-strasse-logo.png`
   - **Mountains background** (select Mountains sound) → save as `mountain-illustration.png`
   - **Forest background** (select Forest sound) → save as `forest-illustration.png`

2. Create folder structure:
   ```bash
   mkdir -p public/assets
   ```

3. Move downloaded files to `public/assets/`

4. Update imports in code:
   - Open `App.tsx` and change line 8 from `figma:asset/...` to `/assets/focus-strasse-logo.png`
   - Open `components/AnimatedBackground.tsx` and change lines 6-7 from `figma:asset/...` to `/assets/mountain-illustration.png` and `/assets/forest-illustration.png`
   
   (See comments in the files for exact changes)

### Step 2: Test Locally (1 minute)
```bash
npm install
npm run dev
```
Open http://localhost:5173 and verify everything works.

### Step 3: Deploy to Siter.io (5 minutes)

#### Option A: Via GitHub (Best for updates)
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repo and push
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then on Siter.io:
1. Click "New Site"
2. "Import from Git" → Select your repo
3. Settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click "Deploy"

#### Option B: Direct Upload (Fastest)
```bash
npm run build
```
1. On Siter.io, click "New Site"
2. "Upload folder"
3. Drag and drop the `dist/` folder
4. Done!

---

## 📋 Pre-Flight Checklist

Before deploying, make sure:
- [ ] `public/assets/` folder exists
- [ ] All 3 images are in `public/assets/`
- [ ] `npm run dev` works locally
- [ ] `npm run build` completes without errors

---

## 🆘 Quick Troubleshooting

### "Module not found" error
```bash
npm install --legacy-peer-deps
```

### Images not showing
- Check files are in `public/assets/` (not `src/assets/`)
- Verify file names match exactly

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎉 You're Done!

Your site should be live at: `https://your-site.siter.io`

### What's Next?

1. **Custom Domain**: Add your own domain in Siter.io settings
2. **Add Weather API**: Get free API key from OpenWeatherMap
3. **Customize**: Change colors, timer defaults, or add new sounds

---

**Need detailed help?** See [EXPORT_GUIDE.md](./EXPORT_GUIDE.md)

**Missing assets?** See [ASSET_CHECKLIST.md](./ASSET_CHECKLIST.md)
