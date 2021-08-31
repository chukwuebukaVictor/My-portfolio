var menu = document.querySelector('.mobile-menu')
var ham = document.querySelector('.ham')
var xIcon = document.querySelector('.xIcon')
var menuIcon = document.querySelector('.menuIcon')

ham.addEventListener('lick', toggleMenu)

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
    mobileLink.addEventListener("click", toggleMenu)
  }
)