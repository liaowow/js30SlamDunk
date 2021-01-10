function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevBtn = slider.querySelector('.goToPrev');
  const nextBtn = slider.querySelector('.goToNext');

  this.startSlider();
  this.applyClasses();

  prevBtn.addEventListener('click', () => this.move('back'));
  nextBtn.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // 1. strip all classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  [this.prev, this.current, this.next].forEach((el) =>
    el.classList.remove(...classesToRemove)
  );
  // 2. detect direction, reassign prev/current/next variables
  if (direction === 'back') {
    // make a new array of new values, and destructure them into the prev/current/next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there's none, get the last slide from the slider
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  // 3. apply new set of classes to the slides
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider, dogSlider);

window.mySlider = mySlider;
window.dogSlider = dogSlider;

window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowRight') {
    mySlider.move();
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    mySlider.move('back');
    dogSlider.move('back');
  }
});
