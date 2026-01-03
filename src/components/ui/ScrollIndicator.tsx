import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ScrollIndicator = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(true)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const checkScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show scroll to top after scrolling down 600px
      setShowScrollToTop(scrollTop > 600)
      
      // Hide scroll down indicator when near bottom (within 100px of bottom)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      setShowScrollDown(!isNearBottom && scrollTop < 200)
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar - thin, elegant */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-slate-100">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-green to-brand-orange origin-left"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Scroll down indicator - shows when more content below */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollDown}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 group"
            aria-label="Scroll down for more"
          >
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-brand-green flex items-center justify-center group-hover:border-brand-orange group-hover:shadow-xl transition-all"
            >
              <ChevronDown className="w-5 h-5 text-brand-green group-hover:text-brand-orange transition-colors" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to top - minimal */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-xl transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
