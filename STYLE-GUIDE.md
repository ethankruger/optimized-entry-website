# Website Style Guide - Ethan's Design Preferences

This document captures my preferred design patterns and styling decisions for building websites. Use this as a reference when creating new sites or updating existing ones.

---

## Design Philosophy

- **Clean over cluttered** - Generous whitespace, clear hierarchy
- **Subtle over flashy** - Purposeful animations, not distracting
- **Consistent over creative chaos** - Same patterns repeated throughout
- **Distinctive over generic** - Avoid the "AI-coded" look

---

## Icons

### Shape: Always Circles
All icon containers must use `rounded-full`. No rounded squares, hexagons, pills, or other shapes.

```tsx
// ✅ Correct
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
  <Icon className="w-5 h-5 text-white" />
</div>

// ❌ Wrong - no rounded squares
<div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
  <Icon className="w-5 h-5 text-white" />
</div>
```

### Icon Sizes
| Size | Container | Icon |
|------|-----------|------|
| Small | `w-8 h-8` | `w-4 h-4` |
| Standard | `w-12 h-12` | `w-5 h-5` |
| Large | `w-14 h-14` | `w-6 h-6` |

### Icon Consistency Rules
- Same icon = same meaning across the entire site
- Don't reuse the same icon for different concepts
- Icon container shape should be consistent (always circles)

---

## Buttons

### Shape: Always Pill (rounded-full)
All buttons should use `rounded-full` for a pill shape. Never use square or slightly rounded buttons.

```tsx
// ✅ Correct
<button className="px-6 py-3 bg-primary text-white rounded-full">
  Get Started
</button>

// ❌ Wrong
<button className="px-6 py-3 bg-primary text-white rounded-lg">
  Get Started
</button>
```

### Button Variants to Include
- **Primary**: Main brand color background, white text
- **Secondary/Neutral**: White background, dark text, subtle border
- **Dark**: Dark background (slate-900), white text
- **Accent**: Secondary brand color background
- **Ghost**: Transparent, shows background on hover
- **Link**: Text only, underline on hover

### Button States
- Hover: Slight color shift + shadow increase
- Active/Press: `active:scale-[0.98]` for tactile feedback
- Focus: Ring outline for accessibility

---

## Typography

### Weight Hierarchy
- **Headings**: `font-black` (900) or `font-bold` (700)
- **Body**: `font-normal` (400)
- **Labels/Eyebrows**: `font-semibold` (600)

### Size Patterns
```css
/* Hero headline */
text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight

/* Section headline */
text-3xl lg:text-4xl font-black

/* Card title */
text-xl font-bold

/* Body text */
text-lg text-gray-600 leading-relaxed

/* Small/muted text */
text-sm text-gray-500
```

### Text Colors (using slate/gray palette)
- Headings: `text-slate-900`
- Body: `text-slate-600`
- Muted/secondary: `text-slate-500`
- On dark backgrounds: `text-white`, `text-white/80`, `text-white/60`

---

## Color Strategy

### Two-Color Accent System
Pick a **primary** and **secondary** accent color that complement each other:
- Primary: Used for main CTAs, important elements
- Secondary: Used for highlights, alternating accents, visual interest

### Background Colors
- Main sections: `bg-white`
- Alternating sections: `bg-slate-50` or `bg-[#fafaf9]`
- Dark sections: `bg-slate-900`

### Color Pops in Backgrounds
Add subtle gradient blobs behind hero content:

```tsx
{/* Background color accents */}
<div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-primary-200 to-primary-100 rounded-full blur-3xl opacity-70" />
<div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-secondary-200 to-secondary-100 rounded-full blur-3xl opacity-70" />
```

Adjust opacity (50-70%) to make it subtle but noticeable.

---

## Layout Patterns

### Section Structure
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Section Spacing
- Standard sections: `py-20`
- Large hero sections: `py-24` or `min-h-[95vh]`
- Smaller utility sections: `py-16`

### Eyebrow Labels
Small labels above section headings:

