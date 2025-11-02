# Export Guide: Focus Strasse to Siter.io

This guide will help you export your Focus Strasse start page from Figma Make to Siter.io.

> **📌 Note:** The app currently uses `figma:asset` imports which work in Figma Make. When exporting to Siter.io, you'll need to download the assets and update the imports. This guide shows you how!

## 📋 Pre-Export Checklist

### Step 1: Download Assets from Figma Make

You need to download the following image assets that are currently using `figma:asset` imports:

1. **Focus Strasse Logo** 
   - Current path: `figma:asset/5d0b00144ceb6a4df975ac73f6a234f70f784777.png`
   - Save as: `public/assets/focus-strasse-logo.png`

2. **Mountain Illustration**
   - Current path: `figma:asset/169dcb3156cffdabf09ba7849e7d766d3ebba0ab.png`
   - Save as: `public/assets/mountain-illustration.png`

3. **Forest Illustration**
   - Current path: `figma:asset/f04b7834563343ad1e1cdd2465b57c134fd1a0a6.png`
   - Save as: `public/assets/forest-illustration.png`

**How to download assets from Figma Make:**
- Right-click on the images in the preview
- Select "Save image as..." or "Download image"
- Save them with the names specified above

### Step 2: Create Folder Structure

Create the following folder structure in your project:

```
focus-strasse/
├── public/
│   └── assets/
│       ├── focus-strasse-logo.png
│       ├── mountain-illustration.png
│       └── forest-illustration.png
├── components/
│   ├── AnimatedBackground.tsx
│   ├── SearchBar.tsx
│   ├── Timer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── popover.tsx
│       ├── slider.tsx
│       └── utils.ts
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

### Step 3: Update Import Statements

**IMPORTANT:** You need to update the asset imports in your code files.

**File 1: `App.tsx` (around line 8)**

Change from:
```tsx
import focusStrasseLogo from 'figma:asset/5d0b00144ceb6a4df975ac73f6a234f70f784777.png';
```

To:
```tsx
import focusStrasseLogo from '/assets/focus-strasse-logo.png';
```

**File 2: `components/AnimatedBackground.tsx` (around lines 6-7)**

Change from:
```tsx
import mountainIllustration from 'figma:asset/169dcb3156cffdabf09ba7849e7d766d3ebba0ab.png';
import forestIllustration from 'figma:asset/f04b7834563343ad1e1cdd2465b57c134fd1a0a6.png';
```

To:
```tsx
import mountainIllustration from '/assets/mountain-illustration.png';
import forestIllustration from '/assets/forest-illustration.png';
```

**Note:** These files have comments showing exactly what to change.

## 🚀 Deployment to Siter.io

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Focus Strasse start page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Siter.io:**
   - Log in to [Siter.io](https://siter.io)
   - Click "New Site"
   - Select "Import from Git"
   - Choose your GitHub repository
   - Configure build settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`

3. **Deploy:**
   - Click "Deploy Site"
   - Wait for build to complete
   - Your site will be live!

### Option B: Manual Upload

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Siter.io:**
   - Log in to Siter.io
   - Click "New Site"
   - Select "Upload folder"
   - Upload the `dist` folder
   - Your site will be deployed

## 🔧 Local Development

To test your export locally before deploying:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Dependencies Included

- **React 18.3.1** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Motion React** - Animations (formerly Framer Motion)

## 🎨 Ambient Sounds

The ambient sounds use external CDN URLs and will work automatically:
- **Beach Waves:** Mixkit CDN
- **Rain:** Mixkit CDN (preview file)
- **Mountains:** Freesound CDN (Sound ID: 829001)
- **Forest:** Freesound CDN (Sound ID: 347753)

**Note:** If you want to host the audio files yourself for better reliability:
1. Download the audio files from the URLs in `components/Timer.tsx`
2. Place them in `public/assets/sounds/`
3. Update the `audioUrl` paths in the `whiteNoiseOptions` array

## ⚙️ Environment Variables

No environment variables are required for basic functionality. 

If you want to add a real weather API later:
1. Create a `.env` file
2. Add your API key: `VITE_WEATHER_API_KEY=your_key_here`
3. Update the weather fetching logic in `App.tsx`

## 🐛 Troubleshooting

### Build Errors

If you get module not found errors:
```bash
npm install --legacy-peer-deps
```

### TypeScript Errors

If you see TypeScript errors for UI components:
```bash
npm install -D @types/react @types/react-dom
```

### Tailwind Not Working

Make sure `globals.css` is imported in `main.tsx`:
```tsx
import './styles/globals.css';
```

### Assets Not Loading

Check that:
1. Assets are in the `public/assets/` folder
2. Import paths start with `/assets/` (not `./assets/`)
3. File names match exactly (case-sensitive)

## 📞 Support

If you encounter issues:
- Check the Siter.io documentation: https://siter.io/docs
- Review the build logs in Siter.io dashboard
- Ensure all assets are properly uploaded

## ✅ Final Checklist

Before deploying, ensure:
- [ ] All assets downloaded and placed in `public/assets/`
- [ ] `npm install` runs without errors
- [ ] `npm run dev` works locally
- [ ] `npm run build` completes successfully
- [ ] All imports updated from `figma:asset` to `/assets/`
- [ ] Fonts loading correctly (Google Fonts CDN)
- [ ] Audio files playing in local preview

---

**Good luck with your deployment! 🚀**
