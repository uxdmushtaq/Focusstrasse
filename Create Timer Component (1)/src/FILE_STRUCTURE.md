# Project File Structure

Visual guide to understand your Focus Strasse project structure.

---

## 📂 Complete Structure

```
focus-strasse-start-page/
│
├── 📋 Documentation (READ THESE!)
│   ├── 🌟 WHATS_NEW_GITHUB_VERCEL.md       ← What changed for GitHub/Vercel
│   │
│   ├── 🚀 Vercel Deployment Guides
│   │   ├── ⭐ DEPLOY_TO_VERCEL_START_HERE.md    ← START HERE for Vercel!
│   │   ├── VERCEL_DEPLOYMENT_GUIDE.md           ← Detailed Vercel guide
│   │   ├── GITHUB_VERCEL_QUICKSTART.md          ← Quick commands
│   │   ├── DEPLOYMENT_SUMMARY_VERCEL.md         ← Technical summary
│   │   └── DEPLOYMENT_CHECKLIST_VERCEL.md       ← Step-by-step checklist
│   │
│   ├── 🎨 Asset Guides
│   │   ├── ASSET_EXPORT_INSTRUCTIONS.md         ← Export from Figma Make
│   │   ├── ASSET_CHECKLIST.md                   ← Asset list (Siter.io)
│   │   └── VISUAL_ASSET_GUIDE.md                ← Visual export guide
│   │
│   ├── 🏗️ Siter.io Deployment Guides
│   │   ├── START_HERE.md                        ← Siter.io overview
│   │   ├── QUICK_DEPLOY.md                      ← Fast Siter.io deploy
│   │   ├── EXPORT_GUIDE.md                      ← Detailed Siter.io guide
│   │   ├── EXPORT_SUMMARY.md                    ← Siter.io summary
│   │   └── DEPLOYMENT_CHECKLIST.txt             ← Siter.io checklist
│   │
│   ├── 📊 Reference
│   │   ├── README.md                            ← Project overview
│   │   ├── DOCUMENTATION_INDEX.md               ← All docs index
│   │   ├── DEPLOYMENT_PLATFORM_COMPARISON.md    ← Compare platforms
│   │   ├── DEPLOYMENT_TEST.md                   ← Testing guide
│   │   ├── Attributions.md                      ← Credits & licenses
│   │   └── FILE_STRUCTURE.md                    ← This file
│   │
│   └── 📚 Legacy/Guidelines
│       └── guidelines/
│           └── Guidelines.md
│
├── 🎨 Source Code
│   ├── App.tsx                          ← Main app component
│   ├── main.tsx                         ← App entry point
│   ├── index.html                       ← HTML template
│   │
│   ├── components/
│   │   ├── AnimatedBackground.tsx       ← Ambient sound animations
│   │   ├── SearchBar.tsx                ← Google search component
│   │   ├── Timer.tsx                    ← Pomodoro timer
│   │   │
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx    ← Image helper (protected)
│   │   │
│   │   └── ui/                          ← 40+ reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── slider.tsx
│   │       ├── popover.tsx
│   │       └── ... (37 more)
│   │
│   └── styles/
│       └── globals.css                  ← Global styles + Tailwind
│
├── 🖼️ Assets (YOU NEED TO ADD THESE!)
│   └── public/
│       ├── README.md                    ← Assets folder instructions
│       └── assets/                      ← 🚨 CREATE THIS FOLDER
│           ├── focus-strasse-logo.png        ← Export from Figma Make
│           ├── mountain-illustration.png     ← Export from Figma Make
│           └── forest-illustration.png       ← Export from Figma Make
│
├── ⚙️ Configuration
│   ├── package.json                     ← Dependencies & scripts
│   ├── vite.config.ts                   ← Vite build config
│   ├── tsconfig.json                    ← TypeScript config
│   ├── tsconfig.node.json               ← TypeScript Node config
│   ├── vercel.json                      ← Vercel deployment config
│   └── .gitignore                       ← Git ignore rules
│
└── 📦 Build Output (Generated, not committed)
    ├── node_modules/                    ← Dependencies (after npm install)
    └── dist/                            ← Production build (after npm run build)
```

---

## 🎯 Important Directories

### `/` (Root)
- Documentation files
- Configuration files
- Package management

### `/components`
Main React components that make up the app:
- `AnimatedBackground.tsx` - All 4 ambient sound animations
- `SearchBar.tsx` - Google search functionality
- `Timer.tsx` - Pomodoro timer with audio controls

