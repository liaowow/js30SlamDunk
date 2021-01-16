function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup entirely
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null;
}

function ask(options) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async function (resolve) {
    // create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
      `
    );
    // check if they want a cancel btn
    if (options.cancel) {
      const skipBtn = document.createElement('button');
      skipBtn.type = 'button';
      skipBtn.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipBtn);
      // listen for a click on the cancel btn
      skipBtn.addEventListener('click', () => resolve(null), { once: true });
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove it from DOM
        destroyPopup(popup);
      },
      { once: true }
    );
    // when someone submits, resolve the data that was in the input box
    // insert popup onto the DOM
    document.body.appendChild(popup);
    // put a small timeout before adding the 'open' class for a more visible transition
    await wait(50);
    popup.classList.add('open');
  });
}

// select all btns that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const shouldCancel = 'cancel' in button.dataset; // Or: button.hasAttribute('data-cancel)
  const answer = await ask({
    title: button.dataset.question,
    cancel: shouldCancel,
  });
  console.log(answer);
}

const btns = document.querySelectorAll('[data-question]');
btns.forEach((btn) => btn.addEventListener('click', askQuestion));

const questions = [
  { title: `What's your name?` },
  { title: `What's your age?`, cancel: true },
  { title: `What's your dog's name?` },
];

// utility function
async function asyncMap(array, callback) {
  // make an array to store results
  const results = [];
  // loop over array
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
