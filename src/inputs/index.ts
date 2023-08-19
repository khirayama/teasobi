import p5 from 'p5';

/* inputs
 * - keyboard
 * - mouse
 * - touch
 * - pen
 * - camera
 * - mic
 * outputs
 * - render
 * - images
 */

document.body.style.margin = "0";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textSize(50);
  }

  p.draw = () => {
    // p.background(200);

    // keyboard
    if (p.keyIsPressed === true) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.text(p.key, 33, 65);

    // mouse, and, pen
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);

    if (p.touches.length) {
      console.log(p.touches);
    }
  }
};

new p5(sketch, document.body);
