import { motion } from 'framer-motion'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-32 left-20 w-4 h-4 bg-brand-green rounded-full opacity-60" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-dashed border-orange-200 rounded-full" />
        <div className="absolute bottom-28 right-28 w-3 h-3 bg-brand-orange rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-brand-green" />
                <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Our Story</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                About
                <br />
                <span className="text-brand-green">Optimized Entry</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Built by two Computer Science students focused on practical AI for local service businesses.
                We automate call handling and scheduling to measurably improve responsiveness and conversion.
              </p>
            </motion.div>

            {/* Right - Image with creative frame */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Background accent */}
              <div className="absolute -inset-4 bg-brand-green rounded-3xl -rotate-3 opacity-10" />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <img
                  src="/img/axelethan.png"
                  alt="Axel and Ethan - Optimized Entry Founders"
                  className="rounded-xl w-full"
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-brand-orange text-white px-5 py-3 rounded-2xl shadow-lg"
                >
                  <p className="text-sm font-bold">Est. 2024</p>
                </motion.div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-green rounded-full" />
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
