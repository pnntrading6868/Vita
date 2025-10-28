# DARK MODE REVERT SCRIPT

## Quick Find & Replace Patterns (Reverse Light Mode)

Run these find & replace operations across all `.tsx` files to revert to dark mode:

### Background Colors (REVERSE ORDER - Light to Dark)
1. `className="h-screen w-screen bg-white` → `className="h-screen w-screen bg-[#0f0f0f]`
2. `className="h-full bg-white` → `className="h-full bg-[#0f0f0f]`
3. `className="min-h-screen bg-white` → `className="min-h-screen bg-[#0f0f0f]`
4. `bg-white/80 backdrop-blur` → `bg-[#0f0f0f]/80 backdrop-blur`
5. `bg-white/95 backdrop-blur` → `bg-[#0f0f0f]/95 backdrop-blur`
6. ` bg-white"` → ` bg-[#0f0f0f]"`
7. ` bg-white ` → ` bg-[#0f0f0f] `
8. `bg-gray-50"` → `bg-[#1a1a1a]"`
9. `bg-gray-50 ` → `bg-[#1a1a1a] `
10. `bg-gray-100` → `bg-gray-800/30`

### Text Colors (Light to Dark)
1. `text-\[#1a1a1a\]` → `text-white`
2. `text-gray-700` → `text-gray-300`
3. `text-gray-600` → `text-gray-400`
4. When on white/gray-50 backgrounds: `text-gray-500` → `text-gray-500` (keep)
5. When in secondary text: `text-gray-400` → `text-white/40`

### Border Colors (Light to Dark)
1. `border-black/10` → `border-gray-800/30`
2. `border-gray-300` → `border-gray-700`
3. `border-gray-200` → `border-gray-800/30`
4. `border-white/10` → `border-white/10` (keep on dark bg)

### Hover States (Light to Dark)
1. `hover:bg-gray-100` → `hover:bg-gray-800/30`
2. `hover:bg-gray-50` → `hover:bg-white/10`
3. `hover:text-gray-600` → `hover:text-white/60`
4. `hover:border-gray-300` → `hover:border-gray-700`

### Icon Colors (Light to Dark)
1. `text-\[#1a1a1a\]" strokeWidth` → `text-white" strokeWidth`
2. `text-black/40` → `text-white/40` (in navigation)

### Shadows (Light to Dark)
1. `shadow-sm` → Remove or use `shadow-[0_4px_16px_rgba(0,0,0,0.3)]`
2. `shadow-md` → `shadow-[0_4px_16px_rgba(0,0,0,0.3)]`
3. `shadow-lg` → `shadow-[0_8px_32px_rgba(0,0,0,0.4)]`
4. `shadow-\[0_-4px_16px_rgba\(0,0,0,0\.05\)\]` → `shadow-[0_-4px_16px_rgba(0,0,0,0.3)]`

### Gradient Overlays (Light to Dark)
1. `from-white/80 via-white/60 to-white/90` → `from-[#0f0f0f]/70 via-[#0f0f0f]/50 to-[#0f0f0f]/90`
2. `bg-white/50` → `bg-[#0f0f0f]/40`
3. `from-transparent via-transparent to-white` → `from-transparent via-transparent to-[#0f0f0f]`

### Specific Elements

#### Auth.tsx
- Hero overlay: `from-white/80 via-white/60 to-white/90` → `from-[#0f0f0f]/70 via-[#0f0f0f]/50 to-[#0f0f0f]/90`
- Secondary background: `bg-white/50` → `bg-[#0f0f0f]/40`
- Logo text: `text-[#1a1a1a]` → `text-white` + add `drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`
- Subtitle: `text-[#1a1a1a]/60` → `text-white/60` + add `drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`
- Sign up coach button: `bg-white hover:bg-gray-50 text-[#1a1a1a]` → `bg-white/10 hover:bg-white/[0.15] backdrop-blur-md text-white border-white/20`
- Login link: `text-[#1a1a1a]/60` → `text-white/60`

