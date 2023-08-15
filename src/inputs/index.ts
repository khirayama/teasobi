import p5 from 'p5';

/* inputs
 * - keyboard
 * - mouse
 * - pen
 * - camera
 * - mic
 */

document.body.style.margin = "0";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    if (p.keyIsPressed === true) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.rect(25, 25, 50, 50);
    p.describe('50-by-50 white rect that turns black on keypress.');
  }
};

new p5(sketch, document.body);
