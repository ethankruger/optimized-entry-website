import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-slate-100 rounded-full" />
        <div className="absolute top-24 right-24 w-3 h-3 bg-brand-green rounded-full" />
        <div className="absolute bottom-32 left-16 w-16 h-16 border border-slate-100 rounded-full" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-green" />
              <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Get in Touch</span>
              <div className="w-8 h-px bg-brand-green" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Let's <span className="text-brand-green">Talk</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Tell us about your business and what you'd like to improve — we'll follow up within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 border border-white/10 rounded-full" />
                <div className="absolute top-10 right-10 w-2 h-2 bg-brand-green rounded-full" />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-brand-orange rounded-full opacity-60" />
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">Contact Information</h3>
                <p className="text-slate-400 mb-8 text-sm relative z-10">
                  Reach out to Axel or Ethan — we'll respond within 24 hours.
                </p>

                <div className="space-y-6 relative z-10">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <a
                        href="mailto:optimizedentry@gmail.com"
                        className="text-white hover:text-brand-green transition-colors font-medium"
                      >
                        optimizedentry@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Cell</p>
                      <a
                        href="tel:763-234-6166"
                        className="text-white hover:text-brand-orange transition-colors font-medium"
                      >
                        763-234-6166
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick response badge */}
                <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                    <span className="text-white/80 text-sm">Usually respond within 2 hours</span>
                  </div>
                </div>
              </div>

              {/* Additional info card */}
              <div className="bg-brand-orange rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-10 h-10 border border-white/20 rounded-full" />
                <p className="text-white font-bold mb-2 relative z-10">Prefer to schedule?</p>
                <p className="text-white/80 text-sm relative z-10">
                  Book a demo call directly and we'll walk you through everything.
                </p>
                <a 
                  href="/get-a-demo" 
                  className="inline-flex items-center gap-2 text-white font-semibold mt-3 hover:gap-3 transition-all relative z-10"
                >
                  Schedule a demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <NetlifyForm formName="contact" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NetlifyForm>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
