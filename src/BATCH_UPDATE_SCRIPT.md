# Batch Update Script for Light Mode Conversion

## Quick Find & Replace Patterns

Run these find & replace operations across all `.tsx` files in `/components`:

### Background Colors
1. `bg-[#0f0f0f]` → `bg-white`
2. `bg-[#1a1a1a]` → `bg-gray-50`
3. `bg-white/5` → `bg-gray-50`
4. `bg-white/10` → `bg-gray-100`
5. `bg-gray-800/30` → `bg-gray-100`
6. `bg-gray-800/20` → `bg-gray-100`
7. `bg-gray-800` → `bg-gray-100`

### Text Colors
1. `text-white"` → `text-[#1a1a1a]"`
2. `text-white ` → `text-[#1a1a1a] `
3. `text-white/90` → `text-[#1a1a1a]`
4. `text-white/70` → `text-gray-600`
5. `text-white/60` → `text-gray-600`
6. `text-white/50` → `text-gray-500`
7. `text-white/40` → `text-gray-400`
8. `text-gray-300` → `text-gray-700`
9. `text-gray-400` → `text-gray-600` (when used for body text)
10. `text-gray-500` → `text-gray-500` (keep as is)
11. `text-gray-700` → `text-gray-400`

### Border Colors
1. `border-white/10` → `border-black/10`
2. `border-white/20` → `border-gray-300`
3. `border-gray-800/30` → `border-black/10`
4. `border-gray-800/20` → `border-black/10`
5. `border-gray-800` → `border-gray-200`
6. `border-gray-700` → `border-gray-200`

### Hover States
1. `hover:bg-white/10` → `hover:bg-gray-100`
2. `hover:bg-white/[0.07]` → `hover:bg-gray-100`
3. `hover:bg-gray-800/30` → `hover:bg-gray-100`
4. `hover:bg-gray-800` → `hover:bg-gray-100`
5. `hover:bg-[#222222]` → `hover:bg-gray-100`
6. `hover:text-white/60` → `hover:text-gray-600`
7. `hover:border-gray-700` → `hover:border-gray-300`

### Shadows
1. `shadow-[0_4px_16px_rgba(0,0,0,0.3)]` → `shadow-md`
2. `shadow-[0_4px_16px_rgba(0,0,0,0.4)]` → `shadow-md`
3. `shadow-[0_8px_32px_rgba(0,0,0,0.4)]` → `shadow-lg`
4. `shadow-black/20` → `shadow-sm`
5. `drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]` → `` (remove)
6. `drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]` → `` (remove)

### Gradient Overlays
1. `from-[#0f0f0f]/70` → `from-white/80`
2. `to-[#0f0f0f]/90` → `to-white/95`
3. `via-[#0f0f0f]/50` → `via-white/70`
4. `from-[#0f0f0f]` → `from-white`
5. `to-[#0f0f0f]` → `to-white`
6. `bg-[#0f0f0f]/40` → `bg-white/60`
7. `from-transparent via-transparent to-[#0f0f0f]` → `from-transparent via-transparent to-white`

### Backdrop/Modal Overlays
1. `bg-black/80 backdrop-blur` → `bg-black/50 backdrop-blur`
2. `bg-black/70 backdrop-blur` → `bg-black/40 backdrop-blur`

### Special Colors (KEEP LIME GREEN!)
- DO NOT CHANGE: `bg-[#c6ff00]`, `text-[#c6ff00]`, `border-[#c6ff00]`
- DO NOT CHANGE: `#b5e600`, `#d4ff00` (lime green variations)

### Icon Colors
1. `text-white` strokeWidth` → `text-[#1a1a1a]` strokeWidth`
2. `text-white"` className` → `text-[#1a1a1a]"` className`
3. `text-black` (in buttons on lime green) → `text-[#1a1a1a]`

### Active/Selected States
When something is selected/active with lime green:
- `text-black` → `text-[#1a1a1a]` (for text on lime green backgrounds)

## Files Requiring Manual Review

These files have complex patterns that may need manual adjustment:

1. **BookingFlow.tsx** - Sheet backgrounds, time slot grids
2. **PackageBookingFlow.tsx** - Multi-step booking interface
3. **CoachDetailProfile.tsx** - Full-screen coach profiles
4. **Messages.tsx** - Chat interface with bubbles
5. **Map.tsx** - Map overlays and cards
6. **GymProfile.tsx** - Gym detail view
7. **History.tsx** - History cards and stats
8. **FilterSheet.tsx** - Filter interface
9. **CoachCard.tsx** - Individual coach cards
10. **ReviewCard.tsx** - Review cards
11. **QuickStats.tsx** - Stats components

## Automated Replacement Order

Run replacements in this order to avoid conflicts:

1. First: All `bg-[#0f0f0f]` replacements
2. Second: All `bg-[#1a1a1a]` replacements
3. Third: All `text-white` variations (longest to shortest)
4. Fourth: All border colors
5. Fifth: All hover states
6. Sixth: All shadows
7. Last: Manual review of gradients and special cases

## Testing Checklist

After batch updates, test:
- [ ] Navigation visibility and readability
- [ ] Button hover states
- [ ] Card shadows and borders
- [ ] Text contrast (ensure accessibility)
- [ ] Modal/sheet backgrounds
- [ ] Active states (lime green preserved)
- [ ] Icon visibility
- [ ] Input fields
- [ ] Loading states
