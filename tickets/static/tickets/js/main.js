import { menuPopUp, menuPopOut, menuModalResize } from './MenuModalModule.js';
import { sliderEvents } from './sliderModule.js';
import { renderEvents } from './eventGenerator.js';
import { smoothScroll } from './ScrollEffects.js';

const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');
const windowWidth = window.innerWidth;
const menuLinks = document.querySelectorAll('.menu li a');
const eventSlider = document.querySelectorAll('.event-slide');
const eventSec = document.querySelector('#event-sec');
let headerHeight = document.getElementById('header').offsetHeight * 0.6;

const menuPop = () => menuPopUp(menuBurger, menuBlock, bodyNode);
const menuVanish = () => menuPopOut(menuBurger, menuBlock, bodyNode);
const menuResize = () => menuModalResize(menuBlock, bodyNode, windowWidth);
const smoothScrollEvent = (e) => smoothScroll(e, headerHeight);
const slider = () => sliderEvents('#slider-wrapper', 'next', 'prev', '.event-slide');
const eventSecRender = (e) => {
  if(!eventSec.classList.contains('section')) eventSec.classList.add('section');
  eventSec.replaceChildren('');
  eventSec.appendChild(renderEvents(e, 'div', 'event'));
};

window.addEventListener('resize', () => {
  menuResize();
  slider();
});
window.addEventListener('load', slider);

menuBurger.addEventListener('click', menuPop);
menuOptions.forEach((option) => option.addEventListener('click', menuVanish));
eventSlider.forEach((eventSlide) => eventSlide.addEventListener('click', (e) => {
  eventSecRender(e);
  smoothScrollEvent(e);
}));