const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('clicked!');
}

butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// listen on multiple items

function handleBuy(event) {
  // console.log('BUYING ITEM');
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up:
  // event.stopPropagation();
}

const buyBtns = document.querySelectorAll('button.buy');
buyBtns.forEach((btn) => btn.addEventListener('click', handleBuy));

/* eslint-disable */
window.addEventListener('click', function(event) {
  console.log('Clicked on window!');
  // event.stopPropagation();
}
// , {capture: true}
);
