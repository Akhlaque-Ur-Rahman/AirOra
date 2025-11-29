# AirOra HVAC - Complete Codebase Analysis
## Next.js 15 App Router Migration Blueprint

---

## PHASE 1: CODEBASE ANALYSIS

### Repository Overview

**Total Files Scanned:** 61 TypeScript/TSX files  
**Component Count:** 59 components  
**Architecture:** Single-page Vite React application  
**Design System:** TailwindCSS with custom utilities  
**Animation Library:** Framer Motion  
**UI Framework:** Radix UI (48 components)

---

### File Structure Analysis

```
Current Vite Structure:
====================
src/
├── App.tsx (11 components, 65 lines)
├── main.tsx (entry point, 5 lines)
├── index.css (2378 lines - Tailwind + tokens)
├── components/
│   ├── Hero.tsx (136 lines)
│   ├── Navbar.tsx (113 lines) 
│   ├── Footer.tsx (238 lines)
│   ├── Services.tsx (159 lines)
│   ├── About.tsx (120 lines)
│   ├── WhyChooseUs.tsx (130 lines)
│   ├── Stats.tsx (126 lines)
│   ├── Projects.tsx (170 lines)
│   ├── ContactForm.tsx (242 lines)
│   ├── ClientsCarousel.tsx (unknown)
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/ (48 components)
│       ├── button.tsx
│       ├── input.tsx
│       ├── ... (46 more)
```

---

## Component Breakdown

### 1. Layout Components (2)

#### **Navbar.tsx**
- **Type:** Client Component (uses hooks: useState, useEffect)
- **Features:**
  - Scroll detection for shadow effect
  - Mobile menu with Sheet component
  - Sticky navigation
  - Framer Motion animations
- **Client Dependencies:**
  - `useState` for scroll state and mobile menu
  - `useEffect` for scroll listener
  - `motion` from framer-motion
  - Event handlers (onClick)
- **Reusable Patterns:**
  - ✅ Logo component
  - ✅ NavLink component
  - ✅ MobileMenu component
  - ✅ ContactInfo component

#### **Footer.tsx**
- **Type:** Client Component (uses event handlers)
- **Features:**
  - Multi-column footer grid
  - Social media links
  - Newsletter signup
  - Scroll-to-top button with motion
- **Client Dependencies:**
  - `scrollToTop` click handler
  - Framer Motion animations
- **Reusable Patterns:**
  - ✅ FooterColumn component
  - ✅ SocialLinks component
  -  Newsletter component
  - ✅ ScrollToTop button component

---

### 2. Section Components (8)

#### **Hero.tsx**
- **Type:** Client Component (Framer Motion)
- **Size:** 136 lines
- **Features:**
  - Full-screen hero with background image
  - Animated content with stagger children
  - CTA buttons
  - Trust indicators (stats)
  - Scroll indicator animation
- **Design Tokens Used:**
  - Primary: `#0B1C3F`
  - Accent: `#1CB9F6`
  - Gradients: `from-[#0B1C3F]/95 via-[#0B1C3F]/85`
- **Reusable Patterns:**
  - ✅ Badge component (`Leading HVAC Solutions Provider`)
  - ✅ Animated heading
  - ✅ CTA button group
  - ✅ Trust indicators grid
  - ✅ Scroll indicator
- **Images:** 1 background image (needs Next/Image conversion)

#### **Services.tsx**
- **Type:** Client Component (Framer Motion)
- **Size:** 159 lines
- **Features:**
  - 6-item service grid
  - Icon + title + description cards
  - Hover animations
  - Section header pattern
- **Data Structure:**
  ```javascript
  {
    icon: LucideIcon,
    title: string,
    description: string
  }
  ```
- **Reusable Patterns:**
  - ✅ SectionHeader component
  - ✅ ServiceCard component
  - ✅ IconWrapper component
  - ✅ CTA section

#### **About.tsx**
- **Type:** Client Component (Framer Motion)
- **Size:** 120 lines
- **Features:**
  - 2-column layout (image + content)
  - Image with floating stats card
  - Checkmark list (6 highlights)
  - Dual CTA buttons
