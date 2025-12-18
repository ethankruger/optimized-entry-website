import './styles.css';
import './animations.js';
import './parallax.js';

function mountNav(){
  const el = document.getElementById('app-nav'); if(!el) return;
  el.innerHTML = `
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
  <div class="section py-3 flex items-center gap-4">
    <a href="/index.html" class="flex items-center gap-2">
      <img src="/img/logo-mark.png" alt="OE" class="h-8 w-auto">
      <img src="/img/logo-text.png" alt="Optimized Entry" class="h-5 w-auto hidden sm:block">
    </a>
    <nav class="ml-auto hidden md:flex items-center gap-6 text-slate-700">
      <a href="/index.html" class="hover:text-brand-orange">Home</a>
      <a href="/about-us.html" class="hover:text-brand-orange">About Us</a>
      <a href="/get-a-demo.html" class="hover:text-brand-orange">Get a Demo</a>
      <a href="/testimonials.html" class="hover:text-brand-orange">Testimonials</a>
      <a href="/contact.html" class="hover:text-brand-orange">Contact Us</a>
      <a href="/download.html" class="btn-primary">Download</a>
    </nav>
    <button id="mnav" class="md:hidden ml-auto p-2 rounded-xl border">Menu</button>
  </div>
  <div id="mobile" class="md:hidden hidden border-t transition-all duration-300 ease-in-out">
    <div class="px-4 py-3 flex flex-col gap-3">
      <a href="/index.html" class="transition-colors duration-200 hover:text-brand-orange">Home</a>
      <a href="/about-us.html" class="transition-colors duration-200 hover:text-brand-orange">About Us</a>
      <a href="/get-a-demo.html" class="transition-colors duration-200 hover:text-brand-orange">Get a Demo</a>
      <a href="/testimonials.html" class="transition-colors duration-200 hover:text-brand-orange">Testimonials</a>
      <a href="/contact.html" class="transition-colors duration-200 hover:text-brand-orange">Contact Us</a>
      <a href="/download.html" class="btn-primary justify-center">Download</a>
    </div>
  </div>
</header>`;
  const btn = document.getElementById('mnav');
  const mob = document.getElementById('mobile');
  if (btn && mob) {
    btn.onclick = () => {
      mob.classList.toggle('hidden');
      // Add rotation to menu button
      btn.classList.toggle('rotate-90');
    };
    btn.classList.add('transition-transform', 'duration-300');
  }
}
mountNav();
