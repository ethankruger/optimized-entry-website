import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Users, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-16 w-24 h-24 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-28 right-24 w-4 h-4 bg-brand-green rounded-full" />
        <div className="absolute bottom-20 left-12 w-16 h-16 border border-dashed border-orange-200 rounded-full" />
        <div className="absolute bottom-28 left-20 w-3 h-3 bg-brand-orange rounded-full" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-green" />
              <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Testimonials</span>
              <div className="w-8 h-px bg-brand-green" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              What Our <span className="text-brand-green">Clients</span> Say
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real feedback from service businesses using Optimized Entry.
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-10 lg:p-12 relative overflow-hidden shadow-xl shadow-slate-100/50">
              {/* Decorative quote marks */}
              <div className="absolute top-6 left-6 w-16 h-16 text-brand-green/10">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Early Adopter Program</p>
                  <p className="text-slate-500 text-sm">Be among the first</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic relative z-10">
                "Join our early adopters—share your results and help showcase the impact of Optimized Entry."
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-500">OE</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">The Optimized Entry Team</p>
                  <p className="text-sm text-slate-500">Axel & Ethan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange">Coming Soon</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We're collecting feedback from our early adopters. Check back soon to see how businesses are transforming their call handling.
            </p>
            
            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Become an Early Adopter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="neutral">
                <Link to="/get-a-demo">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { stat: '24/7', label: 'Always Available', color: 'green' },
              { stat: '100%', label: 'Calls Answered', color: 'orange' },
              { stat: '<2s', label: 'Response Time', color: 'green' },
              { stat: '0', label: 'Missed Opportunities', color: 'orange' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
              >
                <p className={`text-3xl lg:text-4xl font-black mb-1 ${
                  item.color === 'green' ? 'text-brand-green' : 'text-brand-orange'
                }`}>
                  {item.stat}
                </p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