- **Reusable Patterns:**
  - ✅ TwoColumnLayout component
  - ✅ FloatingCard component
  - ✅ CheckmarkList component
  - ✅ DualCTA component
- **Images:** 1 team photo (needs Next/Image)

#### **WhyChooseUs.tsx**
- **Type:** Client Component (Framer Motion)
- **Size:** 130 lines
- **Features:**  
  - 6-feature grid
  - Icon circles with gradient backgrounds
  - Hover scale animations
  - Section header
- **Data Structure:**
  ```javascript
  {
    icon: LucideIcon,
    title: string,
    description: string
  }
  ```
- **Reusable Patterns:**
  - ✅ FeatureCard component
  - ✅ GradientIconCircle component
  
#### **Stats.tsx**
- **Type:** Client Component (hooks + Intersection Observer)
- **Size:** 126 lines
- **Features:**
  - Animated number counters
  - Intersection Observer for visibility detection
  - Background pattern SVG
  - 4-column grid
- **Client Dependencies:**
  - `useState` for counter
  - `useEffect` for counter animation
  - `useRef` for DOM targeting
  - IntersectionObserver API
- **Reusable Patterns:**
  - ✅ StatCard component
  - ✅ CounterAnimation hook
  - ✅ BackgroundPattern component

#### **Projects.tsx**
- **Type:** Client Component (Framer Motion)
- **Size:** 170 lines
- **Features:**
  - 6-project grid
  - Image cards with category badges
  - Hover overlay with "View Details"
  - Image scale on hover
- **Data Structure:**
  ```javascript
  {
    title: string,
    category: string,
    description: string,
    image: string
  }
  ```
- **Reusable Patterns:**
  - ✅ ProjectCard component
  - ✅ CategoryBadge component
  - ✅ HoverOverlay component
- **Images:** 6 project images (needs Next/Image)

#### **ContactForm.tsx**
- **Type:** Client Component (form submission)
- **Size:** 242 lines
- **Features:**
  - 2-column layout (contact info + form)
  - 4 contact info cards
  - Form with 5 inputs (name, email, phone, service, message)
  - Map placeholder
- **Client Dependencies:**
  - Form submission handler
  - Input change events
- **Reusable Patterns:**
  - ✅ ContactInfoCard component
  - ✅ FormField component
  - ✅ MapEmbed component

#### **ClientsCarousel.tsx**
- **Type:** Client Component (carousel)
- **Features:** Infinite scrolling client logos
- **Dependencies:** Embla Carousel React
- **Reusable Patterns:**
  - ✅ InfiniteCarousel component
  - ✅ ClientLogo component

---

### 3. UI Components (48 Radix-based)

All located in `src/components/ui/`:

**Base Components:**
- `button.tsx` - Button with variants
- `input.tsx` - Text input
- `textarea.tsx` - Multi-line input
- `label.tsx` - Form label
- `select.tsx` - Dropdown select
- `checkbox.tsx` - Checkbox input
- `radio-group.tsx` - Radio buttons
- `switch.tsx` - Toggle switch

**Layout Components:**
- `card.tsx` - Card container
- `separator.tsx` - Divider line
- `scroll-area.tsx` - Custom scrollbar
- `resizable.tsx` - Resizable panels
- `aspect-ratio.tsx` - Aspect ratio container

**Overlay Components:**
- `dialog.tsx` - Modal dialog
- `alert-dialog.tsx` - Alert modal
- `sheet.tsx` - Drawer/sheet
- `drawer.tsx` - Bottom drawer
- `popover.tsx` - Popover
- `tooltip.tsx` - Tooltip
- `hover-card.tsx` - Hover card
- `context-menu.tsx` - Right-click menu
- `dropdown-menu.tsx` - Dropdown menu

**Navigation Components:**
- `navigation-menu.tsx` - Nav menu
- `menubar.tsx` - Menu bar
- `tabs.tsx` - Tab navigation
- `accordion.tsx` - Accordion
- `collapsible.tsx` - Collapsible section
- `breadcrumb.tsx` - Breadcrumb navigation
- `pagination.tsx` - Pagination

