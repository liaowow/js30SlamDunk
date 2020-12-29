// select the elements on the page: canvas, shake btn
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 30; // all caps and underline to specify that this is a "true" constant

// set up our canvas for drawing
const { width, height } = canvas;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// randomize the starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// add some colors (via [mother-effing hsl] website)
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// start the drawing
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  /// coloring style 1: increment the hue, and update the strokeStyle
  hue += 5;
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  /// coloring style 2: randomize the hue value in the strokeStyle
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y depending on keys being pressed
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// listen for arrow keys
window.addEventListener('keydown', handleKey);

// write a clear/shake function
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// listen for shakeBtn click
shakeBtn.addEventListener('click', clearCanvas);
