import p5 from "p5";

window.addEventListener("keydown", (e) => {
  e.preventDefault();
});

window.addEventListener("touchstart", (e) => {
  e.preventDefault();
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

export const sketch = (p: p5) => {
  const w = p.windowWidth;
  const h = p.windowHeight;

  let circles = [];

  p.setup = () => {
    p.createCanvas(w, h);
  };

  p.draw = () => {
    // p.background(200);

    if (p.keyIsPressed) {
      let x = w / 2;
      let y = h / 2;
      if ("rtyu".split("").includes(p.key.toLowerCase())) {
        y -= h / 4;
      } else if ("qwe".split("").includes(p.key.toLowerCase())) {
        x -= w / 4;
        y -= h / 4;
      } else if ("iop[]¥{}|".split("").includes(p.key.toLowerCase())) {
        x += w / 4;
        y -= h / 4;
      } else if ("asd".split("").includes(p.key.toLowerCase())) {
        x -= w / 4;
      } else if ("kl;':\"".split("").includes(p.key.toLowerCase())) {
        x += w / 4;
      } else if ("zxc".split("").includes(p.key.toLowerCase())) {
        x -= w / 4;
        y += h / 4;
      } else if ("vbn".split("").includes(p.key.toLowerCase())) {
        y += h / 4;
      } else if ("m,./<>?".split("").includes(p.key.toLowerCase())) {
        x += w / 4;
        y += h / 4;
      }
      const c = new Circle(p, x, y);
      circles.push(c);
    }

    if (p.mouseIsPressed) {
      const c = new Circle(p, p.mouseX, p.mouseY);
      circles.push(c);
    }

    for (let t of p.touches as { x: number; y: number }[]) {
      const c = new Circle(p, t.x, t.y);
      circles.push(c);
    }

    circles.forEach((c) => {
      c.update();
      c.render();
    });

    circles = circles.filter((c) => !c.isEnd());
  };
};

class Circle {
  private p: p5;

  private x: number;

  private y: number;

  private d: number = 8;

  private step: number = 0;

  constructor(p: p5, x: number, y: number) {
    this.p = p;
    this.x = x;
    this.y = y;
  }

  update() {
    this.step += 1;
    this.d += Math.max(80 / this.step, 1);
  }

  render() {
    const c = this.p.color(0, 0, 0);
    c.setAlpha(0);
    this.p.fill(c);
    this.p.circle(this.x, this.y, this.d);
  }

  isEnd() {
    return this.step > 80;
  }
}

new p5(sketch, document.body);
