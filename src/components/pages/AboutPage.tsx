import { motion } from 'framer-motion'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background color accents */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-green-200 to-green-100 rounded-full blur-3xl opacity-60 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-200 to-orange-100 rounded-full blur-3xl opacity-60 -translate-x-1/4" />
        
        {/* Decorative elements */}
        <div className="absolute top-24 left-16 w-20 h-20 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-32 left-24 w-3 h-3 bg-brand-green rounded-full" />
        <div className="absolute bottom-24 right-20 w-16 h-16 border border-dashed border-orange-200 rounded-full" />
        <div className="absolute bottom-32 right-28 w-4 h-4 bg-brand-orange rounded-full" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-brand-green" />
              <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Our Story</span>
              <div className="w-8 h-px bg-brand-green" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
              About <span className="text-brand-green">Optimized Entry</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
              Built by two Computer Science students focused on practical AI for local service businesses. 
              We automate call handling and scheduling to measurably improve responsiveness and conversion.
            </p>

            {/* Founder badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-4 bg-slate-900 text-white px-6 py-4 rounded-full"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">A</div>
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">E</div>
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Axel & Ethan</p>
                <p className="text-white/60 text-xs">Founders • Est. 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
