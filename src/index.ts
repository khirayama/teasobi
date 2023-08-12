// [get started | p5.js](https://p5js.org/get-started/)
import p5 from 'p5';

document.body.style.margin = "0";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }
  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  }
};

new p5(sketch, document.body);
