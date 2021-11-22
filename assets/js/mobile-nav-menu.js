"use strict";

(() => {
  const menuButton = document.getElementById('nav-burger');

  const toggleMenu = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('site-head-open');
  }

  menuButton.addEventListener('click', toggleMenu);
})();
