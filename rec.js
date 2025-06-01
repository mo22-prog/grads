const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0; // Set the starting slide

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === current) {
      slide.classList.add('active');
    }
  });
}

// Move to the next slide
nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length; // Wrap around to the first slide
  updateSlides();
});

// Move to the previous slide
prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length; // Wrap around to the last slide
  updateSlides();
});

// Initialize the first slide
updateSlides();
