// Subtle parallax effect for hero section
// Creates gentle depth by moving background elements at different speeds

export function initParallax() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return; // Skip parallax if user prefers reduced motion
  }

  const heroSection = document.querySelector('.bg-hero');
  if (!heroSection) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3; // Parallax speed multiplier

    // Apply subtle transform to create depth
    heroSection.style.transform = `translateY(${rate}px)`;

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  // Listen to scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax);
} else {
  initParallax();
}
