import { TweenMax } from 'gsap';
const planet = document.getElementById('svg')
const btnOne = document.getElementById('btnOne');

TweenMax.to(planet, 50, {rotation:360, transformOrigin: 'center', repeat: 999 });
