import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle: string
  primaryCta: { text: string; href: string; icon?: LucideIcon }
  secondaryCta?: { text: string; href: string }
  image?: string
  features?: Array<{ icon: LucideIcon; text: string }>
  className?: string
}

/**
 * Animated Hero Section Component
 * Inspired by modern agency landing pages
 *
 * Features:
 * - Parallax scrolling
 * - Mouse-following gradient
 * - Staggered text animations
 * - Floating gradient orbs
 * - Responsive design
 */
export const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  features,
  className = '',
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  return (
    <motion.section
      style={{ y: heroY, opacity: heroOpacity }}
      className={`bg-hero relative overflow-hidden ${className}`}
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full blur-2xl animate-glow-pulse" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-blue-500/15 rounded-full blur-2xl animate-glow-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-green-300/10 to-orange-300/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="section pt-14 pb-20 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center relative z-10">
        {/* Content */}
        <motion.div
          className="xl:col-span-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm mb-6"
            >
              {badge}
            </motion.div>
          )}

          {/* Title */}
          <motion.div variants={fadeIn}>
            <motion.h1
              className="title-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="subtitle"
            variants={fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* Features */}
          {features && features.length > 0 && (
            <motion.div
              className="mt-6 flex flex-wrap gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-green-600 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            variants={fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href={primaryCta.href} className="btn-primary group">
              {primaryCta.text}
              {primaryCta.icon && (
                <primaryCta.icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.text}
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Image/Visual */}
        {image && (
          <motion.div
            className="relative xl:col-span-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-6 blur-3xl bg-gradient-to-tr from-orange-300/25 to-green-300/25 rounded-[2rem] animate-glow-pulse" />
            <motion.div
              className="relative card rounded-[2rem] p-8 md:p-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={image} alt="Hero" className="w-full h-auto rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

// Example usage:
//
// import { AnimatedHero } from '@/components/ui/animated-hero'
// import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react'
//
// <AnimatedHero
//   badge="🚀 New Feature"
//   title={
//     <>
//       Transform your business with{' '}
//       <span className="text-gradient-brand">AI-powered solutions</span>
//     </>
//   }
//   subtitle="Drive growth and efficiency with our cutting-edge technology platform"
//   primaryCta={{
//     text: "Get Started",
//     href: "/contact",
//     icon: ArrowRight
//   }}
//   secondaryCta={{
//     text: "Learn More",
//     href: "/about"
//   }}
//   features={[
//     { icon: CheckCircle2, text: "24/7 Support" },
//     { icon: Clock, text: "Real-time Updates" },
//     { icon: Zap, text: "Lightning Fast" }
//   ]}
//   image="/img/hero-image.png"
// />
