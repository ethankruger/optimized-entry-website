import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import WaveformPlayer from '@/components/ui/waveform-player'
import { Button } from '@/components/ui/button'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const AudioDemoPage = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-16 w-24 h-24 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-28 right-24 w-4 h-4 bg-brand-orange rounded-full" />
        <div className="absolute bottom-32 left-12 w-16 h-16 border border-slate-100 rounded-full" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-brand-green rounded-full" />
        
        {/* Sound wave decoration */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-32 text-slate-100" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q100,30 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M0,60 Q100,40 200,60 T400,60 T600,60 T800,60 T1000,60 T1200,60" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Audio Sample</span>
              <div className="w-8 h-px bg-brand-orange" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Hear What Our <span className="text-brand-green">AI Agent</span>
              <br />
              Sounds Like
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the natural conversation flow of our AI receptionist handling a real customer inquiry.
            </p>
          </motion.div>

          {/* Audio Player Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/50 relative overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 w-12 h-12 border border-slate-100 rounded-full" />
            <div className="absolute top-8 right-8 w-2 h-2 bg-brand-green rounded-full" />

            {/* Header - Headphones icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-lg">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Sample AI Reception Call</h3>
                <p className="text-slate-500">Natural, professional conversation</p>
              </div>
            </div>

            {/* Waveform Audio Player */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
              <WaveformPlayer
                audioSrc="/ElevenLabsVoice.mp3"
                className="w-full"
              />
            </div>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-brand-green rounded-full" />
                <span className="text-sm font-medium text-brand-green">Real voice AI</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="text-sm font-medium text-brand-orange">Natural conversation</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-slate-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 border border-white/10 rounded-full" />
              <div className="absolute top-6 right-6 w-2 h-2 bg-brand-orange rounded-full" />
              
              <p className="text-white font-bold mb-2 relative z-10">
                Impressed? Get Optimized Entry for your business today.
              </p>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                Setup takes days, not months. Start capturing every call.
              </p>
              <div className="flex flex-wrap gap-3 relative z-10">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  <Link to="/get-a-demo">
                    <Play className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AudioDemoPage
