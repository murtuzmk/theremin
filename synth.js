import {
    GestureRecognizer,
    DrawingUtils,
    PoseLandmarker
} from '@mediapipe/tasks-vision';
import * as core from '@magenta/music/es6/core.js';
import * as Tone from 'tone';

const player = new core.Player();
const worker = new Worker('/worker.js');

document.getElementById("playButton").addEventListener("click", () => {
  worker.postMessage({"sequence": []});
  worker.onmessage = async (event) => {
    if (event.data.fyi) {
      console.log(event.data.fyi);
    } else {
      const sample = event.data.sample;
      console.log("Sampel", sample);
      await player.start(sample, tempo);
      worker.postMessage({});
      // Do something with this sample
    }
  };
})