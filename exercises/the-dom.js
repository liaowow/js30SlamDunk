/* eslint-disable */
// const p = document.querySelector('p');
// console.log(p);

// const heading = document.querySelector('h2')
// console.log(heading.textContent)
// console.log(heading.innerText)
// console.log(heading.innerHTML)
// console.log(heading.outerHTML)

// const pizzaList = document.querySelector('.pizza')
// console.log(pizzaList.textContent)
// // pizzaList.textContent += '🍕'
// pizzaList.insertAdjacentText('beforeend', '🍕')
// pizzaList.insertAdjacentText('afterbegin', '🍕')

const pic = document.querySelector('.nice')

function toggleRound() {
  pic.classList.toggle('round')
}

pic.addEventListener('click', toggleRound)