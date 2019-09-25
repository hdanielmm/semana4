class Figure {

  // x = 0;
  // y = 0;
  fill = "";
  strokeColor = "black";
  strokeWeight = 1;

  constructor(obj) {
    this.x = obj.x || 0;
    this.y = obj.y || 0;
    // if (obj.x) {
    //   this.x = obj.x;
    // }
    // if (obj.y) {
    //   this.y = obj.y;
    // }
    if (obj.fill) {
      this.fill = obj.fill;
    }
    if (obj.strokeColor) {
      this.strokeColor = obj.strokeColor;
    }
    if (obj.strokeWeight) {
      this.strokeWeight = obj.strokeWeight;
    }
  }
  setBrush() {
    if (this.fill.length == 0) {
      noFill();
    } else {
      fill(this.fill);
    }

    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
  }
}

class Circle extends Figure {
  constructor(obj) {
    super(obj);
    this.r = obj.r || 50;
    // if (obj.r) {
    //   this.r = obj.r;
    // } else {
    //   this.r = 50;
    // }
  }
  draw() {
    this.setBrush();
    circle(this.x, this.y, this.r)
  }
}

class Triangle extends Figure {
  constructor(obj) {
    super(obj);
    this.b = obj.b || 100;
    this.h = obj.h || 100;
    // if (obj.b) {
    //   this.b = obj.b;
    // } else {
    //   this.b = 100;
    // }
    // if (obj.h) {
    //   this.h = obj.h;
    // } else {
    //   this.h = 100;
    // }
  }

  draw() {
    this.setBrush();
    triangle(this.x, this.y - this.h / 2, this.x + this.b / 2, this.y + this.h / 2, this.x - this.b / 2, this.y + this.h / 2)
  }
}

class Rectangle extends Figure {
  constructor(obj) {
    super(obj);

    if (obj.w && obj.h) {
      this.w = obj.w;
      this.h = obj.h;
    } else {
      this.w = 80;
      this.h = 80;
    }
  }
  draw() {
    this.setBrush();
    rect(this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
  }
}

class Square extends Figure {
  constructor(obj) {
    super(obj);

    if (obj.s) {
      this.s = obj.s;
    } else {
      this.s = 80;
    }
  }
  draw() {
    this.setBrush();
    square(this.x + this.s / 2, this.y + this.s / 2, this.s);
  }
}

function drawFigures(arr) {
  arr.forEach(element => {
    element.draw();
  });
}

function setup() {
  createCanvas(400, 400);
}

function draw() {

  const figures = [
    new Triangle({ x: 30, y: 30, b: 60, h: 20, fill: "red", strokeColor: "black" }),
    new Circle({ x: 150, y: 30, r: 50, fill: "blue" }),
    new Rectangle({ x: 30, y: 150, w: 120, h: 30 }),
    new Square({ x: 250, y: 250, s: 65, strokeColor: "orange", strokeWeight: 5 })
  ];

  drawFigures(figures);
}