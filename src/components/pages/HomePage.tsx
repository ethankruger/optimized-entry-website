import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Calendar, Zap, BarChart3, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HowItWorksSection from '../ui/how-it-works-section'

const HomePage = () => {
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

  const features = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: '24/7 AI Reception',
      description: 'Never miss a call with our professional AI handling inquiries around the clock',
      gradient: 'from-green-400/20 to-green-500/20',
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-600" />,
      title: 'Smart Booking',
      description: 'Instant scheduling that syncs seamlessly with your Google Calendar',
      gradient: 'from-orange-400/20 to-orange-500/20',
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: 'Real-time Sync',
      description: 'All bookings and updates happen instantly across all your systems',
      gradient: 'from-blue-400/20 to-blue-500/20',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: 'Analytics Dashboard',
      description: 'Track performance metrics and gain insights into your business',
      gradient: 'from-purple-400/20 to-purple-500/20',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="bg-hero relative overflow-hidden"
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
          {/* Hero Content */}
          <motion.div
            className="xl:col-span-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <motion.h1
                className="title-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Drive more business, effortlessly, with{' '}
                <span className="text-brand-green font-black">Optimized Entry</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="subtitle"
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              AI reception and booking that turns calls into customers — automatically.
            </motion.p>

            {/* Stats row with animated icons */}
            <motion.div
              className="mt-6 flex flex-wrap gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: <CheckCircle2 className="w-5 h-5" />, text: '24/7 AI Reception' },
                { icon: <Clock className="w-5 h-5" />, text: 'Instant Booking' },
                { icon: <Zap className="w-5 h-5" />, text: 'Real-time Sync' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-green-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-7 flex flex-wrap gap-3"
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk to us
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="neutral">
                <Link to="/get-a-demo">Get a demo</Link>
              </Button>
              <Button asChild size="lg" variant="neutral">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
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
              <div className="relative">
                <motion.img
                  src="/img/logo-mark.png"
                  alt="OE"
                  className="h-24 w-auto mx-auto drop-shadow-lg"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <img src="/img/logo-text.png" alt="Optimized Entry" className="h-10 w-auto mx-auto mt-4" />
              </div>

              {/* Feature Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:opacity-100 opacity-70 transition-all duration-300`}
                    />
                    <div className="relative glass rounded-xl p-4 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-slate-50 mb-2 shadow-sm">
                        {feature.icon}
                      </div>
                      <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                        {feature.title.split(' ')[0]}
                      </p>
                      <p className="font-bold text-slate-900 mt-1 text-sm">{feature.title.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <section className="section py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900">
            Everything you need to{' '}
            <span className="text-gradient-brand">grow your business</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Optimized Entry provides a complete solution for managing customer interactions and bookings
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card h-full">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-gradient-brand text-white p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of businesses already using Optimized Entry
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-green border-black hover:bg-slate-50">
                <Link to="/contact">Talk to Us</Link>
              </Button>
              <Button asChild size="lg" variant="neutral">
                <Link to="/get-a-demo">Get a Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default HomePage
