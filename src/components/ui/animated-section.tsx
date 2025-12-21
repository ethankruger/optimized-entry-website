import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedSectionProps {
  title: string
  subtitle?: string
  badge?: string
  items: Array<{
    icon?: LucideIcon
    title: string
    description: string
    gradient?: string
  }>
  columns?: 2 | 3 | 4
}

/**
 * Reusable animated section component
 * Inspired by the Design Agency landing page
 *
 * Features:
 * - Fade-in animations
 * - Staggered children
 * - Hover effects
 * - Gradient backgrounds
 * - Responsive grid
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  subtitle,
  badge,
  items,
  columns = 3,
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <section className="section py-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        {badge && (
          <motion.div
            variants={fadeIn}
            className="inline-block rounded-full bg-muted px-4 py-2 text-sm font-medium mb-4"
          >
            {badge}
          </motion.div>
        )}
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Grid */}
      <motion.div
        className={`grid ${gridClass} gap-6`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
          >
            {/* Gradient background on hover */}
            {item.gradient && (
              <div
                className={`absolute -right-20 -top-20 h-40 w-40 rounded-full ${item.gradient} group-hover:opacity-30 opacity-10 transition-all duration-300`}
              />
            )}

            <div className="relative space-y-3">
              {/* Icon */}
              {item.icon && (
                <div className="mb-4">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold">{item.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// Example usage in a page:
//
// import { AnimatedSection } from '@/components/ui/animated-section'
// import { Palette, Code, Sparkles } from 'lucide-react'
//
// <AnimatedSection
//   badge="Our Services"
//   title="What We Do"
//   subtitle="Comprehensive solutions for your business"
//   items={[
//     {
//       icon: Palette,
//       title: "Design",
//       description: "Beautiful, user-friendly interfaces",
//       gradient: "bg-gradient-to-br from-green-400/20 to-green-500/20"
//     },
//     {
//       icon: Code,
//       title: "Development",
//       description: "Fast, scalable applications",
//       gradient: "bg-gradient-to-br from-orange-400/20 to-orange-500/20"
//     },
//     {
//       icon: Sparkles,
//       title: "Marketing",
//       description: "Data-driven growth strategies",
//       gradient: "bg-gradient-to-br from-blue-400/20 to-blue-500/20"
//     }
//   ]}
//   columns={3}
// />