### `/components/ui`
40+ reusable UI components:
- Buttons, cards, sliders, popovers
- Built with Radix UI and Tailwind
- Consistent design system

### `/public/assets` ⚠️ ACTION REQUIRED
**This folder needs to be created by you!**

Place 3 images here:
```
public/assets/
├── focus-strasse-logo.png        (Logo)
├── mountain-illustration.png     (Mountains scene)
└── forest-illustration.png       (Forest scene)
```

See: [ASSET_EXPORT_INSTRUCTIONS.md](./ASSET_EXPORT_INSTRUCTIONS.md)

### `/styles`
Global CSS and Tailwind configuration

---

## 📝 Documentation Organization

### Quick Start (Choose One)

**For Vercel/GitHub:**
```
WHATS_NEW_GITHUB_VERCEL.md
        ↓
DEPLOY_TO_VERCEL_START_HERE.md
        ↓
ASSET_EXPORT_INSTRUCTIONS.md
        ↓
Deploy!
```

**For Siter.io:**
```
START_HERE.md
        ↓
QUICK_DEPLOY.md
        ↓
ASSET_CHECKLIST.md
        ↓
Deploy!
```

### By Document Type

**Guides** (How to do something)
- DEPLOY_TO_VERCEL_START_HERE.md ⭐
- VERCEL_DEPLOYMENT_GUIDE.md
- QUICK_DEPLOY.md
- EXPORT_GUIDE.md
- VISUAL_ASSET_GUIDE.md

**Reference** (Look up information)
- README.md
- DOCUMENTATION_INDEX.md
- DEPLOYMENT_PLATFORM_COMPARISON.md
- FILE_STRUCTURE.md (this file)

**Checklists** (Track progress)
- DEPLOYMENT_CHECKLIST_VERCEL.md
- DEPLOYMENT_CHECKLIST.txt
- ASSET_CHECKLIST.md

**Summaries** (Quick overview)
- WHATS_NEW_GITHUB_VERCEL.md
- EXPORT_SUMMARY.md
- DEPLOYMENT_SUMMARY_VERCEL.md

---

## 🗂️ Files by Purpose

### Read Before Deploying
1. **WHATS_NEW_GITHUB_VERCEL.md** - What changed
2. **DEPLOY_TO_VERCEL_START_HERE.md** - Deployment steps
3. **ASSET_EXPORT_INSTRUCTIONS.md** - Get assets

