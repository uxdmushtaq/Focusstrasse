# Focus Strasse - Chrome-Style Start Page

A beautiful, minimal start page combining a Google search bar with a Pomodoro timer and immersive ambient sounds.

![Focus Strasse](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)

> 🚀 **Ready to Deploy?** See [DEPLOY_TO_VERCEL_START_HERE.md](./DEPLOY_TO_VERCEL_START_HERE.md) for 5-minute deployment to Vercel!  
> 📚 **New to the project?** Check [WHATS_NEW_GITHUB_VERCEL.md](./WHATS_NEW_GITHUB_VERCEL.md) for what's changed.

## ✨ Features

### 🔍 Smart Search
- Minimal, subtle search bar
- Opens Google search on Enter
- Clean, distraction-free design

### ⏱️ Pomodoro Timer
- Customizable duration (5-90 minutes in 5-minute increments)
- Horizontal progress bar
- Start/Pause/Reset controls
- Visual feedback with time display
- Automatic ambient sound selection on first start

### 🎵 Ambient Sounds
4 immersive soundscapes with animated backgrounds:
- **Beach Waves** - Rolling ocean waves with foam particles
- **Rain** - Gentle rainfall with layered mist
- **Mountains** - Snowy peaks with falling snow
- **Forest** - Peaceful woods with fireflies and floating leaves

Each sound includes:
- Click-to-toggle selection
- Volume control with slider
- Mute/unmute button
- Continuous playback (not just during timer)

### 🎨 Dynamic UI
- Time-based greeting
- Current date display
- Weather widget (temperature + icon)
- Responsive design
- Animated backgrounds for each ambient sound
- Footer links that adapt color based on selected sound

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd focus-strasse

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
focus-strasse/
├── public/
│   └── assets/              # Images and static assets
├── components/
│   ├── AnimatedBackground.tsx  # Ambient sound animations
│   ├── SearchBar.tsx          # Google search component
│   ├── Timer.tsx              # Pomodoro timer component
│   └── ui/                    # Reusable UI components
├── styles/
│   └── globals.css            # Global styles & Tailwind config
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.html                 # HTML template
```

## 🎨 Customization

### Change Default Timer Duration
Edit `App.tsx`:
```tsx
const [timerDuration, setTimerDuration] = useState(25 * 60); // Change 25 to desired minutes
```

### Modify Ambient Sounds
Edit `components/Timer.tsx` to change audio sources or add new sounds:
```tsx
const whiteNoiseOptions: WhiteNoiseOption[] = [
  {
    id: "waves",
    label: "Beach Waves",
    icon: Waves,
    audioUrl: "YOUR_AUDIO_URL_HERE",
  },
  // Add more sounds...
];
```

### Adjust Weather Display
Edit `App.tsx` to integrate a real weather API:
```tsx
// Replace mock data with API call
const temperature = 22; // Replace with API response
```

### Customize Footer Links
Edit `App.tsx` footer section:
```tsx
<a href="https://your-link.com" ...>
  Your Link
</a>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Quick Start:** See [GITHUB_VERCEL_QUICKSTART.md](./GITHUB_VERCEL_QUICKSTART.md) for 5-minute deployment.

**Detailed Guide:** See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for comprehensive instructions.

**Quick steps:**
1. Export 3 image assets from Figma Make
2. Place in `public/assets/` folder
3. Push to GitHub: `git init && git add . && git commit -m "Initial commit"`
4. Create repository on GitHub and push
5. Import project in Vercel dashboard
6. Deploy! 🚀

### Deploy to Siter.io

See [EXPORT_GUIDE.md](./EXPORT_GUIDE.md) for Siter.io-specific instructions.

### Other Platforms

The app works on any static hosting platform:
- **Vercel**: Instant deployment from GitHub (recommended)
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Use `vite-plugin-gh-pages`
- **Cloudflare Pages**: Connect GitHub repo
- **Railway**: Direct GitHub integration

## 🔊 Audio Sources

Ambient sounds are hosted on public CDNs:
- **Beach Waves**: Mixkit Sound Effects
- **Rain**: Mixkit Sound Effects
- **Mountains**: Freesound (ID: 829001)
- **Forest**: Freesound (ID: 347753)

See [Attributions.md](./Attributions.md) for full credits.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first CSS
- **Lucide React** - Icon library
- **Motion** - Animation library (Framer Motion successor)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Check the [EXPORT_GUIDE.md](./EXPORT_GUIDE.md) for deployment help

---

**Made with ❤️ for focused work sessions**
