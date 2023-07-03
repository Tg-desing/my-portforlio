const section1 = document.querySelector('#navigate-section-1-introduce-a');

const section2 = document.querySelector('#navigate-section-2-tech-stack-a');

const section3 = document.querySelector('#navigate-section-3-contact-a');

section1.querySelector('.fade-in').addEventListener('mouseenter', (e) => {
  section1.querySelector('.fade-out').classList.add('hovered');
});

section1.querySelector('.fade-in').addEventListener('mouseleave', (e) => {
  section1.querySelector('.fade-out').classList.remove('hovered');
});

section2.querySelector('.fade-in').addEventListener('mouseenter', (e) => {
  section2.querySelector('.fade-out').classList.add('hovered');
});

section2.querySelector('.fade-in').addEventListener('mouseleave', (e) => {
  section2.querySelector('.fade-out').classList.remove('hovered');
});

section3.querySelector('.fade-in').addEventListener('mouseenter', (e) => {
  section3.querySelector('.fade-out').classList.add('hovered');
});

section3.querySelector('.fade-in').addEventListener('mouseleave', (e) => {
  section3.querySelector('.fade-out').classList.remove('hovered');
});

section1.addEventListener('click', (e) => {
  e.preventDefault();

  const targetId = section1.getAttribute('href');
  console.log(targetId);
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});

section2.addEventListener('click', (e) => {
  e.preventDefault();

  const targetId = section2.getAttribute('href');
  console.log(targetId);
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});

section3.addEventListener('click', (e) => {
  e.preventDefault();

  const targetId = section3.getAttribute('href');
  console.log(targetId);
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});

window.addEventListener('load', function () {
  const iterations = this.document.querySelectorAll(
    '.introduce-my-skill-animation'
  );
  console.log(iterations);
  for (let iteration of iterations) {
    iteration.classList.add('loading');
  }
});
