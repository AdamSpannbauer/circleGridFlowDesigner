import { makeCircleGrid } from './src/makeCircleGrid.js';
import { positionCanvas } from './src/positionCanvas.js';

let cnv;

let nRowsSlider;
let nColsSlider;
let circleSizeSlider;
let nSclSlider;

window.windowResized = () => {
  cnv = createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  positionCanvas(cnv);
};

window.setup = () => {
  cnv = createCanvas(windowHeight * 0.9, windowHeight * 0.9);
  positionCanvas(cnv);

  nRowsSlider = createSlider(3, 16, 6);
  nColsSlider = createSlider(3, 16, 6);
  circleSizeSlider = createSlider(0, 100, 80);
  nSclSlider = createSlider(0, 32, 5);
};

window.draw = () => {
  background(255);
  rect(0, 0, width, height);

  const circles = makeCircleGrid(
    floor(nRowsSlider.value()),
    floor(nColsSlider.value()),
    circleSizeSlider.value() / 100,
    map(nSclSlider.value(), 0, 32, 0.0001, 0.003),
  );

  circles.forEach((c) => c.draw());
};
