import React from 'react'
import { motion } from 'framer-motion'

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="title-xl mb-4">
            What Our <span className="text-gradient-brand">Clients Say</span>
          </h1>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card text-center p-12"
          >
            <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
              "Join our early adopters—share your results and help showcase the impact of Optimized Entry."
            </p>
            <div>
              <p className="font-bold text-slate-900">— The Optimized Entry team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage
