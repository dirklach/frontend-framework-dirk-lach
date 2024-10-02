document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'g') {
      const demoGrid = document.querySelector('.demo-grid');
      if (demoGrid) {
          demoGrid.classList.toggle('--show');
      }
  }
});