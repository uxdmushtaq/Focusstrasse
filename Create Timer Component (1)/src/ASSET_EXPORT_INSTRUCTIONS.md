# Asset Export Instructions

This guide explains how to export the required image assets from Figma Make for deployment.

## Required Assets

Your project needs **3 image files**:

| Asset Name | File Name | Usage | Recommended Size |
|-----------|-----------|-------|------------------|
| Logo | `focus-strasse-logo.png` | Top-left corner branding | ~200x60px |
| Mountain Scene | `mountain-illustration.png` | Mountains ambient background | 1920x1080px |
| Forest Scene | `forest-illustration.png` | Forest ambient background | 1920x1080px |

## Directory Structure

Place all assets in this location:

```
your-project/
├── public/
│   └── assets/
│       ├── focus-strasse-logo.png       ← Logo
│       ├── mountain-illustration.png    ← Mountains background
│       └── forest-illustration.png      ← Forest background
```

## Method 1: Export from Figma Make (Preferred)

### Step 1: Export Logo

1. Open your project in Figma Make
2. In the preview, right-click on the logo in the top-left corner
3. Select **"Save Image As..."** or **"Copy Image"**
4. Save as `focus-strasse-logo.png`
5. Place in `public/assets/` folder

### Step 2: Export Mountain Illustration

1. In Figma Make, select the **Mountains** ambient sound
2. Wait for the animation to load
3. Take a screenshot or:
   - Right-click the mountain image
   - Select **"Save Image As..."**
4. Save as `mountain-illustration.png`
5. Place in `public/assets/` folder

### Step 3: Export Forest Illustration

1. In Figma Make, select the **Forest** ambient sound
2. Wait for the animation to load
3. Take a screenshot or:
   - Right-click the forest image
   - Select **"Save Image As..."**
4. Save as `forest-illustration.png`
5. Place in `public/assets/` folder

## Method 2: Use Placeholder/Alternative Images

If you can't export from Figma Make, use free alternatives:

### Logo Alternative
Create a simple text logo or use a placeholder:
- Use Canva, Figma, or any design tool
- Create a simple text logo with "Focus Strasse"
- Export as PNG (transparent background preferred)

### Mountain Illustration Alternative
Download free mountain landscape from:
- [Unsplash - Mountains](https://unsplash.com/s/photos/mountain-landscape)
- [Pexels - Mountains](https://www.pexels.com/search/mountain/)
- [Pixabay - Mountains](https://pixabay.com/images/search/mountain/)

**Recommended searches:**
- "snowy mountain landscape"
- "mountain range illustration"
- "minimalist mountain"

### Forest Illustration Alternative
Download free forest landscape from:
- [Unsplash - Forest](https://unsplash.com/s/photos/forest)
- [Pexels - Forest](https://www.pexels.com/search/forest/)
- [Pixabay - Forest](https://pixabay.com/images/search/forest/)

**Recommended searches:**
- "forest landscape"
- "forest silhouette"
- "trees nature"

## Method 3: Use Browser Developer Tools

### For Mountain/Forest Backgrounds:

1. Open your Figma Make project in Chrome/Firefox
2. Select Mountains or Forest ambient sound
3. Open Developer Tools (F12)
4. Go to **Elements** tab (Chrome) or **Inspector** (Firefox)
5. Find the `<img>` tag with the illustration
6. Right-click the image URL in the `src` attribute
7. Select "Open in new tab"
8. Right-click the image → "Save Image As..."
9. Save with appropriate name

### For Logo:

1. Follow same steps as above
2. Find the logo `<img>` element
3. Extract and save

## Image Optimization (Optional)

After exporting, optimize images for web:

### Tools:
- [TinyPNG](https://tinypng.com/) - Compress PNG files
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for compression

### Command Line (if you have ImageMagick):

```bash
# Resize and optimize
magick mountain-illustration.png -resize 1920x1080 -quality 85 mountain-illustration.png
magick forest-illustration.png -resize 1920x1080 -quality 85 forest-illustration.png
magick focus-strasse-logo.png -resize 200x60 -quality 90 focus-strasse-logo.png
```

## Verification

After adding assets, verify they work:

### 1. Check File Structure

```bash
ls -la public/assets/
```

Should show:
```
focus-strasse-logo.png
mountain-illustration.png
forest-illustration.png
```

### 2. Test Locally

```bash
npm run dev
```

Open http://localhost:5173 and check:
- [ ] Logo appears in top-left
- [ ] Mountains background shows when selecting Mountains
- [ ] Forest background shows when selecting Forest

### 3. Test Production Build

```bash
npm run build
npm run preview
```

Open http://localhost:4173 and verify again.

## Troubleshooting

### Logo Not Showing

**Issue:** Broken image icon in top-left corner

**Solutions:**
1. Check file exists: `public/assets/focus-strasse-logo.png`
2. Check file name is exact (case-sensitive)
3. Check file is valid PNG (open in image viewer)
4. Clear browser cache (Ctrl+Shift+R)

### Background Illustrations Not Showing

**Issue:** No illustration appears when selecting Mountains/Forest

**Solutions:**
1. Check files exist in `public/assets/`
2. Check file names are exact:
   - `mountain-illustration.png` (not `mountain.png`)
   - `forest-illustration.png` (not `forest.png`)
3. Check files are valid images
4. Open browser DevTools → Console for errors
5. Check Network tab to see if files are loading

### Images Too Large / Slow Loading

**Issue:** Site loads slowly

**Solutions:**
1. Optimize images with TinyPNG or Squoosh
2. Resize to reasonable dimensions:
   - Logo: ~200x60px
   - Illustrations: ~1920x1080px (or smaller)
3. Convert to WebP for better compression (optional)

## Alternative: Skip Illustrations

If you can't get the illustrations, you can temporarily comment them out:

### Edit `components/AnimatedBackground.tsx`:

Find these lines around line 331 and 489:

```tsx
// Comment out mountain illustration
{/* <motion.div className="absolute bottom-0 left-0 right-0 pointer-events-none">
  <img src={mountainIllustration} ... />
</motion.div> */}

// Comment out forest illustration  
{/* <motion.div className="absolute bottom-0 left-0 right-0 pointer-events-none">
  <img src={forestIllustration} ... />
</motion.div> */}
```

The animations will still work, just without the illustration backgrounds.

## Need Help?

- Check the main [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)
- Review [GITHUB_VERCEL_QUICKSTART.md](./GITHUB_VERCEL_QUICKSTART.md)
- Open an issue on GitHub

---

**Pro Tip:** Once you have the assets working locally (`npm run dev`), deployment to Vercel is just a few clicks!
