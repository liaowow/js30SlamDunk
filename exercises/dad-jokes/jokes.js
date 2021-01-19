const jokeBtn = document.querySelector('.getJoke');
const jokeBtnSpan = jokeBtn.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
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
  setTimeout(turnOffLoader, 1000);
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(`used that one (${item}) already, run again!`);
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeBtnSpan.textContent = randomItemFromArray(
    buttonText,
    jokeBtnSpan.textContent
  );
}

jokeBtn.addEventListener('click', handleClick);
