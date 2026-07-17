document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }), { threshold: .12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.textContent = 'Gracias. Tu solicitud está preparada. Te contactaremos por WhatsApp o teléfono para confirmar la cita.';
      msg.classList.add('show');
      form.reset();
    });
  }
});
