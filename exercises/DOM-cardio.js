/* eslint-disable */
// Make a div
const div = document.createElement('div')

// add a class of wrapper to it
div.classList.add('wrapper')

// put it into the body
document.body.appendChild(div)

// make an unordered list
const ul = document.createElement('ul')

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.textContent = 'one'
li2.textContent = 'two'
li3.textContent = 'three'

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

div.insertAdjacentElement('afterbegin', ul)

// create an image
const img = document.createElement('img')

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = 'https://source.unsplash.com/random/250x250'
img.classList.add('cute')
img.alt = 'Cute Puppy'
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const anotherDiv = document.createElement('div')
anotherDiv.classList.add('selected')
anotherDiv.innerHTML = `
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
`
div.insertAdjacentElement('afterbegin', anotherDiv)

// add a class to the second paragraph called warning
const selectedDiv = document.querySelector('.selected')
const secondP = selectedDiv.children[1]
secondP.classList.add('warning')

// remove the first paragraph
selectedDiv.firstElementChild.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}cm and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
  </div>
  `
}

// make a new div with a class of cards
const cards = document.createElement('div')
cards.classList.add('cards')
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Annie', 34, 160)
cardsHTML += generatePlayerCard('Ben', 27, 177)
cardsHTML += generatePlayerCard('Catherine', 42, 153)
cardsHTML += generatePlayerCard('Don', 55, 180)

// append those cards to the div
// put the div into the DOM just before the wrapper element
cards.innerHTML = cardsHTML
div.insertAdjacentElement('beforebegin', cards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete')
// make out delete function
function deleteCard(event) {
  const clickedBtn = event.currentTarget
  // clickedBtn.parentElement.remove()
  clickedBtn.parentElement.closest('.playerCard').remove()
}
// loop over them and attach a listener
buttons.forEach(btn => btn.addEventListener('click', deleteCard))