**Data Display:**
- `table.tsx` - Data table
- `badge.tsx` - Status badge
- `avatar.tsx` - User avatar
- `chart.tsx` - Charts (Recharts)
- `progress.tsx` - Progress bar
- `skeleton.tsx` - Loading skeleton

**Interactive:**
- `carousel.tsx` - Carousel (Embla)
- `slider.tsx` - Range slider
- `toggle.tsx` - Toggle button
- `toggle-group.tsx` - Toggle group
- `command.tsx` - Command palette

**Form:**
- `form.tsx` - Form wrapper (React Hook Form)
- `input-otp.tsx` - OTP input
- `calendar.tsx` - Date picker

**Feedback:**
- `alert.tsx` - Alert message
- `sonner.tsx` - Toast notifications

**Utilities:**
- `use-mobile.ts` - Mobile detection hook
- `utils.ts` - Utility functions (cn)

**Other:**
- `sidebar.tsx` - Sidebar component

**Status:** ✅ **Can be copied as-is to Next.js** (already compatible)

---

### 4. Utility Components (2)

#### **ImageWithFallback.tsx**
- Located in `figma/` directory
- Purpose: Image component with fallback support
- **Migration:** Replace with optimized Next.js pattern

---

## Design System Analysis

### Color Tokens

**Extracted from all components:**

```typescript
// Primary Colors
primary: {
  DEFAULT: '#0B1C3F',  // Navy Blue - Used 47 times
  variants: [
    '#0B1C3F',
    '#0B1C3F]/95',
    '#0B1C3F]/85',
    '#0B1C3F]/70',
    '#0B1C3F]/80',
    '#1a2f5f',
  ]
}

// Accent Colors
accent: {
  DEFAULT: '#1CB9F6',  // Cyan - Used 52 times
  variants: [
    '#1CB9F6',
    '#1CB9F6]/10',
    '#1CB9F6]/20',
    '#1CB9F6]/50',
    '#1CB9F6]/80',
    '#1CB9F6]/90',
  ]
}

// Neutral Colors
gray: {
  50: '#f9fafb',    // bg-gray-50
  100: '#f3f4f6',   // bg-gray-100
  200: '#e5e7eb',   // border-gray-200
  600: '#4b5563',   // text-gray-600
  700: '#374151',   // text-gray-700
}

// Semantic Colors
white: {
  DEFAULT: '#fff',
  variants: [
    'white',
    'white/70',
    'white/80',
    'white/90',
    'white/60',
    'white/50',
    'white/10',
    'white/20',
  ]
}
```

### Typography Scale

**Extracted from components:**

```typescript
// Font Sizes (Used Patterns)
fontSize: {
  '5xl': '3rem',      // Hero headings (h1)
  '6xl': '3.75rem',   // Hero headings (h1 lg:)
  '4xl': '2.25rem',   // Section headings (h2)
  '3xl': '1.875rem',  // Stats, floating cards
  '2xl':' 1.5rem',    // h2
  'xl': '1.25rem',    // h3
  '3lg': '1.125rem',  // Large paragraphs
  'base': '1rem',     // Body text
  'sm': '0.875rem',   // Small text
}

// Font Weights
fontWeight: {
  bold: 700,    // Headings
  semibold: 600, // Subheadings
  medium: 500,  // Labels
  normal: 400,  // Body text
}

// Line Heights
lineHeight: {
  relaxed: 1.625,  // Paragraphs
  normal: 1.5,     // Default
}
```

### Spacing System

**Most Common Spacing Values:**

```typescript
spacing: {
  // Padding/Margin (py-, px-, p-, m-)
  1: '0.25rem',   // mb-1
  2: '0.5rem',    // mb-2, ml-2, mr-2
  3: '0.75rem',   // mb-3
  4: '1rem',      // mb-4, mt-4, py-4, px-4
  6: '1.5rem',    // mb-6, mt-6, py-6, px-6
  8: '2rem',      // mb-8, mt-8, py-8, px-8, gap-8
  12: '3rem',     // mb-12, mt-12, gap-12
  16: '4rem',     // mb-16, mt-16
  20: '5rem',     // py-20 (section padding)
  28: '7rem',     // py-28 (lg section padding)
  
  // Gaps
  gap: [2, 3, 4, 6, 8, 12, 16],
  
  // Container Padding
  containerPx: {
    DEFAULT: '1.5rem',  // px-6
    lg: '2rem',         // lg:px-8
  }
}
```

