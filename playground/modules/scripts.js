import { returnHi, lastName, middle } from './utils.js';
import { handleButtonClick } from './handlers.js';

const name = 'annie';
console.log(returnHi(name), middle, lastName);

const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);
