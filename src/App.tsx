import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import PricingPage from './components/pages/PricingPage'
import TestimonialsPage from './components/pages/TestimonialsPage'
import DemoPage from './components/pages/DemoPage'
import AudioDemoPage from './components/pages/AudioDemoPage'
import DigitalSerenity from './components/ui/digital-serenity-animated-landing-page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/get-a-demo" element={<DemoPage />} />
          <Route path="/hear-it" element={<AudioDemoPage />} />
          <Route path="/serenity-demo" element={<DigitalSerenity />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