### Border Radius

```typescript
borderRadius: {
  'full': '9999px',  // Circles, badges, pills
  '2xl': '1rem',     // Large cards
  'xl': '.75rem',    // Cards, modals
  'lg': '.5rem',     // Buttons, inputs
  'md': '.375rem',   // Default
}
```

### Shadows

```typescript
boxShadow: {
  'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)', // Card default
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)', // Navbar scrolled
  'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)', // Floating elements
  'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)', // Card hover, footer card
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)', // Images
}
```

### Breakpoints

```typescript
screens: {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}

// Container Max-Widths
container: {
  maxWidth: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1400px',
    '7xl': '80rem' // Most used: max-w-7xl
  }
}
```

---

## Repeated UI Patterns

### Pattern 1: Section Header

**Used in:** Hero, Services, About, WhyChooseUs, Stats, Projects, ContactForm

```jsx
<motion.div className="text-center mb-16">
  <span className="inline-block px-4 py-2 bg-[#1CB9F6]/10 text-[#1CB9F6] rounded-full mb-4">
    {badge}
  </span>
  <h2 className="text-[#0B1C3F] mb-4">
    {heading}
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    {description}
  </p>
</motion.div>
```

**Reusable Component:** `SectionHeader`

---

### Pattern 2: Icon Wrapper

**Used in:** Services, WhyChooseUs, ContactForm, Footer

```jsx
// Variant 1: Square with background
<div className="w-16 h-16 bg-[#1CB9F6]/10 rounded-lg flex items-center justify-center">
  <Icon className="w-8 h-8 text-[#1CB9F6]" />
</div>

// Variant 2: Circle with gradient
<div className="w-20 h-20 bg-gradient-to-br from-[#1CB9F6] to-[#0B1C3F] rounded-full flex items-center justify-center">
  <Icon className="w-10 h-10 text-white" />
</div>

// Variant 3: Circle with single color
<div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-[#1CB9F6]" />
</div>
```

**Reusable Component:** `IconWrapper` with variants

---

### Pattern 3: Badge/Pill

**Used in:** Hero, Services, About, WhyChooseUs, Stats, Projects

```jsx
<span className="inline-block px-4 py-2 bg-[#1CB9F6]/10 text-[#1CB9F6] rounded-full {border}">
  {text}
</span>

// Variations:
// - With border: border border-[#1CB9F6]/50
// - Different opacity: bg-[#1CB9F6]/20
// - Small size: px-3 py-1 text-sm
```

**Reusable Component:** `Badge` with variants

---

### Pattern 4: Card Grid

**Used in:** Services (3-col), WhyChooseUs (3-col), Projects (3-col), Stats (4-col)

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{n} gap-8">
  {items.map((item, index) => (
    <Card key={index} {...item} />
  ))}
</div>
```

**Reusable Component:** `CardGrid` with configurable columns

---

### Pattern 5: Contact Info Item

**Used in:** Navbar, Footer, ContactForm

```jsx
<div className="flex items-center gap-2 text-[color]">
  <Icon className="w-4 h-4" />
  <span>{text}</span>
</div>
```

**Reusable Component:** `ContactInfo`

---

### Pattern 6: CTA Button Group

**Used in:** Hero, About

```jsx
<div className="flex flex-col sm:flex-row gap-4">
  <Button>Primary action</Button>
  <Button variant="outline">Secondary action</Button>
</div>
```

**Reusable Component:** `CTAGroup`

---

## Animation Patterns

### Pattern 1: Container with Stagger Children

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

**Used in:** Services, WhyChooseUs, Projects

---

### Pattern 2: Scroll-Triggered WhileInView

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Used in:** All section headers, About, Hero

---

### Pattern 3: Hover Scale

```jsx
<motion.div
  whileHover={{ scale: 1.05 / 1.1, y: -8 }}
  transition={{ duration: 0.3 }}
