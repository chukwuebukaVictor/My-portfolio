const menu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
// const logo = document.querySelector('.bold');
const header = document.getElementById('logo');
const projs = document.querySelectorAll('.work');

function projOn() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(4px)';
    },
  );
}

function projOff() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(0px)';
    },
  );
}

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

const modalObj = {
  modal1: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio1-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://chukwuebukavictor.github.io/My-portfolio/',
    source: 'https://github.com/chukwuebukaVictor/My-portfolio',
  },
  modal2: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio2-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://chukwuebukavictor.github.io/My-portfolio/',
    source: 'https://github.com/chukwuebukaVictor/My-portfolio',
  },
  modal3: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio3.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://chukwuebukavictor.github.io/My-portfolio/',
    source: 'https://github.com/chukwuebukaVictor/My-portfolio',
  },
  modal4: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio4-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://chukwuebukavictor.github.io/My-portfolio/',
    source: 'https://github.com/chukwuebukaVictor/My-portfolio',
  },
};

const modalSubt = document.getElementById('modalSubt');
const modalTech = document.getElementById('modalTech');

function addCounter() {
  const counter = document.createElement('img');
  counter.src = 'img/Counter.svg';
  counter.alt = 'counter';
  modalSubt.appendChild(counter);
}

function addSubt(modal) {
  const firstDiv = document.createElement('div');
  firstDiv.className = 'font500 black font18-24';
  modalSubt.appendChild(firstDiv);
  [firstDiv.innerHTML] = modalObj[modal].subt;
  modalObj[modal].subt.slice(1).forEach((i) => {
    addCounter();
    const otherDiv = document.createElement('div');
    otherDiv.className = 'gray font18-24';
    modalSubt.appendChild(otherDiv);
    otherDiv.innerHTML = i;
  });
}

function addTechs(modal) {
  modalObj[modal].tech.forEach((i) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(i));
    modalTech.appendChild(li);
  });
}

function clearModal() {
  modalTech.innerHTML = '';
  modalSubt.innerHTML = '';
}

function popModal(modal) {
  document.getElementById('modalTitle').textContent = modalObj[modal].title;
  addSubt(modal);
  document.getElementById('modalDesc').textContent = modalObj[modal].desc;
  addTechs(modal);
  document.getElementById('modalImg').src = modalObj[modal].img;
  document.getElementById('modalBtn1').setAttribute('onClick', `location.href='${modalObj[modal].live}';`);
  document.getElementById('modalBtn2').setAttribute('onClick', `location.href='${modalObj[modal].source}';`);
}

const modal = document.getElementById('myModal');
const mBtn1 = document.getElementById('myBtn1');
const mBtn2 = document.getElementById('myBtn2');
const mBtn3 = document.getElementById('myBtn3');
const mBtn4 = document.getElementById('myBtn4');
const xp = document.getElementsByClassName('xp')[0];

mBtn1.onclick = function seeP1() {
  popModal('modal1');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn2.onclick = function seeP2() {
  popModal('modal2');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn3.onclick = function seeP3() {
  popModal('modal3');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn4.onclick = function seeP4() {
  popModal('modal4');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

function closeModal() {
  modal.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

xp.onclick = function x() {
  closeModal();
  clearModal();
};

window.onclick = function clickOut(event) {
  if (event.target === modal) {
    closeModal();
    clearModal();
  }
};

const contactForm = document.querySelector('#contact-form');

function validateEmail() {
  const emailInput = document.querySelector('#usr-email');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:black">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}

contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});

const nameInput = document.getElementById('usr-name');
const emailInput = document.getElementById('usr-email');
const textInput = document.getElementById('usr-comment');

function storeFormDataLocally() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    comment: textInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

nameInput.addEventListener('input', () => {
  storeFormDataLocally();
});

emailInput.addEventListener('input', () => {
  storeFormDataLocally();
});

textInput.addEventListener('input', () => {
  storeFormDataLocally();
});

window.addEventListener('load', () => {
  const data = localStorage.getItem('formData');
  const parseData = JSON.parse(data);
  nameInput.value = parseData.name;
  emailInput.value = parseData.email;
  textInput.value = parseData.comment;
});
