export async function fetchJoke(loader, jokeHolder, jokeBtn) {
  // turn loader on, hide text and btn
  loader.classList.remove('hidden');
  jokeHolder.classList.add('hidden');
  jokeBtn.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn loader off, reveal text and btn
  function turnOffLoader() {
    loader.classList.add('hidden');
    jokeHolder.classList.remove('hidden');
    jokeBtn.classList.remove('hidden');
  }
  setTimeout(turnOffLoader, 500);
  return data;
}
