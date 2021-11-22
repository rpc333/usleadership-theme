"use strict";

(() => {
  const siteNavList = document.getElementById('site-nav');
  
  const aboutButton = document.createElement('button');
  aboutButton.innerText = 'About';
  aboutButton.setAttribute('class', 'nav-submenu-button');

  const navItem = document.createElement('li');
  navItem.setAttribute('class', 'nav-about');
  navItem.appendChild(aboutButton);

  const aboutNavList = document.getElementById('about-nav');
  aboutNavList.setAttribute('class', 'nav-submenu');
  navItem.appendChild(aboutNavList);

  aboutButton.addEventListener('click', () => {
    aboutNavList.classList.toggle('nav-submenu-open');
  });

  siteNavList.insertBefore(navItem, siteNavList.lastElementChild);
})();
