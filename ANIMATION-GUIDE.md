# Animation Components Guide 🎨

This guide shows you how to use the integrated animation components from the provided templates.

## Quick Start

All animation components use **Framer Motion** for smooth, performant animations.

## 1. Digital Serenity Component

**What it is:** A zen-inspired full-page landing experience with sophisticated animations.

**File:** [src/components/ui/digital-serenity-animated-landing-page.tsx](src/components/ui/digital-serenity-animated-landing-page.tsx)

**Live Demo:** http://localhost:5177/serenity-demo

### Features:
- ✨ Word-by-word text reveal animations
- 💫 Mouse-following gradient effect
- 🎯 Click ripple effects
- 📐 Animated SVG grid patterns
- 🎈 Floating elements that activate on scroll
- 🎨 Corner decorative elements
- 🖱️ Interactive word hover effects

### How to Use:
```tsx
import DigitalSerenity from '@/components/ui/digital-serenity-animated-landing-page'

function MyPage() {
  return <DigitalSerenity />
}
```

### Customization:
The component has inline styles you can modify:
- Change text in the JSX (lines 175-250)
- Modify colors in the CSS (lines 105-125)
- Adjust animation delays via `data-delay` attributes
- Change gradient colors in the component

---

## 2. Animated Hero Section (Reusable)

**What it is:** A flexible hero component with parallax and mouse-following effects.

**File:** [src/components/ui/animated-hero.tsx](src/components/ui/animated-hero.tsx)

### Features:
- 🌊 Parallax scrolling effect
- 🎨 Mouse-following gradient orb
- ⭕ Floating gradient decorations
- 📝 Staggered text animations
- 🔘 Customizable badges and CTAs
- 🖼️ Optional hero image
- ✅ Feature icons list

### Usage Example:
```tsx
import { AnimatedHero } from '@/components/ui/animated-hero'
import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react'

<AnimatedHero
  badge="🚀 New Feature"
  title={
    <>
      Transform your business with{' '}
      <span className="text-gradient-brand">AI Solutions</span>
    </>
  }
  subtitle="Drive growth with cutting-edge technology"
  primaryCta={{
    text: "Get Started",
    href: "/contact",
    icon: ArrowRight
  }}
  secondaryCta={{
    text: "Learn More",
    href: "/about"
  }}
  features={[
    { icon: CheckCircle2, text: "24/7 Support" },
    { icon: Clock, text: "Real-time Updates" },
    { icon: Zap, text: "Lightning Fast" }
  ]}
  image="/img/hero-image.png"
/>
```

---

## 3. Animated Section (Reusable)

**What it is:** A flexible grid section with staggered animations and hover effects.

**File:** [src/components/ui/animated-section.tsx](src/components/ui/animated-section.tsx)

### Features:
- 📱 Responsive grid (2, 3, or 4 columns)
- 🎭 Staggered fade-in animations
- 🎨 Gradient background on hover
- 📦 Card-based layout
- 🎯 Icon support
- 📛 Optional badge

### Usage Example:
```tsx
import { AnimatedSection } from '@/components/ui/animated-section'
import { Palette, Code, Sparkles, Zap } from 'lucide-react'

<AnimatedSection
  badge="Our Services"
  title="What We Do"
  subtitle="Comprehensive solutions for your business"
  items={[
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that delight users",
      gradient: "bg-gradient-to-br from-green-400/20 to-green-500/20"
    },
    {
      icon: Code,
      title: "Development",
      description: "Fast, scalable applications built with modern tech",
      gradient: "bg-gradient-to-br from-orange-400/20 to-orange-500/20"
    },
    {
      icon: Sparkles,
      title: "Design Systems",
      description: "Consistent, maintainable component libraries",
      gradient: "bg-gradient-to-br from-blue-400/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast experiences that convert",
      gradient: "bg-gradient-to-br from-purple-400/20 to-purple-500/20"
    }
  ]}
  columns={4}
/>
```

---

## 4. Common Animation Patterns

### Fade In from Bottom
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### Stagger Children
```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeIn}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  Hover me!
</motion.div>
```

### Scroll-triggered Animations
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeIn}
>
  Animates when scrolled into view
</motion.div>
```

### Mouse-following Effect
```tsx
const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }
  window.addEventListener('mousemove', handleMouseMove)
  return () => window.removeEventListener('mousemove', handleMouseMove)
}, [])

<motion.div
  className="fixed w-96 h-96 bg-gradient-to-br from-green-300/10 to-orange-300/10 rounded-full blur-3xl pointer-events-none"
  animate={{
    x: mousePos.x - 192,
    y: mousePos.y - 192,
  }}
  transition={{ type: 'spring', damping: 30, stiffness: 200 }}
/>
```

---

## 5. Using Your Brand Colors

Your brand colors are already configured in the CSS:

```tsx
// Text colors
<span className="text-brand-green">Green text</span>
<span className="text-brand-orange">Orange text</span>

// Background colors
<div className="bg-brand-green">Green background</div>

// Gradients
<div className="bg-gradient-brand">Green to Orange</div>
<span className="text-gradient-brand">Gradient text</span>

// Specific values:
// Green: #30b357
// Orange: #f27a20
```

---

## 6. Tailwind Animation Classes (Already Available)

Your existing CSS animations can be combined with Framer Motion:

```tsx
// Fade and slide up
<div className="animate-fade-slide-up">Content</div>

// Scale in
<div className="animate-scale-in">Content</div>

// Pulsing glow
<div className="animate-glow-pulse">Content</div>

// With delays
<div className="animate-fade-slide-up delay-200">Content</div>
<div className="animate-fade-slide-up delay-400">Content</div>
```

---

## 7. Where Components Are Used

### HomePage.tsx
- Parallax hero section
- Mouse-following gradient
- Staggered feature cards
- Animated CTA section

### ContactPage.tsx
- Fade-in form
- Slide-in animations

### PricingPage.tsx
- Staggered pricing cards
- Hover scale effects

### TestimonialsPage.tsx
- Grid animations
- Card hover effects

---

## 8. Performance Tips

1. **Use `whileInView` for scroll animations:**
   ```tsx
   <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}  // Only animate once
   >
   ```

2. **Reduce motion for accessibility:**
   Your CSS already handles this:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .animate-* { animation: none !important; }
   }
   ```

3. **Use GPU-accelerated properties:**
   - `transform` ✅
   - `opacity` ✅
   - Avoid `width`, `height`, `top`, `left` ❌

---

## 9. Icons from Lucide React

All icons are from [Lucide React](https://lucide.dev/):

```tsx
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  Calendar,
  Zap,
  Sparkles,
  // ... many more
} from 'lucide-react'

<Phone className="w-5 h-5 text-brand-green" />
```

---

## 10. Quick Wins - Copy & Paste

### Floating Gradient Orbs (background decoration)
```tsx
<div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full blur-2xl animate-glow-pulse" />
<div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
```

### Animated Card
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -10 }}
  viewport={{ once: true }}
  className="card"
>
  Your content
</motion.div>
```

### Gradient Button
```tsx
<motion.a
  href="/contact"
  className="btn-primary group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Get Started
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</motion.a>
```

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Pro Tip:** Mix and match these patterns to create your own unique animations. The components are designed to be composable and customizable!
