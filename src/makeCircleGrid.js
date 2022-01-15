import { LinedCircle } from './linedCircle.js';

const calcCellSize = (nRows, nCols) => {
  const rowCellSize = height / nRows;
  const colCellSize = width / nCols;

  return min([rowCellSize, colCellSize]);
};

export const makeCircleGride = (nRows, nCols, circleSizePerc = 0.8, nScl = 0.003) => {
  const cellSize = calcCellSize(nRows, nCols);
  const w = cellSize * nCols;
  const h = cellSize * nRows;
  const r = (cellSize / 2) * circleSizePerc;

  const x0 = width / 2 - w / 2 + cellSize / 2;
  const y0 = height / 2 - h / 2 + cellSize / 2;

  const circles = [];
  for (let rowI = 0; rowI < nRows; rowI += 1) {
    const y = y0 + rowI * cellSize;
    for (let colI = 0; colI < nCols; colI += 1) {
      const x = x0 + colI * cellSize;

      const aNoise = noise(x * nScl, y * nScl);
      const a = map(aNoise, 0, 1, 0, TWO_PI * 2);

      const c = new LinedCircle(x, y, r, a);
      circles.push(c);
    }
  }

  return circles;
};
