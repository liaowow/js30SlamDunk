const width = 500;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `a cute pup I hope`;
const myHTML = `
  <div class="wrapper">
    <h1>Here's ${desc}</h1>
    <img src=${src} alt=${desc} />
  </div>
`;

// turn string into DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

// slap to the DOM
document.body.appendChild(myFragment);
