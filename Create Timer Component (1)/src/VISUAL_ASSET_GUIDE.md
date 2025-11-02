# 🖼️ Visual Asset Download Guide

This guide shows you EXACTLY where to find and how to download each asset from Figma Make.

## 🎨 Asset #1: Focus Strasse Logo

### Location
- **Where to look**: Top-left corner of the page
- **Always visible**: Yes
- **Size**: Small horizontal logo

### How to Download

**Method 1: Right-click (Recommended)**
1. In Figma Make preview, locate the logo in the top-left corner
2. Right-click directly on the logo image
3. Select "Save image as..." or "Download image"
4. Save as: `focus-strasse-logo.png`

**Method 2: Open in New Tab**
1. Right-click the logo
2. Select "Open image in new tab"
3. In the new tab, right-click → "Save image as..."
4. Save as: `focus-strasse-logo.png`

### Verification
- File should be a **PNG** with transparency
- Typical size: **20-100 KB**
- Dimensions: Roughly **200-400px wide**, height proportional

---

## 🏔️ Asset #2: Mountain Illustration

### Location
- **Where to look**: Bottom portion of the screen
- **When visible**: Only when "Mountains" ambient sound is selected
- **Appearance**: Snowy mountain peaks with blue/white tones

### How to Download

**Step-by-step:**
1. In Figma Make preview, click the "Mountains" button in the timer card
2. The mountain illustration will appear at the bottom of the screen
3. Wait 1-2 seconds for the fade-in animation to complete
4. Right-click on the mountain illustration
5. Select "Save image as..."
6. Save as: `mountain-illustration.png`

**Tip**: If you can't right-click on it:
- Try right-clicking on a different part of the mountain
- Or use browser DevTools:
  1. Press F12 to open DevTools
  2. Click the "Elements" tab
  3. Find the `<img>` tag with the mountain
  4. Right-click the `src` URL → "Open in new tab"
  5. Save the image

### Verification
- File should be a **PNG**
- Typical size: **100-500 KB**
- Shows mountain landscape with snowy peaks
- May have transparent or gradient top

---

## 🌲 Asset #3: Forest Illustration

### Location
- **Where to look**: Bottom portion of the screen
- **When visible**: Only when "Forest" ambient sound is selected
- **Appearance**: Green forest/tree silhouettes

### How to Download

**Step-by-step:**
1. In Figma Make preview, click the "Forest" button in the timer card
2. The forest illustration will appear at the bottom of the screen
3. Wait 1-2 seconds for the fade-in animation to complete
4. Notice the footer links turn white (this confirms Forest is selected)
5. Right-click on the forest illustration
6. Select "Save image as..."
7. Save as: `forest-illustration.png`

**Tip**: Same as mountains - if right-click doesn't work, use DevTools method above.

### Verification
- File should be a **PNG**
- Typical size: **100-500 KB**
- Shows forest/tree silhouettes
- Darker green tones
- May have transparent or gradient top

---

## 📂 File Organization

After downloading all 3 assets, organize them like this:

```
your-project/
└── public/
    └── assets/
        ├── focus-strasse-logo.png         ✅ Logo
        ├── mountain-illustration.png       ✅ Mountains
        └── forest-illustration.png         ✅ Forest
```

**Create the folder structure:**
```bash
mkdir -p public/assets
```

**Move files:**
1. Move all 3 downloaded PNG files into `public/assets/`
2. Ensure file names match EXACTLY (case-sensitive):
   - `focus-strasse-logo.png` (not Logo.png or logo.PNG)
   - `mountain-illustration.png` (not Mountain.png)
   - `forest-illustration.png` (not Forest.png)

---

## 🔍 Finding Assets Using Browser DevTools

If right-click isn't working, use this method:

### For Logo
1. Press **F12** to open DevTools
2. Press **Ctrl/Cmd + Shift + C** to enable element selector
3. Click on the logo
4. In the Elements panel, you'll see something like:
   ```html
   <img src="blob:https://..." alt="Focus Strasse">
   ```
5. The image is loaded as a blob, so you'll need to:
   - Right-click on the actual logo in the preview
   - Or check the Network tab for the PNG file

### For Illustrations (Mountains/Forest)
1. Select the ambient sound (Mountains or Forest)
2. Press **F12** → Go to **Elements** tab
3. Press **Ctrl/Cmd + F** to search
4. Search for: `mountain-illustration` or `forest-illustration`
5. You should find an `<img>` tag with the src
6. Right-click the src URL → "Open in new tab"
7. Save the image from the new tab

---

## ✅ Verification Checklist

After downloading, verify each file:

### Logo Verification
- [ ] File name: `focus-strasse-logo.png`
- [ ] File size: 20-100 KB (approximately)
- [ ] Opens in image viewer
- [ ] Shows the Focus Strasse branding
- [ ] Has transparent background (PNG)

### Mountain Illustration Verification
- [ ] File name: `mountain-illustration.png`
- [ ] File size: 100-500 KB (approximately)
- [ ] Opens in image viewer
- [ ] Shows mountain landscape
- [ ] Blue/white color scheme

### Forest Illustration Verification
- [ ] File name: `forest-illustration.png`
- [ ] File size: 100-500 KB (approximately)
- [ ] Opens in image viewer
- [ ] Shows forest/tree silhouettes
- [ ] Green color scheme

---

## 🚨 Troubleshooting

### "I can't see the illustrations"
**Solution**: Make sure you've clicked the corresponding sound button:
- Mountains → Click "Mountains" button
- Forest → Click "Forest" button

### "Right-click doesn't work"
**Solutions**:
1. Try clicking on a different part of the image
2. Use DevTools method (see above)
3. Try a different browser
4. Disable browser extensions that might block right-click

### "I only see a broken image icon"
**Cause**: The illustration hasn't loaded yet  
**Solution**: 
1. Wait a few seconds after clicking the sound
2. Refresh the Figma Make preview
3. Try clicking the sound button again

### "File is very large (> 5MB)"
**Cause**: Wrong format or not compressed  
**Solution**:
1. Ensure you're saving as PNG (not PDF or SVG)
2. If file is huge, it might be the wrong asset
3. Typical sizes should be under 500KB

### "Can I use JPG instead of PNG?"
**Answer**: Not recommended. PNG supports transparency which is needed for these illustrations. JPG will have a white background.

---

## 💾 Backup Download Method

If you absolutely cannot download the assets from Figma Make:

### Option 1: Use Placeholder Images
For testing purposes, you can use temporary placeholders:
```bash
# Create placeholder files (temporary solution)
cd public/assets
# Download any placeholder images or create solid color PNGs
```

**Note**: This is only for testing. You should get the real assets before final deployment.

### Option 2: Contact Support
If Figma Make isn't allowing downloads, you may need to:
- Check your Figma Make permissions
- Try a different browser
- Clear browser cache
- Contact Figma Make support

---

## 🎯 Quick Reference

| Asset | Button to Click | Location | File Size | Colors |
|-------|----------------|----------|-----------|--------|
| Logo | Always visible | Top-left | 20-100KB | Brand colors |
| Mountains | "Mountains" | Bottom | 100-500KB | Blue/white |
| Forest | "Forest" | Bottom | 100-500KB | Green |

---

## ✨ Next Steps

Once you have all 3 assets downloaded:

1. ✅ Place them in `public/assets/`
2. ✅ Verify file names match exactly
3. ✅ Run `npm run dev` to test
4. ✅ Proceed with deployment ([QUICK_DEPLOY.md](./QUICK_DEPLOY.md))

**Still having trouble?** See [ASSET_CHECKLIST.md](./ASSET_CHECKLIST.md) for more help.
