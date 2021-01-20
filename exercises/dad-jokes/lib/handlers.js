import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeBtn, jokeBtnSpan } from './elements.js';
import { randomItemFromArray } from './utils.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader, jokeHolder, jokeBtn);
  jokeHolder.textContent = joke;
  jokeBtnSpan.textContent = randomItemFromArray(
    buttonText,
    jokeBtnSpan.textContent
  );
}
