let menu = document.querySelector('.mobile-menu');
let ham = document.querySelector('.ham');
let xIcon = document.querySelector('.xIcon');
let menuIcon = document.querySelector('.menuIcon');

ham.addEventListener('lick', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

var menuLinks = document.querySelectorAll(".mobileLink")

menuLinks.forEach(
  function (mobileLink) {
    mobileLink.addEventListener('click', toggleMenu)
  },
)