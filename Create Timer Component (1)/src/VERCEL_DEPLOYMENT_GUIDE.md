# GitHub + Vercel Deployment Guide

This guide will help you deploy your Focus Strasse start page to Vercel via GitHub.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Git installed on your computer

## Step 1: Prepare Your Assets

Before deploying, you need to export the image assets from Figma Make and add them to your project.

### Required Assets

You need to download 3 images that are currently using `figma:asset` imports:

1. **Focus Strasse Logo** (`focus-strasse-logo.png`)
2. **Mountain Illustration** (`mountain-illustration.png`)
3. **Forest Illustration** (`forest-illustration.png`)

### How to Export Assets from Figma Make

1. In Figma Make, right-click on each image in your preview
2. Select "Save image as..." or "Copy image"
3. Save them with the following names:
   - `focus-strasse-logo.png`
   - `mountain-illustration.png`
   - `forest-illustration.png`

### Directory Structure

Create a `public/assets/` directory in your project root and place the images there:

```
your-project/
├── public/
│   └── assets/
│       ├── focus-strasse-logo.png
│       ├── mountain-illustration.png
│       └── forest-illustration.png
├── components/
├── styles/
├── App.tsx
├── package.json
└── ...
```

**Note:** The code has already been updated to reference these paths:
- `/assets/focus-strasse-logo.png`
- `/assets/mountain-illustration.png`
- `/assets/forest-illustration.png`

## Step 2: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
# Initialize a new Git repository
git init

# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit: Focus Strasse start page"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `focus-strasse-start-page`)
5. Keep it public or private (your choice)
6. **Do NOT initialize with README, .gitignore, or license** (you already have these)
7. Click "Create repository"

## Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 5: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and log in
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Find your GitHub repository and click "Import"
5. Configure your project:
   - **Framework Preset:** Vite
   - **Root Directory:** ./ (leave as default)
   - **Build Command:** `npm run build` (should be auto-detected)
   - **Output Directory:** `dist` (should be auto-detected)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? (press enter for default)
# - In which directory is your code located? ./
# - Want to override the settings? No
```

## Step 6: Configure Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the instructions to update your DNS settings

## Environment Variables (If Needed in Future)

If you add environment variables in the future (e.g., for weather API):

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add your variables (e.g., `VITE_WEATHER_API_KEY`)
3. Redeploy your application

## Continuous Deployment

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Provide a unique URL for each deployment

## Updating Your Site

To update your deployed site:

```bash
# Make your changes
# Add and commit them
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Vercel will automatically deploy the changes!
```

## Troubleshooting

### Build Fails

**Issue:** Build fails with "Cannot find module"
**Solution:** Make sure all dependencies are in `package.json`. Run `npm install` locally first to verify.

**Issue:** Build fails with asset errors
**Solution:** Make sure all image files are in `public/assets/` directory.

### Images Not Showing

**Issue:** Images show broken in production but work locally
**Solution:** 
- Verify files are in `public/assets/` directory
- Check file names match exactly (case-sensitive)
- Verify paths start with `/` (e.g., `/assets/image.png`)

### Audio Not Playing

**Issue:** Ambient sounds don't play
**Solution:** This is expected behavior. Browsers block autoplay until user interaction. The audio will play after the user clicks the start button.

## Project Structure for Deployment

Your final structure should look like this:

```
focus-strasse-start-page/
├── .git/
├── .gitignore
├── node_modules/ (not committed)
├── public/
│   └── assets/
│       ├── focus-strasse-logo.png
│       ├── mountain-illustration.png
│       └── forest-illustration.png
├── components/
│   ├── AnimatedBackground.tsx
│   ├── SearchBar.tsx
│   ├── Timer.tsx
│   ├── figma/
│   └── ui/
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Documentation](https://docs.github.com)

## Support

If you encounter issues:
1. Check the Vercel deployment logs in your dashboard
2. Verify all assets are present in `public/assets/`
3. Test the build locally with `npm run build && npm run preview`
4. Check browser console for errors

---

**Deployment Checklist:**

- [ ] Assets exported from Figma Make
- [ ] Assets placed in `public/assets/` directory
- [ ] Git repository initialized
- [ ] Code committed to Git
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Deployment successful (site loads correctly)
- [ ] All images display correctly
- [ ] Timer functionality works
- [ ] Ambient sounds play correctly
- [ ] Search bar redirects to Google
- [ ] Footer links work
