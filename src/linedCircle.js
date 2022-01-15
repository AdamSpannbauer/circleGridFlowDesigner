export class LinedCircle {
  constructor(x, y, r, a = 0) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.a = a;
  }

  get d() {
    return this.r * 2;
  }

  draw() {
    const {
      x, y, d, r, a,
    } = this;
    push();
    translate(x, y);
    rotate(a);

    // TODO: add lines to draw
    ellipse(0, 0, d, d);
    line(-r, 0, r, 0);
    pop();
  }
}
