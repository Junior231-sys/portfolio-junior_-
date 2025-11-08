// Loader hide after 1.2s
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function(){
    const loader = document.getElementById('loader');
    if(loader) loader.style.display = 'none';
  }, 1200);

  // typing effect
  const el = document.getElementById('typing-text');
  if (el) {
    const fullText = el.textContent;
    el.textContent = '';
    let i = 0;
    function type() {
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i++;
        setTimeout(type, 30);
      }
    }
    type();
  }

  // reveal sections
  revealOnScroll();
});

function revealOnScroll() {
  const targets = document.querySelectorAll('.fade-section');
  function check() {
    targets.forEach(t => {
      const top = t.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.85) t.classList.add('visible');
    });
  }
  check();
  window.addEventListener('scroll', check);
}

// Contact form (EmailJS placeholders). Simulation for demo.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const sendBtn = document.getElementById('send-btn');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      sendBtn.disabled = true;
      sendBtn.textContent = 'Envoi...';

      // collect form data
      const formData = {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // To enable real sending with EmailJS:
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      //   .then(function() { status.textContent = 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.'; form.reset(); }, function(error){ status.textContent = 'Oops... une erreur est survenue.'; })
      //   .finally(function(){ sendBtn.disabled = false; sendBtn.textContent = 'Envoyer'; });

      // Simulate success for demo
      setTimeout(function(){
        status.textContent = 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.';
        form.reset();
        sendBtn.disabled = false;
        sendBtn.textContent = 'Envoyer';
      }, 900);
    });
  }
});
