import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, Calendar, Zap, BarChart3, Check, Play, Headphones, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import HowItWorksSection from '../ui/how-it-works-section'

const HomePage = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Phone,
      title: '24/7 Reception',
      description: 'Your AI never sleeps. Every call answered, every opportunity captured.',
      stat: '100%',
      statLabel: 'call coverage',
    },
    {
      icon: Calendar,
      title: 'Smart Booking',
      description: 'Appointments land directly in your calendar. No back-and-forth.',
      stat: '< 30s',
      statLabel: 'to book',
    },
    {
      icon: Zap,
      title: 'Instant Sync',
      description: 'Real-time updates across all your systems. Always current.',
      stat: '0',
      statLabel: 'manual entry',
    },
    {
      icon: BarChart3,
      title: 'Clear Analytics',
      description: 'See exactly what\'s working. Data that drives decisions.',
      stat: '↑ 40%',
      statLabel: 'avg. conversion',
    },
  ]

  const heroOptions = [
    {
      title: 'Talk to us',
      description: 'Schedule a call with our team',
      icon: MessageSquare,
      link: '/contact',
      accent: 'green',
    },
    {
      title: 'Hear the AI',
      description: 'Listen to a live demo',
      icon: Headphones,
      link: '/hear-it',
      accent: 'orange',
    },
    {
      title: 'Get started',
      description: 'Book a personalized demo',
      icon: Play,
      link: '/get-a-demo',
      accent: 'white',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[95vh] overflow-hidden bg-white">
        {/* Background color accents */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-green-200 to-green-100 rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-200 to-orange-100 rounded-full blur-3xl opacity-70 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-green-100 rounded-full blur-2xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 min-h-[90vh] gap-6 pt-20 lg:pt-24 pb-12">
            
            {/* Left Content - Main message */}
            <div className="lg:col-span-5 flex flex-col justify-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-brand-green" />
                  <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">AI Reception</span>
                </div>

                {/* Main headline */}
                <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.05] tracking-tight text-slate-900 mb-6">
                  Never miss
                  <br />
                  another call.
                  <br />
                  <span className="text-brand-orange">Ever.</span>
                </h1>

                {/* Subhead */}
                <p className="text-lg text-slate-600 mb-10 max-w-sm leading-relaxed">
                  AI-powered reception that books appointments and captures leads — automatically, 24/7.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {['99% uptime', 'Setup in days'].map((item, i) => (
                    <span key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-green" />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Center - Bold Color Block with Visual */}
            <motion.div 
              className="lg:col-span-4 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="h-full bg-brand-green rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-0">
                {/* Fun decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-6 right-6 w-20 h-20 border-2 border-white/20 rounded-full" />
                  <div className="absolute top-10 right-10 w-8 h-8 bg-white/10 rounded-full" />
                  <div className="absolute bottom-20 left-6 w-3 h-3 bg-brand-orange rounded-full" />
                  <div className="absolute bottom-28 left-12 w-2 h-2 bg-white/40 rounded-full" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Phone icon - circle */}
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">24/7 Coverage</h3>
                  <p className="text-white/80 text-sm">Your AI receptionist handles every call, day or night.</p>
                </div>

                {/* Stats */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <p className="text-3xl font-black text-white">100%</p>
                    <p className="text-white/70 text-xs mt-1">Calls answered</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <p className="text-3xl font-black text-white">&lt;2s</p>
                    <p className="text-white/70 text-xs mt-1">Response time</p>
                  </div>
                </div>

                {/* Logo watermark */}
                <motion.img 
                  src="/img/logo-mark.png" 
                  alt="" 
                  className="absolute bottom-4 right-4 h-16 w-auto opacity-20"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            {/* Right - Action Options */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {heroOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex-1"
                >
                  <Link
                    to={option.link}
                    className={`group block h-full rounded-2xl p-6 transition-all duration-300 ${
                      option.accent === 'green' 
                        ? 'bg-slate-900 hover:bg-slate-800' 
                        : option.accent === 'orange'
                        ? 'bg-brand-orange hover:bg-orange-500'
                        : 'bg-slate-100 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {/* Varied icon shapes */}
                    <div className="mb-4">
                      {option.accent === 'green' && (
                        <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                      )}
                      {option.accent === 'orange' && (
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                      )}
                      {option.accent === 'white' && (
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className={`font-bold mb-1 ${
                      option.accent === 'white' ? 'text-slate-900' : 'text-white'
                    }`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm ${
                      option.accent === 'white' ? 'text-slate-500' : 'text-white/70'
                    }`}>
                      {option.description}
                    </p>
                    <ArrowRight className={`w-4 h-4 mt-4 transition-transform group-hover:translate-x-1 ${
                      option.accent === 'white' ? 'text-slate-400' : 'text-white/60'
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom brand bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-center">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-bold text-slate-700">Trusted by</span>
              <span className="font-semibold text-brand-green">Plumbers</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-brand-orange">HVAC</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-brand-green">Electricians</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-brand-orange">Contractors</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Features Section */}
      <section ref={featuresRef} className="py-28 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Features</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight"
              >
                Everything you need.
                <br />
                <span className="text-brand-orange">Nothing you don't.</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-end"
            >
              <p className="text-slate-600 max-w-md">
                Built for service businesses who want professional reception without the overhead. Simple setup, powerful results.
              </p>
            </motion.div>
          </div>

          {/* Feature cards - 2x2 grid with varied icon shapes */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-brand-green text-white' 
                    : 'bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 border border-slate-100 hover:border-slate-200'
                }`}>
                  {/* Icon */}
                  <div className="mb-6">
                    {index === 0 && (
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <feature.icon className="w-5 h-5 text-brand-green" />
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-md">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {index === 3 && (
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${index === 0 ? 'text-white/80' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-black ${index === 0 ? 'text-white' : 'text-brand-green'}`}>
                      {feature.stat}
                    </span>
                    <span className={`text-sm ${index === 0 ? 'text-white/60' : 'text-slate-400'}`}>
                      {feature.statLabel}
                    </span>
                  </div>

                  {/* Corner decorations for first card only */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-6 right-6 w-12 h-12 border border-white/20 rounded-full" />
                      <div className="absolute top-8 right-8 w-2 h-2 bg-brand-orange rounded-full" />
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left - CTA Content */}
            <div className="bg-slate-900 rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border border-white/10 rounded-full" />
              <div className="absolute top-10 right-10 w-3 h-3 bg-brand-green rounded-full" />
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-brand-orange rounded-full" />
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight relative z-10">
                Ready to stop
                <br />
                missing calls?
              </h2>
              <p className="text-slate-400 mb-8 relative z-10">
                Get started in days, not months. No contracts, cancel anytime.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Talk to us
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  <Link to="/pricing">View pricing</Link>
                </Button>
              </div>
            </div>

            {/* Right - Trust & Details */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-slate-900 mb-1">Zero</p>
                    <p className="text-sm text-slate-600">Long-term contracts</p>
                  </div>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-black text-slate-900">0</span>
                  </div>
                </div>
              </div>
              <div className="bg-brand-orange rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold mb-1">Cancel anytime</p>
                    <p className="text-white/70 text-sm">No questions asked. We're confident you'll stay.</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
