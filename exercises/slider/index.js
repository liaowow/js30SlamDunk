function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  let current;
  let prev;
  let next;

  const slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.goToPrev');
  const nextBtn = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // 1. strip all classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    [prev, current, next].forEach((el) =>
      el.classList.remove(...classesToRemove)
    );
    // 2. detect direction, reassign prev/current/next variables
    if (direction === 'back') {
      // make a new array of new values, and destructure them into the prev/current/next variables
      [prev, current, next] = [
        // get the prev slide, if there's none, get the last slide from the slider
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    // 3. apply new set of classes to the slides
    applyClasses();
  }

  startSlider();
  applyClasses();

  prevBtn.addEventListener('click', () => move('back'));
  nextBtn.addEventListener('click', move);
}

Slider(document.querySelector('.slider'));
Slider(document.querySelector('.dog-slider'));
