# 🧪 Deployment Testing Guide

Use this checklist to verify your deployment is working correctly.

## ✅ Pre-Deployment Tests (Local)

Run these tests BEFORE deploying to Siter.io:

### 1. Asset Check
```bash
# Verify all assets exist
ls -la public/assets/

# Should show:
# - focus-strasse-logo.png
# - mountain-illustration.png
# - forest-illustration.png
```

**Expected**: All 3 files present

---

### 2. Development Server Test
```bash
npm run dev
```

Open http://localhost:5173

**Test Checklist:**
- [ ] Logo appears in top-left corner
- [ ] Current date displays correctly
- [ ] Temperature (22°C) and weather icon show
- [ ] Search bar is visible
- [ ] Timer shows 25:00
- [ ] Up/down arrows work to adjust timer
- [ ] All 4 ambient sound buttons visible

---

### 3. Ambient Sounds Test

**Beach Waves:**
- [ ] Click "Beach Waves" button
- [ ] Button highlights with blue glow
- [ ] Ocean wave sound plays immediately
- [ ] Animated waves appear in background
- [ ] Volume slider controls sound level
- [ ] Mute button works

**Rain:**
- [ ] Click "Rain" button  
- [ ] Rain sound plays immediately
- [ ] Misty background with falling rain appears
- [ ] Sound continues when timer is NOT running

**Mountains:**
- [ ] Click "Mountains" button
- [ ] Mountain ambience plays
- [ ] Mountain illustration appears at bottom
- [ ] Snow particles animate
- [ ] Background has blue/icy tones

**Forest:**
- [ ] Click "Forest" button
- [ ] Forest ambience plays
- [ ] Forest illustration appears at bottom
- [ ] Fireflies and leaves animate
- [ ] Footer links change to WHITE (Forest special case)
- [ ] Background has green tones

---

### 4. Timer Functionality Test

**Basic Timer:**
- [ ] Click "Start" - timer counts down
- [ ] When starting for first time, Rain auto-selects
- [ ] Click "Pause" - timer pauses
- [ ] Click reset button (↻) - returns to initial time
- [ ] Progress bar fills as timer runs

**Duration Controls:**
- [ ] Click up arrow - timer increases by 5 min
- [ ] Click down arrow - timer decreases by 5 min
- [ ] Arrows disabled when timer is running
- [ ] Cannot go below 5 minutes
- [ ] Cannot go above 90 minutes

---

### 5. Search Bar Test
- [ ] Click search bar - it focuses
- [ ] Type "test search"
- [ ] Press Enter
- [ ] Opens Google search in same tab
- [ ] Search query appears in Google

---

### 6. Production Build Test
```bash
npm run build
npm run preview
```

Open http://localhost:4173

**Verify:**
- [ ] All features work same as dev server
- [ ] Assets load correctly
- [ ] No console errors
- [ ] Animations smooth
- [ ] Audio plays

---

## 🌐 Post-Deployment Tests (Siter.io)

After deploying to Siter.io, test these:

### 1. Initial Load
- [ ] Site loads within 3 seconds
- [ ] No 404 errors in console
- [ ] All images load
- [ ] Fonts display correctly (Inter & Orbitron)

### 2. Visual Check
- [ ] Logo visible and crisp
- [ ] Timer displays correctly
- [ ] Search bar styled properly
- [ ] Footer links visible

### 3. Functionality Check
- [ ] Timer starts/pauses/resets
- [ ] All 4 ambient sounds play
- [ ] Volume controls work
- [ ] Search redirects to Google
- [ ] Animations play smoothly

### 4. Mobile Test (Responsive)
Visit site on mobile or use browser dev tools:
- [ ] Layout adapts to mobile
- [ ] All controls accessible
- [ ] Touch interactions work
- [ ] Audio plays on mobile (may require user interaction first)

### 5. Browser Compatibility
Test on:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

### 6. Performance Check
Use browser DevTools:
- [ ] Load time < 3 seconds
- [ ] No JavaScript errors
- [ ] Audio files load progressively
- [ ] No memory leaks (use timer for 5+ minutes)

---

## 🐛 Common Issues & Fixes

### Issue: Logo doesn't appear
**Cause**: Asset not uploaded or wrong path  
**Fix**: 
```bash
# Verify file exists
ls public/assets/focus-strasse-logo.png

# Check import in App.tsx
import focusStrasseLogo from '/assets/focus-strasse-logo.png';
```

---

### Issue: Ambient sounds don't play
**Cause**: Browser autoplay policy  
**Fix**: Click the sound button again (first interaction enables audio)

---

### Issue: Animations laggy
**Cause**: Too many particles on low-end device  
**Fix**: Normal on low-end devices. Animations optimized for modern browsers.

---

### Issue: Forest illustration not showing
**Cause**: File not uploaded  
**Fix**: 
```bash
ls public/assets/forest-illustration.png
# If missing, download from Figma Make
```

---

### Issue: Build fails with module errors
**Cause**: Dependency issues  
**Fix**:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

---

## 📊 Success Criteria

Your deployment is successful if:

✅ **Visual**
- Logo, timer, search bar all visible
- Illustrations appear for Mountains & Forest
- Animations play smoothly

✅ **Functional**
- Timer counts down correctly
- All 4 sounds play and can be toggled
- Volume controls work
- Search redirects to Google

✅ **Performance**
- Initial load < 3 seconds
- No console errors
- Audio plays without issues

✅ **Cross-browser**
- Works on Chrome, Firefox, Safari
- Responsive on mobile

---

## 🎯 Final Verification

Run this complete flow:

1. Open site
2. Wait for logo and content to load
3. Click "Mountains" sound
4. Verify mountain illustration and snow animation
5. Click timer up arrow twice (35 minutes)
6. Click "Start"
7. Verify Rain auto-selects and plays
8. Switch to "Forest"
9. Verify forest illustration and footer turns white
10. Click mute button
11. Verify audio stops
12. Type "test" in search
13. Press Enter
14. Verify Google search opens

If all steps work: **🎉 Deployment successful!**

---

## 📞 Still Having Issues?

1. Check browser console for errors
2. Review [EXPORT_GUIDE.md](./EXPORT_GUIDE.md)
3. Verify [ASSET_CHECKLIST.md](./ASSET_CHECKLIST.md)
4. Check Siter.io deployment logs

**Build logs in Siter.io:**
- Go to your site dashboard
- Click "Deploys"
- Click latest deployment
- Check "Build logs" for errors
