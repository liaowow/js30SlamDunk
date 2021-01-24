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
  analyzer.fftSize = 2 ** 10;
  // how many pieces of data are there
  bufferLength = analyzer.frequencyBinCount;
  // pull the data off the audio
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
}

// draw frequency bars
function drawTimeData(timeData) {
  // inject time data into our timeData array
  analyzer.getByteTimeDomainData(timeData);
  // visualize the data:
  // 1. clear canvas
  // 2. canvas setup
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  // 3. call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

getAudio();

// draw time bars