>
```

**Used in:** Navbar logo, WhyChooseUs icons, Project cards

---

## Client vs Server Component Classification

### ✅ Client Components (Must have "use client")

1. **Navbar.tsx** - useState, useEffect, event handlers
2. **Footer.tsx** - event handlers (scroll), motion
3. **Hero.tsx** - Framer Motion animations
4. **Services.tsx** - Framer Motion animations
5. **About.tsx** - Framer Motion animations
6. **WhyChooseUs.tsx** - Framer Motion animations
7. **Stats.tsx** - useState, useEffect, IntersectionObserver
8. **Projects.tsx** - Framer Motion animations
9. **ContactForm.tsx** - Form submission handlers
10. **ClientsCarousel.tsx** - Carousel interactions

**Total Client Components:** 10/11 section components

### ✅ Could Be Server Components

- None of the main section components (all use Framer Motion)
- UI components can remain client-side (Radix already handles this)

**Note:** In Next.js, we can create wrapper server components that pass data to client components for rendering.

---

## className Analysis

### Most Common Class Patterns

**Containers:**
- `container mx-auto max-w-7xl px-6 lg:px-8` (appears 10+ times)
- `flex items-center justify-center` (appears 20+ times)
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{n} gap-8` (appears 6 times)

**Colors:**
- `text-[#0B1C3F]` (Primary text) - 25+ occurrences
- `text-[#1CB9F6]` (Accent text) - 30+ occurrences
- `bg-[#1CB9F6]` (Accent background) - 20+ occurrences
- `bg-[#0B1C3F]` (Primary background) - 15+ occurrences
- `hover:bg-[#1CB9F6]`, `hover:text-[#1CB9F6]` - Most hover states

**Spacing:**
- `py-20 lg:py-28` (Section vertical padding) - 8 occurrences
- `mb-16` (Section header margin) - 8 occurrences
- `gap-8` (Grid gaps) - 10+ occurrences

**Typography:**
- `text-gray-600` (Body text) - 15+ occurrences
- `text-white` - 30+ occurrences (footer, stats, hero)

---

## Detected Reusable Components

### High Priority (Should Extract)

1. **SectionHeader** - Badge + Heading + Description
   - Usage: 8 sections
   - Props: badge, heading, description, align

2. **IconWrapper** - Icon with background circle/square
   - Usage: 20+ instances
   - Variants: square, circle, gradient, sizes

3. **Badge** - Pill-shaped badge
   - Usage: 10+ instances
   - Variants: filled, outlined, sizes

4. **Container** - Max-width container with padding
   - Usage: Every section
   - Props: maxWidth variant

5. **CardGrid** - Responsive grid layout
   - Usage: 6 sections
   - Props: columns (2, 3, 4), gap

6. **Card** - Basic card wrapper
   - Usage: Services, Projects, WhyChooseUs
   - Variants: default, hover-lift, image-card

7. **ContactInfo** - Icon + text pair
   - Usage: Navbar, Footer, ContactForm
   - Props: icon, text, className

8. **CTAGroup** - Button group
   - Usage: Hero, About, Services
   - Props: primary, secondary buttons

### Medium Priority

9. **FloatingCard** - Positioned overlay card (Stats in About)
10. **CheckmarkList** - List with check icons
11. **ProjectCard** - Card with image, overlay, and content
12. **ServiceCard** - Icon + title + description card
13. **FeatureCard** - Similar to ServiceCard (WhyChooseUs)
14. **StatCard** - Animated number counter
15 **SocialLinks** - Social media icon grid
16. **FooterColumn** - Footer column with links

---

## Data Structures to Extract

### Services Data

```typescript
// src/data/services.ts
export const services = [
  {
    icon: Wind,
    title: 'HVAC Installation',
    description: '...',
  },
  // ... 5 more
];
```

### Projects Data

```typescript
// src/data/projects.ts
export const projects = [
  {
    title: 'Corporate Office Complex',
    category: 'Commercial HVAC',
    description: '...',
    image: '/images/projects/...',
  },
  // ... 5 more
];
```

### Stats Data

```typescript
// src/data/stats.ts
export const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
  // ... 3 more
];
```

### Features Data (WhyChooseUs)