### Reference During Development
- **README.md** - Features and customization
- **App.tsx** - Main app logic
- **components/** - Individual features

### Configuration (Don't usually need to edit)
- **package.json** - Manages dependencies
- **vite.config.ts** - Build configuration
- **vercel.json** - Deployment optimization
- **.gitignore** - What Git ignores

### Generated (Never edit these)
- **node_modules/** - Installed packages
- **dist/** - Production build output

---

## 🎨 Component Hierarchy

```
App.tsx (Main)
├── AnimatedBackground.tsx
│   └── Motion animations for each sound
│       ├── Waves → Ocean waves animation
│       ├── Rain → Rainfall + mist
│       ├── Mountains → Snow + illustration
│       └── Forest → Leaves + illustration
│
├── SearchBar.tsx
│   └── Google search input
│
├── Timer.tsx
│   ├── Timer display
│   ├── Control buttons (Start/Pause/Reset)
│   ├── Duration controls (Up/Down)
│   ├── Progress bar
│   ├── Volume controls
│   │   └── Popover with slider
│   └── Ambient sound selector
│       └── 4 sound buttons
│
└── Footer Links
    └── About, Instagram, Twitter
```

---

## 📦 Asset References

### Where Assets Are Used

**focus-strasse-logo.png**
- Used in: `App.tsx`
- Location: Top-left corner
- Purpose: Branding

**mountain-illustration.png**
- Used in: `components/AnimatedBackground.tsx`
- Location: Bottom of screen (Mountains mode)
- Purpose: Background scenery

**forest-illustration.png**
- Used in: `components/AnimatedBackground.tsx`
- Location: Bottom of screen (Forest mode)
- Purpose: Background scenery

### Asset Paths in Code

```tsx
// In App.tsx
const focusStrasseLogo = '/assets/focus-strasse-logo.png';

// In AnimatedBackground.tsx
const mountainIllustration = '/assets/mountain-illustration.png';
const forestIllustration = '/assets/forest-illustration.png';
```

These paths resolve to files in `public/assets/`.

---

## 🔧 Build Process

### Development Mode
```
npm run dev
    ↓
Vite starts dev server
    ↓
http://localhost:5173
    ↓
Hot reload on save
```

### Production Build
```
npm run build
    ↓
TypeScript compilation
    ↓
Vite builds for production
    ↓
Output to dist/
    ↓
Optimized & minified
```

### Build Output (dist/)
```
dist/
├── index.html                  ← Entry point
├── assets/
│   ├── index-[hash].js        ← Bundled JavaScript
│   ├── index-[hash].css       ← Bundled CSS
│   ├── focus-strasse-logo-[hash].png
│   ├── mountain-illustration-[hash].png
│   └── forest-illustration-[hash].png
└── ... (other optimized assets)
```

---

## 🚫 What's NOT Committed to Git

These are in `.gitignore`:

```
❌ node_modules/        (Too large, reinstall with npm install)
❌ dist/                (Generated, rebuild with npm run build)
❌ .env                 (Secrets, never commit)
❌ .vercel              (Vercel metadata)
❌ *.log               (Log files)
```

---

## ✅ What IS Committed to Git

```
✅ All .tsx/.ts files       (Source code)
✅ package.json            (Dependencies list)
✅ Configuration files     (vite.config.ts, etc.)
✅ public/assets/*         (Your 3 images - after you add them)
✅ Documentation files     (All .md files)
✅ .gitignore             (Git rules)
```

---

## 📊 File Count Summary

- **Documentation**: 20+ files
- **Source Code**: 46 files
  - Main components: 3
  - UI components: 40+
  - Config files: 6
- **Assets needed**: 3 images (you must add)

---

## 🔍 Quick Find

### "Where is the timer logic?"
→ `components/Timer.tsx`

### "Where are the animations?"
→ `components/AnimatedBackground.tsx`

### "Where do I add my logo?"
→ `public/assets/focus-strasse-logo.png`

### "Where's the main app?"
→ `App.tsx`

### "Where are the styles?"
→ `styles/globals.css`

### "Where's the deployment guide?"
→ `DEPLOY_TO_VERCEL_START_HERE.md`

### "Where's the build config?"
→ `vite.config.ts`

### "Where are dependencies listed?"
→ `package.json`

---

## 🎯 Most Important Files

**Must Read:**
1. `DEPLOY_TO_VERCEL_START_HERE.md` - Deployment guide
2. `ASSET_EXPORT_INSTRUCTIONS.md` - Get assets
3. `README.md` - Project overview

**Must Create:**
1. `public/assets/` folder
2. Add 3 images to that folder

**Must Run:**
1. `npm install` - Get dependencies
2. `npm run dev` - Test locally
3. `npm run build` - Build for production

---

## 📱 Responsive Structure

The app is responsive, with these breakpoints defined in Tailwind:

- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px)
- **Desktop**: `md:` (≥ 768px), `lg:` (≥ 1024px)

All components adapt automatically.

---

## 🗺️ Navigation Map

```
Need to deploy?
    ├── To Vercel? → DEPLOY_TO_VERCEL_START_HERE.md
    ├── To Siter.io? → QUICK_DEPLOY.md
    └── Not sure? → DEPLOYMENT_PLATFORM_COMPARISON.md

Need assets?
    └── ASSET_EXPORT_INSTRUCTIONS.md

Want to customize?
    └── README.md → Customization section

Having issues?
    ├── Build errors? → VERCEL_DEPLOYMENT_GUIDE.md → Troubleshooting
    ├── Asset errors? → ASSET_EXPORT_INSTRUCTIONS.md → Troubleshooting
    └── Other issues? → DEPLOYMENT_TEST.md → Common Issues

Want overview?
    └── DOCUMENTATION_INDEX.md
```

---

## 💡 Tips

**Tip 1:** You only need 3 files from `public/assets/`. Everything else is ready.

**Tip 2:** Start with `npm run dev` to test locally before deploying.

**Tip 3:** All documentation is searchable - use Ctrl+F to find topics.

**Tip 4:** The `components/ui/` folder has 40+ components you can reuse for customization.

**Tip 5:** After deployment, you only need to know Git commands for updates.

---

**Need more help?** See [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) for all guides.
