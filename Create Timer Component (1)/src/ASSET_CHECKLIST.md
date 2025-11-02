# Asset Download Checklist

Before deploying to Siter.io, you need to download 3 image assets from Figma Make.

## 📥 Required Assets

### 1. Focus Strasse Logo
- **Location in code**: `App.tsx` line 8
- **Original import**: `figma:asset/5d0b00144ceb6a4df975ac73f6a234f70f784777.png`
- **Save to**: `public/assets/focus-strasse-logo.png`
- **Usage**: Logo in top-left corner
- **Format**: PNG (with transparency)

**How to download:**
1. In Figma Make preview, look for the logo in the top-left corner
2. Right-click on the logo
3. Select "Save image as..." or open in new tab and save
4. Rename to `focus-strasse-logo.png`
5. Place in `public/assets/` folder

---

### 2. Mountain Illustration
- **Location in code**: `components/AnimatedBackground.tsx` line 4
- **Original import**: `figma:asset/169dcb3156cffdabf09ba7849e7d766d3ebba0ab.png`
- **Save to**: `public/assets/mountain-illustration.png`
- **Usage**: Background when "Mountains" ambient sound is selected
- **Format**: PNG (with transparency recommended)

**How to download:**
1. In Figma Make, select the "Mountains" ambient sound
2. Look for the mountain illustration at the bottom
3. Right-click and save
4. Rename to `mountain-illustration.png`
5. Place in `public/assets/` folder

---

### 3. Forest Illustration
- **Location in code**: `components/AnimatedBackground.tsx` line 5
- **Original import**: `figma:asset/f04b7834563343ad1e1cdd2465b57c134fd1a0a6.png`
- **Save to**: `public/assets/forest-illustration.png`
- **Usage**: Background when "Forest" ambient sound is selected
- **Format**: PNG (with transparency recommended)

**How to download:**
1. In Figma Make, select the "Forest" ambient sound
2. Look for the forest illustration at the bottom
3. Right-click and save
4. Rename to `forest-illustration.png`
5. Place in `public/assets/` folder

---

## 📂 Final Folder Structure

After downloading all assets, your `public/` folder should look like this:

```
public/
└── assets/
    ├── focus-strasse-logo.png
    ├── mountain-illustration.png
    └── forest-illustration.png
```

## ✅ Verification Steps

1. **Create the folder:**
   ```bash
   mkdir -p public/assets
   ```

2. **Check all files exist:**
   ```bash
   ls public/assets
   ```
   You should see:
   - focus-strasse-logo.png
   - mountain-illustration.png
   - forest-illustration.png

3. **Verify file sizes:**
   - Logo: Should be small (< 50KB typically)
   - Illustrations: May be larger (100-500KB)
   - If files are unexpectedly large, ensure they're PNGs not PDFs

4. **Test locally:**
   ```bash
   npm run dev
   ```
   - Check if logo appears in top-left
   - Select "Mountains" sound - illustration should appear
   - Select "Forest" sound - illustration should appear

## 🚨 Common Issues

### "Cannot find module '/assets/...'"
- **Cause**: Asset file missing or wrong name
- **Fix**: Check file names match exactly (case-sensitive)

### Image shows broken link icon
- **Cause**: File path incorrect
- **Fix**: Ensure files are in `public/assets/` not `src/assets/`

### Logo/illustrations not showing
- **Cause**: Import path wrong
- **Fix**: Imports should start with `/assets/` (leading slash)

### Images work locally but not in production
- **Cause**: Files not committed to git
- **Fix**: Ensure `public/assets/` folder is committed

---

## 🎯 Next Steps

Once all assets are downloaded and placed correctly:

1. ✅ Verify locally with `npm run dev`
2. ✅ Build for production with `npm run build`
3. ✅ Test production build with `npm run preview`
4. ✅ Deploy to Siter.io (see EXPORT_GUIDE.md)

**Need help?** See the troubleshooting section in EXPORT_GUIDE.md
