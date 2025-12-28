import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show if user hasn't scrolled to near bottom and there's more content below
      const scrolledPercentage = (scrolled + windowHeight) / documentHeight
      const notNearBottom = scrolledPercentage < 0.85 // Hide when 85% scrolled
      const hasMoreContent = documentHeight > windowHeight * 1.5

      setIsVisible(notNearBottom && hasMoreContent)
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scrollDown = () => {
    const currentScroll = window.scrollY
    const windowHeight = window.innerHeight
    // Scroll down by one full viewport height
    window.scrollTo({
      top: currentScroll + windowHeight,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce cursor-pointer group"
      aria-label="Scroll down for more content"
    >
      <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
    </button>
  )
}