```tsx
<div className="flex items-center gap-3 mb-6">
  <div className="w-8 h-px bg-primary" />
  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
    Section Label
  </span>
</div>
```

Or centered:
```tsx
<div className="flex items-center justify-center gap-3 mb-6">
  <div className="w-8 h-px bg-primary" />
  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Label</span>
  <div className="w-8 h-px bg-primary" />
</div>
```

---

## Cards

### Standard Card
```tsx
<div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Content */}
</div>
```

### Colored/Featured Card
```tsx
<div className="bg-primary rounded-3xl p-8 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
  <div className="absolute top-10 right-10 w-3 h-3 bg-secondary rounded-full" />
  
  {/* Content with white text */}
</div>
```

### Border Radius
- Standard cards: `rounded-2xl`
- Large feature cards: `rounded-3xl`
- Never use sharp corners on cards

---

## Decorative Elements

### Background Decorative Circles
Add visual interest without being distracting:

```tsx
{/* Decorative elements */}
<div className="absolute top-20 right-16 w-24 h-24 border-2 border-slate-100 rounded-full" />
<div className="absolute top-28 right-24 w-4 h-4 bg-primary rounded-full" />
<div className="absolute bottom-20 left-12 w-16 h-16 border border-dashed border-secondary-200 rounded-full" />
<div className="absolute bottom-28 left-20 w-3 h-3 bg-secondary rounded-full" />
```

### Patterns
- Large outline circles (border only)
- Small solid color dots
- Dashed border circles for variety
- Always use `rounded-full`

---

## Animations

### Philosophy
- Subtle, not flashy
- Purposeful - guide attention
- Performance-first - use transforms and opacity

### Scroll-Triggered (Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Staggered Children
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Hover Effects
- Cards: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- Links with arrows: `group-hover:translate-x-1 transition-transform`
- Buttons: Color shift + shadow (built into component)

### What NOT to Do
- No excessive floating/bouncing elements
- No flashy entrance animations
- No parallax overload
- Keep it simple and clean

---

## Scroll Indicator

Include on every page:
- Progress bar at top showing scroll position
- "Scroll" indicator at bottom when more content exists
- Scroll-to-top button after scrolling down

---

## Things to AVOID

### The "AI-Coded" Look
These patterns scream "generated by AI":
- ❌ Purple gradients on white backgrounds
- ❌ Inter, Roboto, or Arial fonts
- ❌ Generic rounded square icons
- ❌ Predictable, symmetric layouts
- ❌ Overused gradient text
- ❌ Cookie-cutter component patterns

### Other Don'ts
- ❌ Rounded square icons (always circles)
- ❌ Sharp-cornered buttons (always pill)
- ❌ Excessive animations
- ❌ Inconsistent icon usage
- ❌ Walls of text without visual breaks
- ❌ Missing decorative elements (looks too plain)

---

## Checklist for New Pages

When creating a new page:

- [ ] Scroll indicator component included
- [ ] Page wrapper has `min-h-screen` and background color
- [ ] Hero section has subtle background color blobs
- [ ] All icons use `rounded-full` containers
- [ ] All buttons use `rounded-full` (pill shape)
- [ ] Section eyebrows follow the standard pattern
- [ ] Cards have `rounded-2xl` or `rounded-3xl`
- [ ] Decorative circles/elements for polish
- [ ] Text colors follow slate palette hierarchy
- [ ] Animations are subtle and scroll-triggered
- [ ] Primary and secondary colors used consistently
- [ ] Alternating section backgrounds (white/light)

---

## Quick Reference

```
Icons:         rounded-full only, w-12 h-12 standard
Buttons:       rounded-full only (pill shape)
Cards:         rounded-2xl or rounded-3xl
Sections:      py-20, max-w-7xl mx-auto px-6 lg:px-8
Headings:      font-black, text-slate-900
Body:          text-slate-600
Muted:         text-slate-500
Backgrounds:   bg-white, bg-slate-50, bg-[#fafaf9]
Animations:    Subtle, scroll-triggered, 0.6s duration
Decorations:   Gradient blobs, outline circles, small dots
```

---

*Last updated: January 2026*
