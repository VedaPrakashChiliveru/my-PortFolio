document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Add tooltips to hexagons
document.querySelectorAll('.hex').forEach(hex => {
  const tooltip = document.createElement('div');
  tooltip.className = 'hex-tooltip';
  tooltip.textContent = hex.dataset.tooltip;
  hex.appendChild(tooltip);
  
  hex.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  });
  
  hex.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  });
});  