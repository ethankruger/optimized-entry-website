import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, Calendar, Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-28 left-16 w-4 h-4 bg-brand-orange rounded-full" />
        <div className="absolute bottom-32 right-16 w-20 h-20 border border-slate-100 rounded-full" />
        <div className="absolute bottom-40 right-24 w-3 h-3 bg-brand-green rounded-full" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-24"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Book a Demo</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                Experience
                <br />
                <span className="text-brand-green">Optimized Entry</span>
                <br />
                in Action
              </h1>

              <p className="text-lg text-slate-600 mb-8">
                See how we can transform your business communications with a personalized walkthrough.
              </p>

              {/* Hear It In Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-10"
              >
                <Link
                  to="/hear-it"
                  className="group inline-flex items-center gap-4 bg-brand-orange text-white px-6 py-4 rounded-2xl hover:bg-orange-500 transition-colors"
                >
                  {/* Headphones icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Hear It In Action</p>
                    <p className="text-white/80 text-sm">Listen to a live demo call</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Benefits */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">What you'll learn</p>
                {[
                  'How our AI handles real customer calls',
                  'Calendar integration & booking flow',
                  'Custom setup for your business',
                  'Pricing tailored to your volume',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-green" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <NetlifyForm formName="demo-request" className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/50">
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Schedule Your Demo</h3>
                    <p className="text-slate-500 text-sm">Takes less than a minute</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Business Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <Input id="company" name="company" placeholder="Your Company Inc." required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base">
                    Schedule My Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Trust badge */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <span className="w-2 h-2 bg-brand-green rounded-full" />
                  No commitment required
                </div>
              </NetlifyForm>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemoPage
