const container = document.querySelector('.container');
const styleContainer = getComputedStyle(container);


container.addEventListener('click', () => {
  container.classList.toggle('light-on')
});


