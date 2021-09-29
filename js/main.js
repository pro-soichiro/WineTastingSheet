'use strict';
{
  const labels = document.querySelectorAll('label');

  labels.forEach(label => {
    label.addEventListener('mouseover', () => {
      label.parentNode.classList.add('appear');
    });
    label.addEventListener('mouseout', () => {
      label.parentNode.classList.remove('appear');
    });
  });
}