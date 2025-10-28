# VITA Sports Fitness App

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![Platform](https://img.shields.io/badge/platform-web-blue)
![Framework](https://img.shields.io/badge/framework-React%2018-61dafb)
![Styling](https://img.shields.io/badge/styling-Tailwind%20v4-38bdf8)

A premium, high-tech sports fitness application with a dark theme and vibrant lime green accents. Built for world-class user experience with comprehensive coaching, facility discovery, and performance tracking features.

---

## 🎯 Overview

**VITA** is a cutting-edge sports fitness platform that connects athletes with professional coaches, helps discover training facilities, tracks performance, and manages bookings with an innovative wallet system.

### Design Philosophy
- **Premium Sporty Aesthetic** - Inspired by Uber and Airbnb
- **Dark Theme** - #0f0f0f background for modern appeal
- **Lime Green Accents** - #c6ff00 for vibrant highlights
- **Mobile-First** - Optimized for smartphone experience
- **Typography** - Inter font with negative letter-spacing
- **5-Unit Spacing** - Consistent, precise design system

---

## ✨ Key Features

### 🏆 Five Main Tabs

1. **Messages** 💬
   - Chat with coaches and friends
   - Group conversations
   - Real-time messaging interface

2. **Coaches** 👥
   - Browse 10+ professional coaches
   - Full-screen immersive profile cards
   - Filter by 14 sports (with images)
   - Ratings, certifications, pricing
   - One-tap booking

3. **Map** 🗺️
   - Fully interactive Google Maps-style interface
   - 16 facility types (gyms, courts, studios)
   - Gym profiles with equipment lists
   - Available coaches at each location
   - Pan, zoom, filter locations

4. **History** 📊
   - Performance tracking
   - Session history
   - Progress metrics
   - Achievement badges

5. **Profile** 👤
   - User settings
   - Preferences
   - Account management

### 💰 Wallet System
- Binance-style deposit interface
- Bank transfer, debit & credit card support
- Transaction history
- Balance management
- Accessible via central nav button

### 🎯 Advanced Booking
- **Unlimited time slot selection**
- **Price calculated after time selection**
- **Package purchases with deposits**
- **Flexible cancellation** (20% cash fee / 0% token conversion)
- **Up to 15% package discounts**

### 🏋️ Sports Supported (14 Total)

**Combat Sports:**
- Boxing
- Muay Thai
- MMA
- BJJ

**Racquet Sports:**
- Tennis
- Pickleball
- Paddle
- Badminton

**Strength & Fitness:**
- Strength & Conditioning
- Weightlifting
- Crossfit

**Wellness & Recovery:**
- Yoga
- Pilates
- Sports Therapy

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **UI Components:** Shadcn/ui
- **Images:** Unsplash CDN
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

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

---

## 🚀 Deployment

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Detailed instructions:** See `DEPLOYMENT-GUIDE.md`

---

## 📂 Project Structure

```
vita-sports-app/
├── App.tsx                      # Main app & navigation
├── components/
│   ├── BookingFlow.tsx          # Multi-slot booking system
│   ├── CoachCard.tsx            # Coach profile cards
│   ├── CoachesProfile.tsx       # Coaches listing & filtering
│   ├── FilterSheet.tsx          # Sports filter with images
│   ├── GymProfile.tsx           # Facility details with coaches
│   ├── History.tsx              # Performance tracking
│   ├── Map.tsx                  # Interactive facility map
│   ├── Messages.tsx             # Chat interface
│   ├── Profile.tsx              # User profile & settings
│   ├── QuickStats.tsx           # Performance statistics
│   ├── ReviewCard.tsx           # Review components
│   ├── Wallet.tsx               # Deposit & wallet system
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                      # Shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── [40+ components]
├── styles/
│   └── globals.css              # Tailwind v4 + custom styles
└── package.json
```

---

## 🎨 Design System

### Colors
```css
Background: #0f0f0f (Pure dark)
Accent:     #c6ff00 (Lime green)
Cards:      #1a1a1a (Dark gray)
Borders:    rgba(255,255,255,0.08)
Text:       #ffffff (Primary)
            #9ca3af (Secondary)
```

### Typography
```css
Font Family:    Inter
Letter Spacing: -0.02em to -0.005em (negative)
Spacing System: 5px increments (5, 10, 15, 20, 25...)
Border Radius:  16px-24px (rounded-[16px])
```

### Components
- **Glassmorphism** on map overlays
- **Gradient overlays** on images
- **Smooth transitions** (200ms)
- **Hover states** on all interactive elements
- **Shadow effects** with lime green glow

---

## 🎯 Features Breakdown

### Coach Profiles
- ✅ Professional photos
- ✅ Star ratings & reviews
- ✅ Certifications & credentials
- ✅ Hourly rate display
- ✅ Experience years
- ✅ Specialty tags
- ✅ Location & distance
- ✅ Bio & background

### Gym Profiles
- ✅ 4-photo galleries
- ✅ Facility information
- ✅ Equipment lists (8+ items)
- ✅ Amenities (Spa, Pool, Sauna, etc.)
- ✅ Operating hours
- ✅ Contact details
- ✅ 6 coaches per location
- ✅ Get Directions / Call buttons

### Interactive Map
- ✅ Pan & zoom controls
- ✅ 16 facility types
- ✅ Facility markers
- ✅ Filter by category
- ✅ Map/List view toggle
- ✅ Distance-based search
- ✅ Click markers for details

### Filter System
- ✅ **Visual sport selection** with images
- ✅ 4 categories organized
- ✅ Distance slider (1-50km)
- ✅ Location chips
- ✅ Price range inputs
- ✅ Rating filter
- ✅ Apply/Reset actions

---

## 📱 Responsive Design

- **Mobile First** - Optimized for 375px-428px
- **Tablet Ready** - Scales to larger screens
- **Desktop Centered** - Max-width container
- **Touch Optimized** - Large tap targets
- **Safe Area** - Proper padding for notches

---

## 🔧 Configuration

### Vite Config (Auto-detected by Vercel)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### No Environment Variables Required
All features work out-of-the-box. No API keys needed for basic functionality.

---

## ✅ Testing Checklist

### After Deployment
- [ ] Test all 5 navigation tabs
- [ ] Open wallet modal (center button)
- [ ] Apply sport filters
- [ ] View coach profiles
- [ ] Click map markers
- [ ] Open gym profiles
- [ ] View coaches at facilities
- [ ] Test booking flow
- [ ] Check all images load
- [ ] Verify mobile responsiveness

---

## 📚 Documentation

- **[HOW-TO-EXPORT.md](HOW-TO-EXPORT.md)** - Export from Figma Make
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Complete deployment instructions
- **[VERIFICATION-CHECKLIST.md](VERIFICATION-CHECKLIST.md)** - Feature verification

---

## 🐛 Known Limitations

- **Frontend Only** - No real backend (uses mock data)
- **No Authentication** - Login is simulated
- **No Real Payments** - Payment system is UI-only
- **Static Coach Data** - Coaches are hardcoded
- **No Real-time Chat** - Messages are mock UI

*Perfect for prototyping, presentations, and portfolio projects!*

---

## 🚀 Performance

### Expected Metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** 90+
- **Bundle Size:** ~500KB (gzipped)

### Optimizations
- ✅ Lazy-loaded components
- ✅ Optimized images via Unsplash CDN
- ✅ Tree-shaken Tailwind CSS
- ✅ Code splitting
- ✅ Fast navigation

---

## 🎯 Use Cases

- **Portfolio Projects** - Showcase design & development skills
- **Client Presentations** - Demo fitness app concepts
- **Prototyping** - Test UX flows before backend development
- **Design System Reference** - Study modern UI patterns
- **Learning Resource** - Study React + Tailwind architecture

---

## 📝 License

This project was created with Figma Make. Feel free to use as a template for your own projects.

---

## 🤝 Credits

- **Design System:** Custom VITA aesthetic
- **Icons:** Lucide React
- **Images:** Unsplash
- **UI Components:** Shadcn/ui
- **Fonts:** Google Fonts (Inter)

---

## 🎉 Quick Start Summary

1. **Export** from Figma Make
2. **Extract** the project files
3. **Install:** `npm install`
4. **Test:** `npm run dev`
5. **Deploy:** `vercel`
6. **Live!** 🚀

---

## 📞 Support

For deployment help, see:
- `HOW-TO-EXPORT.md` - Export instructions
- `DEPLOYMENT-GUIDE.md` - Vercel deployment
- `VERIFICATION-CHECKLIST.md` - Testing guide

---

**Built with ❤️ using Figma Make**

**Status:** ✅ Production Ready
**Last Updated:** 2025-10-24
**Version:** 1.0.0
