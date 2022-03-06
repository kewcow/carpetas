// Setup canvas
const canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
const width: number = canvas.width = window.innerWidth;
const height: number = canvas.height = window.innerHeight;

// Random number
const random = (min: number, max: number) => {
  const num: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Color random
const randomRGB = () => {
  const rgb: string = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  return rgb;
}

// Balls
class ball {
  x: number;
  y: number;
  velX: number;
  velY: number;
  color: string;
  size: number;
  constructor(
    x: number, y: number, 
    velX: number, velY: number,
    color: string, size: number
  ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect() {
    for (const boll of balls) {
      if (!(this == boll)) {
        const dx = this.x - boll.x;
        const dy = this.y - boll.x;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + boll.size) {
          boll.color = this.color = randomRGB();
        }
      }
    }
  }
};

//Animate balls
const balls: any = [];

while (balls.length < 5) {
  const size = random(10, 20);
  const boll = new ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(boll);
}

const loop = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const boll of balls) {
    boll.draw();
    boll.update();
    boll.collisionDetect();
  }

  requestAnimationFrame(loop);
}



