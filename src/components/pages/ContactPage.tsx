import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 bg-hero">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Get in touch</span>
            </motion.div>
            <h1 className="title-xl mb-4">
              Contact <span className="text-gradient-brand">Optimized Entry</span>
            </h1>
            <p className="text-lg text-slate-600">
              Tell us about your business and what you'd like to improve — we'll follow up within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-slate-600 mb-6">
                  Reach out to Axel or Ethan — we'll respond within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:optimizedentry@gmail.com"
                        className="text-brand-green hover:underline text-sm"
                      >
                        optimizedentry@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Cell</p>
                      <a
                        href="tel:763-234-6166"
                        className="text-slate-700 hover:text-brand-orange transition-colors text-sm"
                      >
                        763-234-6166
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <NetlifyForm formName="contact" className="card space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
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
                </Button>
              </NetlifyForm>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
