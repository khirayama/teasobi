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
    // do something
  }
};

new p5(sketch, document.body);
