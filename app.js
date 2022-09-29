const button = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');

button.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

btnClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

import { useState } from 'react';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
