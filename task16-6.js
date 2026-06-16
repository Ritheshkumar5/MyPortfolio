
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


const typingElement = document.getElementById('typing');
const words = ['Frontend Developer', 'UI Designer', 'Problem Solver', 'React Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting? 50 : 100);
  }
}
typeEffect();


const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

function showError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove('error');
  errorElement.textContent = '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;


  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, 'This field is mandatory');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, 'This field is mandatory');
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

 
  if (subjectInput.value.trim() === '') {
    showError(subjectInput, subjectError, 'This field is mandatory');
    isValid = false;
  } else {
    clearError(subjectInput, subjectError);
  }

 
  if (messageInput.value.trim() === '') {
    showError(messageInput, messageError, 'This field is mandatory');
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  if (isValid) {
    formStatus.textContent = 'Message sent! I will reply soon.';
    formStatus.style.color = '#28a745';
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = '';
    }, 4000);
  } else {
    formStatus.textContent = '';
  }
});


[nameInput, emailInput, subjectInput, messageInput].forEach((input, index) => {
  const errors = [nameError, emailError, subjectError, messageError];
  input.addEventListener('input', () => {
    if (input.value.trim()!== '') {
      clearError(input, errors[index]);
    }
  });
});


const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === '#' + current) {
      item.classList.add('active');
    }
  });
});