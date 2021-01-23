import { isValidColor } from './colors.js';

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  // lowercase everything, strip out spaces
  let color = words.toLowerCase();
  color = color.replace(/\s/g, '');
  // check if it is a valid color
  if (!isValidColor(color)) return;
  // if so, show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log(colorSpan);
  console.log('Valid color!');
  console.log(color);
  // change the background color
  document.body.style.backgroundColor = color;
}
