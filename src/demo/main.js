document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'g') {
      toggleDemoGrid();
  }
});

const toggleButton = document.querySelector('.demo-grid-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', function() {
    toggleDemoGrid();
  });
}

function toggleDemoGrid() {
  const demoGrid = document.querySelector('.demo-grid');
  if (demoGrid) {
    demoGrid.classList.toggle('--show');
  }
}