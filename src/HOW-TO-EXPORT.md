# 📥 How to Export VITA App from Figma Make

## Step-by-Step Export Instructions

### Method 1: Download from Figma Make (Easiest)

1. **Click the Menu Button** (top-right of Figma Make interface)
   
2. **Select "Download Project"** or **"Export"**
   
3. **Save the ZIP file** to your computer
   
4. **Extract the ZIP file**
   - Windows: Right-click → "Extract All"
   - Mac: Double-click the ZIP file
   
5. **You now have your project folder!**

---

### Method 2: Copy Files Manually

If download isn't available, manually copy these files:

```
Required Files:
├── App.tsx
├── package.json
├── vite.config.ts (or similar)
├── tsconfig.json
├── index.html
├── components/
│   └── [all .tsx files]
├── styles/
│   └── globals.css
└── public/ (if exists)
```

---

## 🚀 After Export - Quick Start

### 1. Open Terminal/Command Prompt

Navigate to your project folder:
```bash
cd path/to/vita-sports-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Locally
```bash
npm run dev
```

Open your browser to `http://localhost:5173` to verify everything works.

### 4. Deploy to Vercel

Choose your preferred method:

#### Option A: Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```

#### Option B: GitHub + Vercel (Best for Version Control)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vita-app.git
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new) and import your GitHub repo.

#### Option C: Drag & Drop
1. Build your project: `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the project folder to Vercel

---

## 📂 Expected Project Structure After Export

```
vita-sports-app/
├── App.tsx                      ✅ Main application
├── package.json                 ✅ Dependencies
├── vite.config.ts              ✅ Vite configuration
├── tsconfig.json               ✅ TypeScript config
├── index.html                  ✅ HTML entry point
├── components/
│   ├── BookingFlow.tsx         ✅ Booking system
│   ├── CoachCard.tsx           ✅ Coach cards
│   ├── CoachesProfile.tsx      ✅ Coaches listing
│   ├── FilterSheet.tsx         ✅ Sports filter with images
│   ├── GymProfile.tsx          ✅ Gym details with coaches
│   ├── History.tsx             ✅ Performance tracking
│   ├── Map.tsx                 ✅ Interactive map
│   ├── Messages.tsx            ✅ Chat interface
│   ├── Profile.tsx             ✅ User profile
│   ├── QuickStats.tsx          ✅ Statistics
│   ├── ReviewCard.tsx          ✅ Reviews
│   ├── Wallet.tsx              ✅ Deposit system
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       └── [shadcn components]
├── styles/
│   └── globals.css             ✅ Tailwind v4 + custom styles
└── public/                     (optional assets)
```

---

## ✅ Verification After Export

Run this checklist to ensure everything exported correctly:

### 1. File Integrity Check
```bash
# Check if all components exist
ls components/

# Should show:
# BookingFlow.tsx
# CoachCard.tsx
# CoachesProfile.tsx
# FilterSheet.tsx
# GymProfile.tsx
# History.tsx
# Map.tsx
# Messages.tsx
# Profile.tsx
# QuickStats.tsx
# ReviewCard.tsx
# Wallet.tsx
# figma/
# ui/
```

### 2. Dependencies Check
```bash
npm install
```

Should install without errors:
- react
- react-dom
- lucide-react
- tailwindcss
- typescript
- vite

### 3. Build Check
```bash
npm run build
```

Should complete successfully and create a `dist/` folder.

### 4. Preview Check
```bash
npm run dev
```

Browser should open to working app at `http://localhost:5173`

---

## 🔍 Common Issues After Export

### Issue: "Module not found" errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
**Solution:**
Check `tsconfig.json` exists and run:
```bash
npm install -D typescript @types/react @types/react-dom
```

### Issue: Tailwind not working
**Solution:**
Verify `styles/globals.css` exists and is imported in `App.tsx`:
```tsx
import './styles/globals.css';
```

### Issue: Images not loading
**Solution:**
Check internet connection. Images load from Unsplash CDN (requires internet).

---

## 📦 Files to Check After Export

### Critical Files (Must Exist):
- ✅ `App.tsx` - Main application
- ✅ `package.json` - Dependencies
- ✅ `styles/globals.css` - Styling
- ✅ `components/` folder - All components
- ✅ `index.html` - Entry point

### Configuration Files (Usually Auto-Generated):
- `vite.config.ts` or `vite.config.js`
- `tsconfig.json`
- `tsconfig.node.json`

### Not Needed (Can Delete):
- ❌ `.git/` folder (if exists)
- ❌ `node_modules/` (will reinstall)
- ❌ `dist/` or `build/` (will rebuild)

---

## 🎯 Quick Deploy Checklist

After export, follow these steps in order:

1. [ ] Extract ZIP file
2. [ ] Open terminal in project folder
3. [ ] Run `npm install`
4. [ ] Run `npm run dev` to test
5. [ ] Verify app works locally
6. [ ] Close dev server (Ctrl+C)
7. [ ] Run `vercel` to deploy
8. [ ] Visit your live URL!

---

## 📞 Support

### Build fails?
- Check Node.js version: `node -v` (should be 18+)
- Clear cache: `rm -rf node_modules && npm install`

### Deploy fails?
- Build locally first: `npm run build`
- Check Vercel logs in dashboard

### Need help?
- See `DEPLOYMENT-GUIDE.md` for detailed instructions
- See `VERIFICATION-CHECKLIST.md` for feature testing

---

## 🎉 Success!

Once exported and deployed, your VITA Sports Fitness App will be live at:

**URL Format:** `https://[your-project-name].vercel.app`

**Typical deployment time:** 2-3 minutes

---

## 📝 Next Steps After Export

1. ✅ Export from Figma Make
2. ✅ Extract files
3. ✅ Install dependencies (`npm install`)
4. ✅ Test locally (`npm run dev`)
5. ✅ Deploy to Vercel (`vercel`)
6. 🎉 Share your live app!

---

**Your VITA app is ready to go live!** 🚀

For detailed deployment instructions, see: `DEPLOYMENT-GUIDE.md`
