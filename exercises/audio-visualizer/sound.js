import { hslToRgb } from './utils.js';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

// get audio
function handleError(err) {
  console.log('You must give access to your mic in order to proceed.');
}
async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  audioCtx.createMediaStreamSource(stream);
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyzer);
  // how much data should we collect
  analyzer.fftSize = 2 ** 8;
  // how many pieces of data are there
  bufferLength = analyzer.frequencyBinCount;
  // pull the data off the audio
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

// draw time lines
function drawTimeData(timeData) {
  // inject time data into our timeData array
  analyzer.getByteTimeDomainData(timeData);
  // visualize the data:
  // 1. clear canvas
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // 2. canvas setup
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // draw the lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });
  ctx.stroke();
  // 3. call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

// draw frequency bars
function drawFrequency(frequencyData) {
  analyzer.getByteFrequencyData(frequencyData);
  // figure out the bar width
  const barWidth = (WIDTH / bufferLength) * 1.5;
  let x = 0;
  frequencyData.forEach((amount) => {
    const percent = amount / 255;
    const [h, s, l] = [360 / (percent * 360), 0.8, 0.5];
    const barHeight = HEIGHT * percent * 0.5;
    // convert the colors to HSL
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 2;
  });
  requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();
