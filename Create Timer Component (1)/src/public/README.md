# Public Assets Directory

This directory contains static assets that are served directly by Vite.

## Required Assets

Create an `assets/` subdirectory and place the following images:

```
public/
└── assets/
    ├── focus-strasse-logo.png       (Logo - top left corner)
    ├── mountain-illustration.png    (Mountains ambient background)
    └── forest-illustration.png      (Forest ambient background)
```

## How to Add Assets

1. Export images from Figma Make (see [../ASSET_EXPORT_INSTRUCTIONS.md](../ASSET_EXPORT_INSTRUCTIONS.md))
2. Create `assets/` folder here: `mkdir assets`
3. Place the 3 images in `public/assets/`

## Asset Details

| File | Usage | Recommended Size | Format |
|------|-------|------------------|--------|
| `focus-strasse-logo.png` | Logo in top-left corner | ~200x60px | PNG (transparent) |
| `mountain-illustration.png` | Mountains ambient scene | 1920x1080px | PNG or JPG |
| `forest-illustration.png` | Forest ambient scene | 1920x1080px | PNG or JPG |

## Why This Directory?

Files in `public/` are:
- Served at the root path (`/assets/...`)
- Not processed by Vite
- Copied as-is to the build output
- Cached by browsers with appropriate headers

## References in Code

These assets are referenced in:
- `App.tsx` → Logo
- `components/AnimatedBackground.tsx` → Mountain and Forest illustrations

## Deployment

When deploying to Vercel/Netlify/etc., make sure:
1. The `public/assets/` directory exists
2. All 3 images are present
3. Files are committed to Git
4. File names match exactly (case-sensitive!)

For deployment help, see:
- [DEPLOY_TO_VERCEL_START_HERE.md](../DEPLOY_TO_VERCEL_START_HERE.md)
- [ASSET_EXPORT_INSTRUCTIONS.md](../ASSET_EXPORT_INSTRUCTIONS.md)
