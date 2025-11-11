document.addEventListener('DOMContentLoaded', () => {
  // --- Toggle accesible "Más información" (página /programas)
  document.querySelectorAll('.show-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('aria-controls');
      const panel = document.getElementById(id);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.textContent = isOpen ? 'Más información' : 'Ver menos';

      if (isOpen) panel.setAttribute('hidden', '');
      else panel.removeAttribute('hidden');
    });
  });

  // --- Manejo genérico del formulario de preinscripción / registro (si existe)
  document.querySelectorAll('form[data-preinscripcion]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const fd = new FormData(form);
        const payload = Object.fromEntries(fd.entries());

        const res = await fetch('/api/preinscripcion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        alert(data.message || 'Registro enviado');
        form.reset();
      } catch (err) {
        console.error(err);
        alert('Ocurrió un error enviando el registro. Intenta de nuevo.');
      }
    });
  });
});
