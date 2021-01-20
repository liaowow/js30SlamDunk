import currencies from './currencies.js';
import { generateOptions } from './utils.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

export function init() {
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);

  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
