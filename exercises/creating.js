const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a Paragraph tag.';
myParagraph.classList.add('special');
// console.log(myParagraph);

const myImg = document.createElement('img');
myImg.src = 'https://source.unsplash.com/random/300x300';
myImg.alt = 'Nice pic';
// console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImg);

document.body.appendChild(myDiv);

// oh shoot! we need to add some heading to the top!
const heading = document.createElement('h2');
heading.textContent = 'Awesome Heading';
myDiv.insertAdjacentElement('afterbegin', heading);

// practice using element web APIs: my way
const myList = document.createElement('ul');
const one = document.createElement('li');
const two = document.createElement('li');
const three = document.createElement('li');
one.textContent = '☝️';
two.textContent = '✌️';
three.textContent = '👌';
myList.appendChild(one);
myList.appendChild(two);
myList.appendChild(three);
myDiv.insertAdjacentElement('beforeend', myList);

// practice using element web APIs: wes way
const list = document.createElement('ul');
const li2 = document.createElement('li');
li2.textContent = 'two';
list.appendChild(li2);

document.body.insertAdjacentElement('afterbegin', list);

const li1 = li2.cloneNode(true);
li1.textContent = 'one';
li2.insertAdjacentElement('beforebegin', li1);

const li3 = li2.cloneNode(true);
li3.textContent = 'three';
li2.insertAdjacentElement('afterend', li3);
