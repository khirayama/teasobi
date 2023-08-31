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

// document.body.requestFullscreen();
// document.exitFullscreen();

export const sketch = (p: p5) => {
  let img = null;
  let imageCORS = null;
  let isESCPressed = 0;
  let exitTimerId = null;
  let pressedTime = 0;

  p.preload = () => {
    imageCORS = new Image();
    imageCORS.src = 'https://placehold.jp/150x150.png';
    imageCORS.width = 150;
    imageCORS.height = 150;

    img = p.loadImage('./150x150.png');
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textSize(50);
    p.drawingContext.drawImage(imageCORS, 10, 10, 150, 150);
    const button = p.createButton('click me');
    button.position(0, 0);
    button.mousePressed(() => {
      pressedTime = Date.now();
      exitTimerId = setTimeout(() => {
        console.log('end!');
      }, 3000);
    });
    button.mouseMoved(() => {
      clearTimeout(exitTimerId);
      exitTimerId = null;
    });
  }

  p.draw = () => {
    // p.background(200);
    p.image(img, 160, 10, 150, 150);

    // keyboard
    if (p.keyIsPressed === true && p.key == 'Escape') {
      if (isESCPressed === 0) {
        exitTimerId = setTimeout(() => {
          pressedTime = Date.now();
          console.log('end!');
        }, 3000);
      }
    } else {
      clearTimeout(exitTimerId);
      exitTimerId = null;
    }

    if (exitTimerId) {
      p.fill(255);
      p.fill(0);
      p.text(Date.now() - pressedTime, 200, 200);
    }

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