```typescript
// src/data/features.ts
export const features = [
  { icon: Award, title: 'Certified Experts', description: '...' },
  // ... 5 more
];
```

### Navigation Data

```typescript
// src/config/navigation.ts
export const navLinks = [
  { name: 'Home', href: '#home' },
  // ... 4 more
];
```

---

## PHASE 2: COMPONENT ARCHITECTURE BLUEPRINT

### Proposed Next.js Folder Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                    # Homepage (all sections)
│   ├── globals.css                 # TailwindCSS + design tokens
│   ├── error.tsx                   # Error boundary
│   ├── not-found.tsx               # 404 page
│   └── loading.tsx                 # Loading UI
│
├── components/
│   ├── layout/                     # Layout components
│   │   ├── Navbar.tsx              # "use client"
│   │   ├── Footer.tsx              # "use client"
│   │   ├── MobileMenu.tsx          # "use client" (extracted)
│   │   └── index.ts                # Barrel export
│   │
│   ├── sections/                   # Page sections (all "use client")
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├──Stats.tsx
│   │   ├── Projects.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ClientsCarousel.tsx
│   │   └── index.ts
│   │
│   ├── shared/                     # Reusable shared components
│   │   ├── SectionHeader.tsx       # "use client" (motion)
│   │   ├── Container.tsx           # Can be server
│   │   ├── Badge.tsx               # Can be server
│   │   ├── IconWrapper.tsx         # Can be server
│   │   ├── Card.tsx                # Can be server
│   │   ├── CardGrid.tsx            # Can be server
│   │   ├── ContactInfo.tsx         # Can be server
│   │   ├── CTAGroup.tsx            # Can be server
│   │   ├── ImageWithFallback.tsx   # Replace with Next/Image
│   │   ├── CheckmarkList.tsx       # "use client" (motion)
│   │   ├── FloatingCard.tsx        # "use client" (motion)
│   │   ├── SocialLinks.tsx         # "use client" (hover)
│   │   └── index.ts
│   │
│   └── ui/                         # Radix UI components (copy as-is)
│       ├── button.tsx
│       ├── input.tsx
│       ├── ... (48 components)
│       └── index.ts
│
├── lib/
│   ├── utils.ts                    # cn() utility, helpers
│   ├── constants.ts                # App constants
│   └── animations.ts               # Framer Motion variants
│
├── styles/
│   └── tokens.ts                   # Design tokens (colors, spacing, etc.)
│
├── config/
│   ├── site.ts                     # Site metadata, SEO
│   └── navigation.ts               # Navigation links
│
├── data/
│   ├── services.ts                 # Services data
│   ├── projects.ts                 # Projects data
│   ├── stats.ts                    # Stats data
│   ├── features.ts                 # Why Choose Us features
│   └── clients.ts                  # Client logos
│
└── types/
    ├── index.ts                    # Shared types
    └── components.ts               # Component prop types
