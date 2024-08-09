const buttonBurger = document.querySelector('#button-burger');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileOverlay = document.querySelector('#mobile-overlay');

buttonBurger.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.classList.toggle('disable-scroll');
  mobileOverlay.classList.toggle('mobile-overlay--active');
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('tab--active'));
    tab.classList.toggle('tab--active');
  });
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const accordionButton = accordion.querySelector('.accordion__header');
  accordionButton.addEventListener('click', () => {
    accordion.classList.toggle('accordion--active');
  });
});

const reviewsList = document.querySelector('.testimonials__reviews-list');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');

reviewsList.scrollLeft = (reviewsList.scrollWidth - reviewsList.clientWidth) / 2;

nextButton.addEventListener('click', () => {
  reviewsList.scrollBy({ behavior: 'smooth', left: 350 });
});

prevButton.addEventListener('click', () => {
  reviewsList.scrollBy({ behavior: 'smooth', left: -350 });
});
