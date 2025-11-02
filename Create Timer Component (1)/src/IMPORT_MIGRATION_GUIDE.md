# 🔄 Import Migration Guide

After downloading the assets, you need to update the imports in your code from `figma:asset` to standard paths.

## ⚡ Quick Reference

You need to edit **2 files** and change **3 imports**:

### File 1: `/App.tsx`

**Line ~8** - Change this line:
```tsx
import focusStrasseLogo from 'figma:asset/5d0b00144ceb6a4df975ac73f6a234f70f784777.png';
```

**To:**
```tsx
import focusStrasseLogo from '/assets/focus-strasse-logo.png';
```

---

### File 2: `/components/AnimatedBackground.tsx`

**Lines ~6-7** - Change these lines:
```tsx
import mountainIllustration from 'figma:asset/169dcb3156cffdabf09ba7849e7d766d3ebba0ab.png';
import forestIllustration from 'figma:asset/f04b7834563343ad1e1cdd2465b57c134fd1a0a6.png';
```

**To:**
```tsx
import mountainIllustration from '/assets/mountain-illustration.png';
import forestIllustration from '/assets/forest-illustration.png';
```

---

## 📋 Step-by-Step Instructions

### Step 1: Open App.tsx

1. Open the file `/App.tsx` in your code editor
2. Find line 8 (look for the comment that says "FIGMA MAKE" or "FOR SITER.IO EXPORT")
3. Replace the entire import line with the new format shown above
4. Save the file

### Step 2: Open AnimatedBackground.tsx

1. Open the file `/components/AnimatedBackground.tsx`
2. Find lines 6-7 (look for the comments about exports)
3. Replace both import lines with the new format shown above
4. Save the file

### Step 3: Verify Changes

After making the changes, your imports should look like this:

**App.tsx:**
```tsx
import { useState } from 'react';
import { Timer } from './components/Timer';
import { SearchBar } from './components/SearchBar';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CloudSun } from 'lucide-react';
import focusStrasseLogo from '/assets/focus-strasse-logo.png';  // ← Updated!
```

**AnimatedBackground.tsx:**
```tsx
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import mountainIllustration from '/assets/mountain-illustration.png';  // ← Updated!
import forestIllustration from '/assets/forest-illustration.png';      // ← Updated!
```

---

## ✅ Checklist

Use this checklist to ensure you've made all the changes:

- [ ] Created `public/assets/` folder
- [ ] Downloaded and placed `focus-strasse-logo.png` in `public/assets/`
- [ ] Downloaded and placed `mountain-illustration.png` in `public/assets/`
- [ ] Downloaded and placed `forest-illustration.png` in `public/assets/`
- [ ] Updated import in `App.tsx` (line ~8)
- [ ] Updated imports in `AnimatedBackground.tsx` (lines ~6-7)
- [ ] Saved both files
- [ ] Tested with `npm run dev` - no errors!

---

## 🧪 Testing Your Changes

After making the changes, test that everything works:

```bash
# Start development server
npm run dev
```

**Check these:**
1. ✅ No import errors in terminal
2. ✅ Logo appears in top-left corner
3. ✅ Click "Mountains" - mountain illustration appears
4. ✅ Click "Forest" - forest illustration appears

If you see broken images or import errors, double-check:
- File names match exactly (case-sensitive!)
- Files are in `public/assets/` not `src/assets/`
- Import paths start with `/assets/` (with leading slash)

---

## 🔍 Find & Replace Method (Fast!)

If your editor supports find & replace across files:

### Replace 1:
- **Find:** `figma:asset/5d0b00144ceb6a4df975ac73f6a234f70f784777.png`
- **Replace with:** `/assets/focus-strasse-logo.png`

### Replace 2:
- **Find:** `figma:asset/169dcb3156cffdabf09ba7849e7d766d3ebba0ab.png`
- **Replace with:** `/assets/mountain-illustration.png`

### Replace 3:
- **Find:** `figma:asset/f04b7834563343ad1e1cdd2465b57c134fd1a0a6.png`
- **Replace with:** `/assets/forest-illustration.png`

Then save all files!

---

## ❓ Why This Change?

**In Figma Make:**
- `figma:asset/...` imports work because Figma Make provides these assets

**For Siter.io (and other platforms):**
- Standard web hosting doesn't understand `figma:asset` imports
- Need to use regular file paths like `/assets/...`
- This makes your code portable to any hosting platform

---

## 🆘 Troubleshooting

### Error: "Could not resolve '/assets/...'"

**Cause:** Asset files not in the correct location

**Fix:**
1. Verify files exist: `ls public/assets/`
2. Should show all 3 PNG files
3. If missing, re-download from Figma Make

---

### Error: "Module not found"

**Cause:** Wrong file path or name

**Fix:**
1. Check file names match exactly:
   - `focus-strasse-logo.png` (not `logo.png` or `Logo.png`)
   - `mountain-illustration.png` (not `mountain.png`)
   - `forest-illustration.png` (not `forest.png`)
2. Ensure imports start with `/assets/` (leading slash!)

---

### Images show as broken

**Cause:** Files not accessible or wrong path

**Fix:**
1. Files MUST be in `public/assets/` folder (not `src/assets/`)
2. In Vite, files in `public/` are served from root
3. Import path should be `/assets/filename.png` (absolute path)

---

## 📞 Need More Help?

- **Asset download help:** [VISUAL_ASSET_GUIDE.md](./VISUAL_ASSET_GUIDE.md)
- **Deployment help:** [EXPORT_GUIDE.md](./EXPORT_GUIDE.md)
- **Testing help:** [DEPLOYMENT_TEST.md](./DEPLOYMENT_TEST.md)

---

**Remember:** Make these changes AFTER downloading the assets, not before!
