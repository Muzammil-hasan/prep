const button = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');

button.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

btnClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});
