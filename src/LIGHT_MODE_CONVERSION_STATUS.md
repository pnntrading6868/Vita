# VITA Light Mode Conversion Status

## ✅ Completed Files

### Core App Structure
- **App.tsx** - Fully converted to light mode
  - White background
  - Light navigation bars with proper borders
  - Icons using black/40 for inactive, #c6ff00 for active

### Authentication
- **Auth.tsx** - Fully converted to light mode
  - Light hero overlay
  - White/gray button styling
  - Lime green primary CTA maintained

### Home Page
- **Home.tsx** - Fully converted to light mode
  - White background
  - Light cards with shadows
  - Gray-50 for secondary surfaces
  - AI chat interface in light mode
  - Package detail modal in light mode

## 🔄 Remaining Files to Update

### High Priority (Most Visible)
- **CoachesProfile.tsx** - Coaches listing page
- **Calendar.tsx** - Calendar view
- **Profile.tsx** - User profile
- **Messages.tsx** - Messaging interface
- **CoachDetailProfile.tsx** - Individual coach detail
  
### Medium Priority
- **PackageBookingFlow.tsx** - Package booking interface
- **BookingFlow.tsx** - Session booking interface
- **Wallet.tsx** - Wallet/payments

### Lower Priority
- **Map.tsx** - Map view
- **CoachCard.tsx** - Individual coach card component
- **FilterSheet.tsx** - Filter interface
- **GymProfile.tsx** - Gym profile view
- **History.tsx** - History view
- **QuickStats.tsx** - Stats component
- **ReviewCard.tsx** - Review card component

## 🎨 Color Conversion Guide

### Background Colors
- `bg-[#0f0f0f]` → `bg-white`
- `bg-[#1a1a1a]` → `bg-gray-50`
- `bg-white/5` → `bg-gray-50` or `bg-white with border-black/10`
- `bg-white/10` → `bg-gray-100`

### Text Colors
- `text-white` → `text-[#1a1a1a]` or `text-gray-900`
- `text-white/90` → `text-[#1a1a1a]`
- `text-white/70` → `text-gray-600`
- `text-white/60` → `text-gray-600`
- `text-white/50` → `text-gray-500`
- `text-white/40` → `text-gray-400`

### Border Colors
- `border-white/10` → `border-black/10` or `border-gray-200`
- `border-white/20` → `border-gray-300`
- `border-gray-800` → `border-gray-200`

### Shadows
- `shadow-[0_4px_16px_rgba(0,0,0,0.X)]` → `shadow-md` or `shadow-lg`
- Black shadows → Light gray shadows (use Tailwind's built-in shadows)
- `drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]` → `drop-shadow-sm` or remove

### Interactive States
- `hover:bg-white/[0.07]` → `hover:bg-gray-100`
- `hover:bg-gray-800` → `hover:bg-gray-100`
- `bg-white/5` (cards) → `bg-white` with `border border-black/10 shadow-sm`

### Accent Color (KEEP AS IS!)
- `bg-[#c6ff00]` - Lime green primary (PRESERVE)
- `text-[#c6ff00]` - Lime green text (PRESERVE)
- `border-[#c6ff00]` - Lime green borders (PRESERVE)

### Special Cases
- Gradient overlays on images: Change from dark to light
  - `from-black/80` → `from-white/80`
  - `to-[#0f0f0f]` → `to-white`
- Backdrop blur backgrounds:
  - `bg-gradient-to-b from-[#0f0f0f]/50` → `bg-white/80`
- Modal/Sheet backgrounds:
  - `bg-[#0f0f0f]` → `bg-white`
  - Overlays: `bg-black/80` → `bg-black/50` (keep some darkness for modals)

## 📝 Pattern Examples

### Before (Dark Mode):
```tsx
<div className="bg-[#0f0f0f] text-white border-white/10">
  <h2 className="text-white/90">Title</h2>
  <p className="text-white/60">Description</p>
  <button className="bg-white/5 hover:bg-white/10 text-white">
    Action
  </button>
</div>
```

### After (Light Mode):
```tsx
<div className="bg-white text-[#1a1a1a] border-black/10">
  <h2 className="text-[#1a1a1a]">Title</h2>
  <p className="text-gray-600">Description</p>
  <button className="bg-gray-50 hover:bg-gray-100 text-[#1a1a1a]">
    Action
  </button>
</div>
```

## 🚀 Quick Replacement Commands

For bulk updates in remaining files, use these find/replace patterns:

1. `bg-[#0f0f0f]` → `bg-white`
2. `bg-[#1a1a1a]` → `bg-gray-50`
3. `text-white/90` → `text-[#1a1a1a]`
4. `text-white/60` → `text-gray-600`
5. `text-white/40` → `text-gray-400`
6. `border-white/10` → `border-black/10`
7. `bg-white/5` → `bg-gray-50`
8. `hover:bg-white/10` → `hover:bg-gray-100`

## ⚠️ Important Notes

- Always test components after conversion
- Maintain lime green (#c6ff00) for all primary actions and accents
- Use Tailwind's built-in shadow utilities instead of custom shadows
- Ensure proper contrast for accessibility
- Images with dark overlays may need adjustment
