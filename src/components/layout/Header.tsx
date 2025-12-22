import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/60'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
          }`}
      >
        <div className="section">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="flex items-center gap-3"
              >
                <img
                  src="/img/logo-mark.png"
                  alt="Optimized Entry"
                  className="h-10 w-auto drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                />
                <img
                  src="/img/logo-text.png"
                  alt="Optimized Entry"
                  className="h-8 w-auto hidden sm:block"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-200 hover:text-brand-green relative group ${location.pathname === link.to ? 'text-brand-green' : 'text-slate-700'
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-brand transition-all duration-200 ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild className="text-sm bg-[#f27a20] hover:bg-[#d66a1a] text-black border-black">
                <a href="https://optimizedentryportal.netlify.app">Optimized Entry Portal</a>
              </Button>
              <Button asChild variant="neutral" className="text-sm">
                <Link to="/get-a-demo">Get a Demo</Link>
              </Button>
              <Button asChild className="text-sm">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg overflow-hidden"
          >
            <nav className="section py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-2 px-4 rounded-lg font-medium transition-all duration-200 ${location.pathname === link.to
                      ? 'bg-green-50 text-brand-green'
                      : 'text-slate-700 hover:bg-slate-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
                <Button asChild className="w-full justify-center bg-[#f27a20] hover:bg-[#d66a1a] text-black border-black">
                  <a href="https://optimizedentryportal.netlify.app">Optimized Entry Portal</a>
                </Button>
                <Button asChild variant="neutral" className="w-full justify-center">
                  <Link to="/get-a-demo">Get a Demo</Link>
                </Button>
                <Button asChild className="w-full justify-center">
                  <Link to="/contact">Talk to Us</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