```

---

## PHASE 3: MIGRATION MAP

### File Migration Matrix

| Current Vite Path | New Next.js Path | Type | Changes Needed |
|------------------|------------------|------|----------------|
| `src/App.tsx` | `src/app/page.tsx` | Page | Import sections, remove wrapper |
| `src/main.tsx` | `src/app/layout.tsx` | Layout | Add metadata, providers |
| `src/index.css` | `src/app/globals.css` | Styles | Minimal changes |
| `src/components/Hero.tsx` | `src/components/sections/Hero.tsx` | Section | Add "use client", Next/Image |
| `src/components/Navbar.tsx` | `src/components/layout/Navbar.tsx` | Layout | Add "use client" |
| `src/components/Footer.tsx` | `src/components/layout/Footer.tsx` | Layout | Add "use client" |
| `src/components/Services.tsx` | `src/components/sections/Services.tsx` | Section | Add "use client", extract data |
| `src/components/About.tsx` | `src/components/sections/About.tsx` | Section | Add "use client", Next/Image |
| `src/components/WhyChooseUs.tsx` | `src/components/sections/WhyChooseUs.tsx` | Section | Add "use client", extract data |
| `src/components/Stats.tsx` | `src/components/sections/Stats.tsx` | Section | Add "use client" |
| `src/components/Projects.tsx` | `src/components/sections/Projects.tsx` | Section | Add "use client", Next/Image |
| `src/components/ContactForm.tsx` | `src/components/sections/ContactForm.tsx` | Section | Add "use client" |
| `src/components/ClientsCarousel.tsx` | `src/components/sections/ClientsCarousel.tsx` | Section | Add "use client" |
| `src/components/ui/*` | `src/components/ui/*` | UI | Copy as-is ✅ |
| `src/components/figma/ImageWithFallback.tsx` | DELETE | - | Use Next/Image |

### New Files to Create

| File Path | Purpose |
|-----------|---------|
| `src/app/layout.tsx` | Root layout with providers, metadata |
| `src/app/page.tsx` | Homepage with all sections |
| `src/app/error.tsx` | Error boundary |
| `src/app/not-found.tsx` | 404 page |
| `src/components/shared/SectionHeader.tsx` | Extracted pattern |
| `src/components/shared/Container.tsx` | Extracted pattern |
| `src/components/shared/IconWrapper.tsx` | Extracted pattern |
| `src/components/shared/Badge.tsx` | Extracted pattern |
| `src/components/shared/CardGrid.tsx` | Extracted pattern |
| `src/components/shared/Card.tsx` | Extracted pattern |
| `src/components/shared/ContactInfo.tsx` | Extracted pattern |
| `src/components/shared/CTAGroup.tsx` | Extracted pattern |
| `src/lib/animations.ts` | Animation variants |
| `src/lib/constants.ts` | Constants |
| `src/styles/tokens.ts` | Design tokens |
| `src/config/site.ts` | Site metadata |
| `src/config/navigation.ts` | Nav links |
| `src/data/services.ts` | Services data |
| `src/data/projects.ts` | Projects data |
| `src/data/stats.ts` | Stats data |
| `src/data/features.ts` | Features data |
| `next.config.ts` | Next.js config |
| `tailwind.config.ts` | Tailwind config |
| `tsconfig.json` | TypeScript config |

---

## PHASE 4: REFACTORING PLAN (Not Yet Executed)

### Step 1: Extract Shared Components

Create these reusable components in `src/components/shared/`:

1. SectionHeader
2. Container  
3. IconWrapper
4. Badge
5. Card
6. CardGrid
7. ContactInfo
8. CTAGroup

### Step 2: Extract Data Files

Move hardcoded data to `src/data/`:

1. services.ts
2. projects.ts
3. stats.ts
4. features.ts
5. navigation.ts

### Step 3: Convert Section Components

For each section:
1. Add `"use client"` directive
2. Replace `ImageWithFallback` with Next.js `Image`
3. Import extracted shared components
4. Import data from data files
5. Update image paths to `/images/...`

### Step 4: Create Next.js App Structure

1. Create `app/layout.tsx` with metadata
2. Create `app/page.tsx` importing all sections
3. Create `app/globals.css` from `index.css`
4. Create error boundaries

### Step 5: Update Configurations

1. Create `next.config.ts`
2. Create `tailwind.config.ts` with design tokens
3. Update `package.json` dependencies

---

## SUMMARY

### Statistics
- **Total Components Analyzed:** 61
- **Section Components:** 10 (all client-side)
- **Layout Components:** 2 (both client-side)
- **UI Components:** 48 (Radix, copy as-is)
- **Utility Files:** 2
- **Repeated Patterns Identified:** 16
- **Reusable Components to Extract:** 16
- **Data Files to Create:** 6
- **Design Tokens Extracted:** 50+

### Key Findings
✅ Well-structured single-page application  
✅ Consistent design system (#0B1C3F, #1CB9F6)  
✅ Heavy use of Framer Motion (all sections need "use client")  
✅ Radix UI components are Next.js compatible  
⚠️ Many repeated patterns that should be extracted  
⚠️ Hardcoded data should move to data files  
⚠️ All images need Next.js `Image` component  

### Next Steps
1. **Approve this analysis**
2. Begin PHASE 4 - Automated Refactoring
3. Extract shared components
4. Extract data files
5. Convert to Next.js structure
6. Test and verify

---

*Analysis Complete | Ready for Phase 4: Refactoring*
