const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;

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
  // pull the data off the audio
  const timeData = new Uint8Array(analyzer.frequencyBinCount);
  const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
}

// draw frequency bars
function drawTimeData(timeData) {
  // inject time data into our timeData array
  analyzer.getByteTimeDomainData(timeData);
  console.log(timeData);
  requestAnimationFrame(() => drawTimeData(timeData));
}

// draw time bars
