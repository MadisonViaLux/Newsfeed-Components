
const toggleMenu = (element) => element.classList.toggle('menu--open');
// Toggle the "menu--open" class on your menu refence. 

// Start Here: Create a reference to the ".menu" class
const menuB = document.querySelector('.menu-button');
// create a reference to the ".menu-button" class

const menu = document.querySelector('.menu');


menuB.addEventListener('click', () => toggleMenu(menu));
// Using your menuButton reference, add a click handler that calls toggleMenu
