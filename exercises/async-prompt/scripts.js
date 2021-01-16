function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function ask(options) {
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
    console.log(popup);
    // check if they want a cancel btn
    if (options.cancel) {
      const skipBtn = document.createElement('button');
      skipBtn.type = 'button';
      skipBtn.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipBtn);
      // listen for a click on the cancel btn
    }
    // listen for the submit event on the inputs
    popup.addEventListener('submit', function (e) {
      e.preventDefault();
      resolve(e.target.input.value);
    });
    // when someone submits, resolve the data that was in the input box
    // insert popup onto the DOM
    document.body.appendChild(popup);
    // put a small timeout before adding the 'open' class for a more visible transition
    await wait(50);
    popup.classList.add('open');
  });
}
