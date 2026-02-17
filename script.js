const activeSection = document.querySelector('.active');
const inativeBtn = document.querySelector('.inative-btn-main');
const bolinhas = Array.from(document.querySelectorAll('.bolinhas'));
const imgs = Array.from(document.querySelectorAll('.inative-img img'));
const navLinks = document.querySelector('.active-nav-bar ul');

let navOpen = false;
let currentSlide = 0;
const totalSlides = 3;

// Toggle navbar
inativeBtn.addEventListener('click', () => {
  navOpen = !navOpen;
  
  if (navOpen) {
  activeSection.style.width = '20%';
  navLinks.style.transform = 'translateY(0%)';
  navLinks.style.opacity = '1';
  inativeBtn.textContent = '✕';
} else {
  activeSection.style.width = '100px';
  navLinks.style.transform = 'translateY(-140%)';
  navLinks.style.opacity = '0';
  inativeBtn.textContent = 'Click';
}
});

// Slides
function goTo(i) {
  currentSlide = (i + totalSlides) % totalSlides;

  imgs.forEach((img, idx) => {
    img.style.display = idx === currentSlide ? 'block' : 'none';
  });

  bolinhas.forEach((b, idx) => {
    b.style.background = idx === currentSlide ? 'white' : 'rgba(255,255,255,0.4)';
    b.style.transform = idx === currentSlide ? 'scale(1.3)' : 'scale(1)';
  });
}

document.querySelector('.btn-inative-right').addEventListener('click', () => goTo(currentSlide - 1));
document.querySelector('.btn-inative-left').addEventListener('click', () => goTo(currentSlide + 1));
bolinhas.forEach((b, i) => b.addEventListener('click', () => goTo(i)));

// Init
goTo(0);