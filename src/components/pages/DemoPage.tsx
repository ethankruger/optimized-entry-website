import React from 'react'
import { motion } from 'framer-motion'
import { Music, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'

const DemoPage = () => {
  return (
    <div className="min-h-screen py-20 bg-hero">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4"
            >
              <Calendar className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Schedule a Demo</span>
            </motion.div>
            <h1 className="title-xl mb-4">
              Experience <span className="text-gradient-brand">Optimized Entry</span> in Action
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              See how we can transform your business communications.
            </p>

            {/* Hear It In Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Button asChild size="lg">
                <Link to="/hear-it">
                  <Music />
                  Hear It In Action
                </Link>
              </Button>
            </motion.div>
          </div>

          <NetlifyForm formName="demo-request" className="card space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <Input id="firstName" name="firstName" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company Name
              </label>
              <Input id="company" name="company" placeholder="Your Company Inc." required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
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
            <Button type="submit" size="lg" className="w-full text-lg py-6">
              Schedule My Demo
            </Button>
          </NetlifyForm>
        </motion.div>
      </div>
    </div>
  )
}

export default DemoPage
