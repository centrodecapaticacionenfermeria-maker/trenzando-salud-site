document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.show-more').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('aria-controls');
      const panel = document.getElementById(id);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Toggle estado accesible
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.textContent = isOpen ? 'Más información' : 'Ver menos';

      // Forzar visibilidad aunque haya CSS previo con display:none
      if (isOpen) {
        panel.hidden = true;                // vuelve a ocultar por atributo
        panel.classList.remove('open');     // quita clase visible
        panel.style.display = 'none';       // garantiza oculto
      } else {
        panel.hidden = false;               // quita atributo hidden
        panel.classList.add('open');        // marca visible
        panel.style.display = 'block';      // garantiza visible
      }
    });
  });
});
