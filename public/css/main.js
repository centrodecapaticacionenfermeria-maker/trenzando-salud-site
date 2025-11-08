// Mostrar/ocultar más información al hacer clic
<script src="/js/main.js"></script>

document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', function () {
    const moreInfo = this.nextElementSibling; // El div con clase 'more-info'
    if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
      moreInfo.style.display = 'block';
      this.textContent = 'Ver menos';
    } else {
      moreInfo.style.display = 'none';
      this.textContent = 'Más información';
    }
  });
});
