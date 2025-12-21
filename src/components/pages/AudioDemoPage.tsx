import React from 'react'
import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import { Link } from 'react-router-dom'
import WaveformPlayer from '@/components/ui/waveform-player'
import { Button } from '@/components/ui/button'

const AudioDemoPage = () => {
  return (
    <div className="min-h-screen py-20 bg-hero">
      <div className="section max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4"
          >
            <Music className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Audio Sample</span>
          </motion.div>
          <h1 className="title-xl mb-4">
            Hear What Our AI Agent Sounds Like
          </h1>
          <p className="text-lg text-slate-600">
            Experience the natural conversation flow of our AI receptionist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Sample AI Reception Call</h3>
            <p className="text-slate-600">
              Listen to how our AI handles a real customer inquiry with natural, professional conversation
            </p>
          </div>

          {/* Waveform Audio Player */}
          <WaveformPlayer
            audioSrc="/ElevenLabsVoice.mp3"
            className="w-full"
          />

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-slate-700 mb-4">
              Impressed? Get Optimized Entry for your business today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="neutral">
                <Link to="/get-a-demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AudioDemoPage
