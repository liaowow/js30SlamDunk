const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('clicked!');
}

butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// listen on multiple items

function handleBuy() {
  console.log('BUYING ITEM');
}

const buyBtns = document.querySelectorAll('button.buy');
buyBtns.forEach((btn) => btn.addEventListener('click', handleBuy));
