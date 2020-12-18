// const me = document.querySelector('.annie');
// console.log(me.children);
// console.log(me.childNodes);
// console.log(me.firstElementChild);
// console.log(me.lastElementChild);

const p = document.createElement('p');
p.textContent = 'I will be removed.';
document.body.appendChild(p);

p.remove();
console.log(p);
