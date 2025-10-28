# VITA - Product Requirements Document
**Version:** 1.0  
**Last Updated:** October 27, 2025  
**Location:** Dubai, UAE

---

## Table of Contents
1. [Product Overview](#product-overview)
2. [Design System](#design-system)
3. [Core Features](#core-features)
4. [User Flows](#user-flows)
5. [Technical Specifications](#technical-specifications)
6. [Component Architecture](#component-architecture)
7. [Data Models](#data-models)

---

## Product Overview

### Product Name
**VITA** (styled as VIT**Λ** with reversed lambda)

### Product Vision
VITA is a premium sports fitness application designed for Dubai residents seeking world-class coaching across 14 different athletic disciplines. The app connects users with expert coaches, provides AI-powered fitness guidance, and delivers a seamless booking and payment experience.

### Target Audience
- Fitness enthusiasts in Dubai, UAE
- Athletes seeking professional coaching
- Individuals looking for structured training programs
- Users interested in multi-sport training packages

### Core Value Proposition
- Access to 31+ verified expert coaches across 14 sports
- AI-powered fitness guidance and program recommendations
- Flexible scheduling with multi-session package options
- Integrated wallet system with multiple payment methods
- Comprehensive progress tracking and performance analytics

---

## Design System

### Brand Identity

#### Color Palette
- **Primary Background:** `#0f0f0f` (Deep black)
- **Primary Accent:** `#c6ff00` (Vibrant lime green)
- **Secondary Accent:** `#b5e600` (Yellow-green)
- **Tertiary Accent:** `#9fd600` (Olive green)
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `rgba(255, 255, 255, 0.6)` (60% white)
- **Text Tertiary:** `rgba(255, 255, 255, 0.4)` (40% white)
- **Border/Divider:** `rgba(255, 255, 255, 0.1)` (10% white)
- **Card Background:** `rgba(255, 255, 255, 0.05)` (5% white)

#### Typography
- **Font Family:** Inter
- **Font Weights:** 200 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)
- **Letter Spacing:** Negative spacing for premium feel
  - Headers: -0.02em to -0.005em
  - Body: -0.003em
  - Buttons: -0.005em
- **Base Font Size:** 16.5px

#### Spacing System
- Uses 5-unit increments (5px, 10px, 15px, 20px, 25px, etc.)
- Consistent padding and margins across components

#### Visual Effects
- **Glassmorphism:** Backdrop blur with semi-transparent backgrounds
- **Drop Shadows:** Strategic use on floating elements and buttons
- **Glows:** Green glow effects on active/selected states
- **Rounded Corners:** 12px-24px for cards and containers

### Logo
- Text: "VIT**Λ**" with reversed lambda (Λ)
- Letter spacing: 0.15em
- Font weight: 200 (Ultra light)
- Color: White with drop shadow

---

## Core Features

### 1. Home Page

#### AI Fitness Guide
- **Float Button:** Positioned bottom-right with green glow effect
- **Features:**
  - Real-time chat interface with VITA AI
  - AI-powered program recommendations
  - Contextual fitness advice
  - Active indicator with pulse animation

#### Location Selector
- **Location:** Top of feed
- **Functionality:**
  - Dropdown selector for 8 Dubai areas
  - Current selection: Dubai Marina (default)
  - Available locations: Dubai Marina, Downtown Dubai, Jumeirah, Business Bay, DIFC, JBR, Palm Jumeirah, Dubai Hills

#### Local Gym Promotions
- **Display:** Horizontal scrolling carousel
- **Content:**
  - Gym images
  - Promotional offers
  - Distance from user location
  - Direct navigation to gym profiles

#### Training Packages
- **Main Heading:** "Built for Progress. Powered by VITΛ."
- **Package Types:**
  1. **Get a 6-Pack in 90 Days**
     - Duration: 90 Days
     - Goal: Sculpted Core & Definition
     - Coaches: 4 (Strength, Cardio, Sports, Recovery)
     - Total Sessions: 90
     - Price: AED 15,200 (with 15% discount)
  2. **Tennis Mastery for Beginners**
     - Duration: 60 Days
     - Goal: From Zero to Rally Ready
     - Sessions: Multiple coaches

#### Package Detail Modal
- **Components:**
  - Full-screen overlay
  - Hero image with gradient overlay
  - Coach team breakdown (clickable)
  - Program highlights
  - Expected results with trophy icon
  - "Start This Program" CTA button
- **Navigation:**
  - Clicking coach cards → Navigate to coach detail profile
  - "Start This Program" → Navigate to package booking flow

### 2. Calendar Tab

#### Views
1. **Day View**
   - Hourly time slots (6 AM - 10 PM)
   - Booked sessions with coach info
   - Available time indicators
   - Real-time current time marker

2. **Week View**
   - 7-day grid layout
   - Compact session cards
   - Sport type indicators
   - Quick navigation between weeks

3. **Month View**
   - Traditional calendar grid
   - Session count dots per day
   - Visual density indicators
   - Month navigation

#### Session Cards
- Coach profile image
- Sport type
- Session time and duration
- Location information
- Quick actions (view details, cancel)

#### Session Management
- Click on session → View full details
- Session details include:
  - Coach profile link
  - Location with map preview
  - Session notes
  - Cancellation policy reminder

### 3. Coaches Profile

#### Sports Selection Grid
- **14 Sports:**
  1. Tennis
  2. Pickleball
  3. Paddle
  4. Badminton
  5. Yoga
  6. Pilates
  7. Strength Training
  8. Weightlifting
  9. CrossFit
  10. Boxing
  11. Muay Thai
  12. MMA
  13. BJJ
  14. Sports Therapy

#### Coach Cards
- **Layout:** Full-screen immersive cards
- **Swipe Interaction:** Horizontal carousel
- **Information Displayed:**
  - Profile image
  - Name and specialty
  - Years of experience
  - Certifications (badges)
  - Rating (out of 5 stars)
  - Review count
  - Client count
  - Hourly rate (AED)
  - Location and distance
  - Bio
  - Reviews (3 most recent)

#### Filtering System
- **Filter Sheet:** Bottom drawer
- **Filter Options:**
  - Location (multiple selection)
  - Sports (multiple selection)
  - Price range (slider: AED 0-200)
  - Minimum rating (0-5 stars)
  - Maximum distance (slider: 0-50 km)

#### Coach Detail Profile
- **Accessed via:** Clicking coach card or coach image in packages
- **Sections:**
  1. **Cover Image & Header**
     - Hero image
     - Profile picture (24px rounded)
     - Name, sport, location
     - Rating and stats
  
  2. **Quick Stats Grid**
     - Years of experience
     - Sessions completed
     - Total reviews
  
  3. **Tabs:**
     - **About:** Bio, specialties, experience, certifications, service area, training gallery
     - **Reviews:** Client testimonials with verification badges
     - **Results:** Client transformations (images, videos, testimonials)
  
  4. **Available Packages**
     - Package name
     - Session count
     - Duration
     - Price (AED)
     - Click to book → Navigate to booking flow

#### Coach Database (31 Coaches)
- Marcus Johnson (Strength & Conditioning)
- Ahmed Al-Rashid (Running & HIIT)
- Elena Rodriguez (Yoga & Mobility)
- Carlos Rivera (Pickleball)
- Jackson Hayes (Boxing)
- Sarah Mitchell (Tennis)
- And 25+ more across all 14 sports

### 4. Messages Tab

#### Conversation List
- **Layout:** Chat list with preview
- **Information per chat:**
  - Coach profile image
  - Coach name
  - Last message preview
  - Timestamp
  - Unread indicator
  - Online status

#### Chat Interface
- **Features:**
  - Full-screen chat view
  - Message bubbles (sent/received)
  - Timestamp grouping
  - Quick replies
  - Attachment support
  - Voice message capability

### 5. Profile Tab

#### Profile Header
- Cover image with camera button
- Profile picture (28x28 rounded)
- Name and username
- Edit profile button
- Bio text
- Location and join date

#### Wallet Integration
- **Prominent Green Button**
  - Gradient: `#c6ff00` to `#b5e600`
  - Shadow: `0_4px_24px_rgba(198,255,0,0.25)`
  - Icon: Wallet icon in black/10 background circle
  - Text: "My Wallet" with subtitle "Manage deposits & funds"
  - Opens wallet in full-screen modal

#### Performance Overview
- **Total Sessions Card**
  - Large featured card
  - Green gradient background
  - Trophy icon
  - Session count with trend indicator

- **Training Hours**
  - Total hours tracked
  - Average per week

- **Secondary Stats Grid (3 columns):**
  - Current streak (flame icon)
  - Average rating (star icon)
  - Active packages (target icon)

#### Weekly Goal Progress
- Progress bar with gradient
- Current vs. target sessions
- Motivational messaging

#### Weekly Activity Chart
- Bar chart (7 days)
- Height-based visualization
- Active vs. inactive days

#### Calories & Performance
- Calories burned (all-time)
- Performance improvement percentage

#### Achievements
- **Grid Layout:** 2 columns
- **Achievement Types:**
  - First Step (complete first session)
  - Week Warrior (3 sessions in one week)
  - Consistency King (7-day streak)
  - Champion (50 total sessions)
- **States:**
  - Unlocked: Green gradient with checkmark
  - Locked: Gray with progress bar

#### Past Coaches
- List of previous coaches
- Total sessions per coach
- Last session date
- Quick navigation to coach profile

#### Training Packages & Sessions Tabs
- **Packages Tab:**
  - Active package progress
  - Completed packages
  - Package details (sessions, dates)
  - Progress percentage bars

- **Sessions Tab:**
  - Recent session history
  - Session details (coach, sport, date, time, duration)
  - Session ratings

### 6. Wallet (Accessed from Profile)

#### Balance Display
- **VITA Balance Card**
  - Gradient green background
  - Large balance display (AED)
  - "Available for sessions" label
  - Shadow with green tint

- **Token Balance Card**
  - Dark background
  - Token count
  - Purpose: Zero-fee cancellations

#### Quick Actions
- Deposit funds
- Transfer funds
- View transaction history

#### Deposit Flow
1. **Enter Amount**
   - Quick amount buttons (50, 100, 200, 500)
   - Custom amount input
   - Continue button

2. **Select Payment Method**
   - Bank Transfer (0% fee)
   - Debit Card (0% fee)
   - Credit Card (2.5% fee)
   - Visual indicators for each method

3. **Deposit Confirmation**
   - Amount summary
   - Payment method
   - Processing fees (if applicable)
   - Total breakdown
   - Bank transfer instructions (if selected)
   - Confirm button

#### Transaction History
- **List Format:**
  - Date
  - Type (deposit/session payment)
  - Amount (+ or -)
  - Status
  - Payment method or coach name

#### Binance-Style Interface
- Clean, minimalist design
- Clear hierarchy
- Real-time balance updates
- Transaction confirmation modals

### 7. Package Booking Flow

#### Step 1: Package Details & Price Breakdown
- **Package Overview:**
  - Package name and duration
  - Total sessions count
  - Discount indicator (15% OFF badge)

- **Coaching Team:**
  - List of assigned coaches
  - Sessions per coach
  - Sport specialization

- **Price Breakdown:**
  - Base price
  - Package discount (-15%)
  - Subtotal
  - VAT (5%)
  - **Total in green**
  - Info banner: Deposit requirement and cancellation policy

- **What's Included:**
  - Personalized training sessions
  - Multiple expert coaches
  - Progress tracking
  - Nutrition guidance
  - 24/7 chat support
  - Flexible scheduling
  - Video technique analysis

#### Step 2: Payment Options
- **Payment Plans:**
  1. **Pay in Full**
     - One-time payment
     - 5% savings bonus
     - Highlighted savings badge

  2. **3-Month Plan**
     - 20% deposit upfront
     - 3 monthly installments
     - 2% convenience fee
     - Monthly breakdown displayed

  3. **6-Month Plan**
     - 20% deposit upfront
     - 6 monthly installments
     - 4% convenience fee
     - Monthly breakdown displayed

- **Payment Method:**
  - VITA Wallet (shows current balance)
  - Credit/Debit Card

- **Payment Summary:**
  - Due today amount
  - Remaining payments (if installment)
  - Total overview

#### Step 3: Schedule Confirmation
- Success confirmation screen
- Calendar icon with animation
- Next steps instructions
- Individual coach booking reminders
- "Complete Purchase" button → Navigate to Calendar

#### Cancellation Policy
- **20% fee** for cash refunds
- **0% fee** for in-app token conversion
- **Maximum 15%** package discounts
- **20% deposit** required for all packages

### 8. Map View

#### Features
- Full-screen map interface
- Coach location markers
- Gym location markers
- Distance calculations
- Filter by sport type
- Back navigation to coaches list

---

## User Flows

### Primary User Flows

#### 1. Discover & Book Package Flow
```
Home → Browse Packages → View Package Details → Click Coach Card → 
View Coach Profile → Return to Package → Start Program → 
Price Breakdown → Select Payment Plan → Select Payment Method → 
Confirm Purchase → Navigate to Calendar
```

#### 2. Find & Book Individual Coach
```
Coaches Tab → Select Sport → Browse Coach Cards → View Coach Profile → 
View Available Packages → Select Package → Booking Flow → Confirmation
```

#### 3. Coach Profile Deep Dive
```
Any Coach Reference → Coach Detail Profile → 
Tabs (About/Reviews/Results) → View Gallery → 
Check Certifications → Read Reviews → View Client Results → 
Book Package → Booking Flow
```

#### 4. Manage Wallet
```
Profile → Click "My Wallet" Button → View Balance → 
Deposit → Enter Amount → Select Method → Confirm → 
View Updated Balance
```

#### 5. Schedule Management
```
Calendar → Select View (Day/Week/Month) → View Sessions → 
Click Session → View Details → Contact Coach / Cancel Session
```

#### 6. AI Fitness Guidance
```
Home → Click AI Button → Chat Interface → Ask Question → 
Receive Recommendation → Apply to Training Plan
```

---

## Technical Specifications

### Technology Stack
- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS v4.0
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **State Management:** React Hooks (useState)

### Performance Requirements
- **Initial Load:** < 2 seconds
- **Page Transitions:** < 300ms
- **Smooth Scrolling:** 60fps
- **Image Loading:** Progressive with fallbacks

### Responsive Design
- **Primary Target:** Mobile (375px - 428px)
- **Max Width:** 448px (28rem) container
- **Safe Area:** iOS safe area inset support
- **Orientation:** Portrait optimized

### Accessibility
- **Contrast Ratios:** WCAG AA compliant
- **Touch Targets:** Minimum 44x44px
- **Screen Reader:** Semantic HTML structure
- **Keyboard Navigation:** Full support

### Browser Support
- **iOS Safari:** 15+
- **Chrome Mobile:** Latest 2 versions
- **Android WebView:** Latest

---

## Component Architecture

### Page Components

#### 1. Home.tsx
- **Props:**
  - `onNavigateToCoach?: (coachId: string) => void`
  - `onStartPackage?: (packageId: string) => void`
- **State:**
  - `selectedLocation: string`
  - `showLocationSelector: boolean`
  - `selectedPackage: Package | null`
  - `aiMessages: Message[]`
  - `isChatOpen: boolean`

#### 2. CoachesProfile.tsx
- **Props:**
  - `selectedSports?: string[]`
  - `onOpenMap?: () => void`
  - `onCoachClick?: (coachId: string) => void`
- **State:**
  - `selectedCoach: number | null`
  - `selectedLocation: string`
  - `filters: FilterState`
  - `displayedCoaches: Coach[]`

#### 3. CoachDetailProfile.tsx
- **Props:**
  - `coachId: string`
  - `onBack: () => void`
  - `onBookPackage?: (packageId: string) => void`
- **State:**
  - `selectedImage: string | null`
  - `activeTab: "about" | "reviews" | "results"`

#### 4. PackageBookingFlow.tsx
- **Props:**
  - `packageData: PackageData`
  - `onBack: () => void`
  - `onComplete: () => void`
- **State:**
  - `step: "breakdown" | "payment" | "schedule"`
  - `selectedPlan: string`
  - `selectedPaymentMethod: string`

#### 5. Calendar.tsx
- **Props:**
  - `onNavigateToCoach?: (coachId: string) => void`
- **State:**
  - `view: "day" | "week" | "month"`
  - `selectedDate: Date`
  - `sessions: Session[]`

#### 6. Profile.tsx
- **State:**
  - `selectedTab: "packages" | "sessions"`
  - `showWallet: boolean`

#### 7. Wallet.tsx
- **Props:**
  - `onBack?: () => void`
- **State:**
  - `view: "main" | "deposit" | "transfer" | "depositMethod" | "depositConfirm"`
  - `depositAmount: string`
  - `selectedMethod: PaymentMethod`

#### 8. Messages.tsx
- **State:**
  - `selectedChat: number | null`
  - `messages: Message[]`

### Shared Components

#### CoachCard.tsx
- Swipeable coach profile card
- Displays coach information
- Integrated review system

#### FilterSheet.tsx
- Bottom drawer filter interface
- Multi-select options
- Range sliders

#### BookingFlow.tsx
- Multi-step booking process
- Payment integration
- Confirmation screens

---

## Data Models

### Coach
```typescript
interface Coach {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  certifications: string[];
  rating: number;
  reviewCount: number;
  clientCount: number;
  hourlyRate: number;
  location: string;
  distance: string;
  bio: string;
  image: string;
  reviews: Review[];
  gallery?: string[];
  packages?: CoachPackage[];
}
```

### Package
```typescript
interface Package {
  id: string;
  title: string;
  duration: string;
  goal: string;
  image: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  coaches: PackageCoach[];
  description: string;
  highlights: string[];
  expectedResults: string[];
  price: number;
}
```

### Session
```typescript
interface Session {
  id: number;
  coachName: string;
  coachImage: string;
  sport: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  rating?: number;
  status: "upcoming" | "completed" | "cancelled";
}
```

### Review
```typescript
interface Review {
  id: string;
  clientName: string;
  clientImage: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
```

### Transaction
```typescript
interface Transaction {
  id: number;
  type: "deposit" | "session" | "refund";
  amount: number;
  date: string;
  status: "pending" | "completed" | "failed";
  method?: string;
  coach?: string;
}
```

### PaymentPlan
```typescript
interface PaymentPlan {
  id: string;
  name: string;
  installments: number;
  upfront: number;
  monthly: number;
  total: number;
  savings?: number;
}
```

---

## Navigation Structure

### Bottom Navigation (5 tabs)
1. **Home** (HomeIcon)
2. **Calendar** (CalendarIcon)
3. **Coaches** (Users)
4. **Messages** (MessageCircle)
5. **Profile** (User)

### Active State Indicators
- Icon color: `#c6ff00` (lime green)
- Glow effect: `drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]`
- Bottom dot indicator: 1px green dot with glow
- Inactive icons: 40% white opacity

### Header
- **Logo:** "VITΛ"
- **Position:** Centered
- **Styling:** Ultra-light (200 weight), letter-spacing 0.15em
- **Hidden on:** Map view

### Safe Area Handling
- Bottom safe area inset for iOS
- Gradient background extension
- Proper padding calculations

---

## Key Interactions

### Gestures
- **Horizontal Swipe:** Coach card carousel
- **Vertical Scroll:** All list views
- **Tap:** Primary action
- **Long Press:** Context menus (future)
- **Pull to Refresh:** Lists and feeds (future)

### Animations
- **Duration:** 300ms standard, 200ms quick
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for slides
- **Transitions:** All state changes animated
- **Hover Effects:** Scale, translate, glow changes

### Feedback
- **Visual:** Color change, scale, glow
- **Haptic:** Button presses (native)
- **Sound:** None (silent app)

---

## Content Guidelines

### Tone of Voice
- **Professional** yet approachable
- **Motivational** without being pushy
- **Clear** and concise
- **Action-oriented**

### Messaging
- Focus on results and progress
- Emphasize expert coaching
- Highlight convenience and flexibility
- Promote community and support

### Placeholder Text
- Realistic coach names and bios
- Authentic-sounding reviews
- Achievable goals and results
- Dubai-specific locations

---

## Future Enhancements

### Planned Features
1. Video calls with coaches
2. Workout video library
3. Nutrition meal plans
4. Progress photo comparisons
5. Social feed and community
6. Achievement sharing
7. Referral program
8. Group training sessions
9. Live class streaming
10. Wearable device integration

### Scaling Considerations
- Multi-city expansion
- International currency support
- Multiple language support (Arabic)
- Coach verification system
- Background check integration
- Insurance partnerships

---

## Success Metrics

### Key Performance Indicators (KPIs)
- **User Acquisition:** New sign-ups per month
- **Booking Rate:** % of users who book within 7 days
- **Session Completion:** % of booked sessions attended
- **Coach Utilization:** Average sessions per coach
- **Wallet Adoption:** % of users with wallet balance
- **Package Purchase:** % choosing packages vs. individual sessions
- **Retention Rate:** 30-day and 90-day retention
- **Average Revenue Per User (ARPU)**
- **Net Promoter Score (NPS)**

### Analytics Events
- Package viewed
- Coach profile viewed
- Booking initiated
- Booking completed
- Payment successful
- Session attended
- Review submitted
- Wallet deposit
- AI chat interaction

---

## Compliance & Legal

### Data Protection
- GDPR compliant data handling
- UAE data residency requirements
- Secure payment processing (PCI DSS)
- User consent management

### Terms of Service
- Cancellation policies clearly stated
- Refund terms (20% fee or token conversion)
- Coach-client agreement
- Liability waivers
- Insurance requirements

### Privacy
- No PII collection beyond necessary
- Encrypted data transmission
- Secure storage
- User data export capability
- Right to deletion

---

## Support & Documentation

### User Support
- In-app help center
- FAQ section
- Coach contact via messages
- Email support: support@vita.ae
- Response time: < 24 hours

### Coach Support
- Coach onboarding guide
- Best practices documentation
- Payment processing help
- Technical support
- Community forum

---

**End of Product Requirements Document**

---

*This PRD represents the current state of VITA as of October 27, 2025. For technical implementation details, refer to the codebase documentation.*
