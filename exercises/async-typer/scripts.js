function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// Method#1: async for-of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     // wait for a little bit
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// Method#2: recursion
function draw(el) {
  let idx = 0;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, idx);
    idx += 1;
    // wait for a little bit
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    // exit condition
    if (idx <= text.length) drawLetter();
  }
  // when draw() runs, kick off drawLetter
  drawLetter();
}

const elements = document.querySelectorAll('[data-type]');
elements.forEach(draw);
