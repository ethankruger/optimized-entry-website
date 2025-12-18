// Scroll-triggered animations using Intersection Observer
// Adds fade-slide-up animation to elements as they enter the viewport

export function initScrollAnimations() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return; // Skip animations if user prefers reduced motion
  }

  // Create an Intersection Observer to watch for elements entering viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-slide-up');
          // Once animated, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
    }
  );

  // Observe all sections and cards that don't already have animations
  const animatedElements = document.querySelectorAll('section, .card, .glass');
  animatedElements.forEach((el) => {
    // Skip elements that already have animation classes
    if (el.classList.contains('animate-fade-slide-up') ||
        el.classList.contains('animate-scale-in') ||
        el.classList.contains('animate-glow-pulse')) {
      return;
    }
    // Add initial hidden state
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
