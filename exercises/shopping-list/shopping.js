const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// create an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  // if name is empty, don't submit it
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the item into our state
  items.push(item);
  // clear the form
  e.target.reset();
  // fire off a custom event that tells anyone who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input 
        value="${item.id}"
        type="checkbox"
        ${item.complete ? 'checked' : ''}
      >
      <span class="itemName">${item.name}</span>
      <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
      </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  if (localStorageItems.length) {
    items = localStorageItems;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // update items array without the id
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const markedItem = items.find((item) => item.id === id);
  markedItem.complete = !markedItem.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event delegation: listen for the click on the list (<ul></ul>)
// but delegate the click over to the button which is what's actually clicked
list.addEventListener('click', (e) => {
  const id = Number(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
