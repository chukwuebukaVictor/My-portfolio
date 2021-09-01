const menu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');

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

ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.mobileLink');

menuLinks.forEach(
  (mobileLink) => {
    mobileLink.addEventListener('click', toggleMenu);
  },
);

const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
const btn3 = document.getElementById('myBtn3');
const btn4 = document.getElementById('myBtn4');
const span1 = document.getElementsByClassName('close1')[0];
const span2 = document.getElementsByClassName('close2')[0];
const span3 = document.getElementsByClassName('close3')[0];
const span4 = document.getElementsByClassName('close4')[0];

btn1.onclick = function span1() {
  modal1.style.display = 'block';
}

span1.onclick = function span1() {
  modal1.style.display = 'none';
}

window.onclick = function modal1(event) {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
}

btn2.onclick = function span2() {
  modal2.style.display = 'block';
}

span2.onclick = function span2() {
  modal2.style.display = 'none';
}

window.onclick = function modal2(event) {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
}

btn3.onclick = function span3() {
  modal3.style.display = 'block';
}

span3.onclick = function span3() {
  modal3.style.display = 'none';
}

window.onclick = function modal3(event) {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
}

btn4.onclick = function span4() {
  modal4.style.display = 'block';
}

span4.onclick = function span4() {
  modal4.style.display = 'none';
}

window.onclick = function modal(event) {
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
}
