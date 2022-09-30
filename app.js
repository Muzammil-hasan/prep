const button = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');

button.addEventListener('click', () => {
  overlay.classList.add('active');
});

btnClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});