#### Messages.tsx
- Chat view background: `bg-white` → `bg-[#0f0f0f]`
- Chat header: `bg-white/80 backdrop-blur-xl border-b border-black/10` → `bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-gray-800/30`
- Messages area background: `bg-gray-50` → Remove (transparent/default)
- Message bubbles (received): `bg-white text-[#1a1a1a] border border-black/10 shadow-sm` → `bg-[#1a1a1a] text-white border border-gray-800/30`
- Message bubbles (sent): Keep `bg-[#c6ff00] text-[#1a1a1a]` but change to `text-black`
- Icons: `text-[#1a1a1a]` → `text-white`
- Search input: `bg-gray-50 border border-black/10 text-[#1a1a1a]` → `bg-[#1a1a1a] border border-gray-800/30 text-white`
- Conversation cards: `bg-white border border-black/10 hover:border-gray-300` → `bg-[#1a1a1a] border border-gray-800/30 hover:border-gray-700`

#### Profile.tsx
- Main background: `bg-white` → `bg-[#0f0f0f]`
- Cover gradient: `from-transparent via-transparent to-white` → `from-transparent via-transparent to-[#0f0f0f]`
- Camera button on cover: `bg-white/50 hover:bg-white/70 text-[#1a1a1a]` → `bg-black/50 hover:bg-black/70 text-white`
- Avatar border: `border-white` → `border-[#0f0f0f]`
- Avatar background: `bg-gray-50` → `bg-[#1a1a1a]`
- Name text: `text-[#1a1a1a]` → `text-white`
- Edit button: `bg-gray-50 hover:bg-gray-100 text-[#1a1a1a]` → `bg-[#1a1a1a] hover:bg-[#222222] text-white`
- Bio section border: `border-gray-200` → `border-gray-800/30`
- Bio text: `text-gray-700` → `text-gray-300`
- Stats cards: `bg-gray-50` → `bg-[#1a1a1a]`
- Stats text: `text-[#1a1a1a]` → `text-white`
- Secondary text in stats: `text-gray-600` → `text-gray-400`

#### Calendar.tsx
- Main background: `bg-white` → `bg-[#0f0f0f]`
- View selector: `bg-gray-50 border border-black/10` → `bg-white/5 border border-white/10`
- Inactive tab text: `text-gray-400 hover:text-gray-600` → `text-white/40 hover:text-white/60`
- Active tab: `bg-[#c6ff00] text-[#1a1a1a]` → `bg-[#c6ff00] text-black`
- Navigation buttons: `bg-gray-50 hover:bg-gray-100 border-black/10` → `bg-white/5 hover:bg-white/10 border-white/10`
- Date header: `text-[#1a1a1a]` → `text-white/90`

#### CoachesProfile.tsx
- Main background: `bg-white` → `bg-[#0f0f0f]`
- Fixed header: `bg-white/80 backdrop-blur-xl border-b border-black/10` → `bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-gray-800/20`
- Search/location button: `bg-gray-50 border border-black/10 hover:border-gray-300 text-[#1a1a1a]` → `bg-[#1a1a1a] border border-gray-800/30 hover:border-gray-700/50 text-white`
- Filter results box: `bg-gray-50 border border-black/10 text-gray-600` → `bg-[#1a1a1a] border border-gray-800/30 text-gray-400`
- Section headers: `text-[#1a1a1a]` → `text-white`
- Icons in header: `text-[#1a1a1a]` → `text-white`
- Filter button text: `text-[#1a1a1a]` → `text-black` (on lime green)

### KEEP UNCHANGED (Lime Green Accents)
- All `bg-[#c6ff00]` instances
- All `text-[#c6ff00]` instances
- All `border-[#c6ff00]` instances
- All lime green hover states: `hover:bg-[#d4ff00]`, `hover:bg-[#b5e600]`

### Components to Update Priority Order

1. **App.tsx** - Main container and navigation
2. **Auth.tsx** - Login/signup page
3. **Home.tsx** - Home feed
4. **Calendar.tsx** - Calendar view
5. **Messages.tsx** - Messaging
6. **Profile.tsx** - Profile page
7. **CoachesProfile.tsx** - Coach listing

### Testing After Revert

- [ ] Dark background appears everywhere
- [ ] White text is visible and readable
- [ ] Lime green (#c6ff00) is preserved for accents
- [ ] Navigation icons are white/40 when inactive
- [ ] Cards have dark background with proper borders
- [ ] Hover states work correctly
- [ ] Shadows are visible on dark background
- [ ] No light backgrounds remain
