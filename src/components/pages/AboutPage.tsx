import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="section max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="title-xl mb-8">
            About <span className="text-gradient-brand">Optimized Entry</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <img
              src="/img/axelethan.png"
              alt="Optimized Entry Team"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Built by two Computer Science students focused on practical AI for local service businesses.
              We automate call handling and scheduling to measurably improve responsiveness and conversion.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
