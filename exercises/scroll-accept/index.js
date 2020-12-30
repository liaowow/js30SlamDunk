const terms = document.querySelector('.terms-and-conditions');
// const watch = document.querySelector('.watch');
const btn = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    btn.disabled = false;
    // stop observing the btn
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function (event) {
//   console.log(event.currentTarget.scrollTop);
// });
