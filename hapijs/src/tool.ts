// Setup canvas
const cont: any = document.querySelector('p');
let count = 0;
const canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');
const width: number = canvas.width = window.innerWidth;
const height: number = canvas.height = window.innerHeight;

// Random number
const random = (min: number, max: number): number => {
  const num: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Color random
const randomRGB = (): string => {
  const rgb: string = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  return rgb;
}

// Shape 
class shape {
  x: number;
  y: number;
  velX: number;
  velY: number;
  constructor(
    x: number, y: number,
    velX: number, velY: number
  ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

// Balls
class ball extends shape{
  color: string;
  size: number;
  exists: boolean;
  constructor(
    x: number, y: number, 
    velX: number, velY: number,
    color: string, size: number
  ) {
    super(x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exists = true;
  }
  draw(): void {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, true);
    ctx.fill();
  }
  update(): void {
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
  collisionDetect(): void {
    for (const boll of balls) {
      if (!(this == boll) && boll.exists) {
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
  const boll: ball = new ball(
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
    if (boll.exists) {
      boll.draw();
      boll.update();
      boll.collisionDetect();
    };
  }
  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
}

class evilCircle extends ball {
  constructor(x: number, y: number) {
    super(x, y, 20, 20, '#fff', 10);

    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'h':
          this.x -= this.velX;
          break;
        case 'l':
          this.x += this.velX;
          break;
        case 'k':
          this.y -= this.velY;
          break;
        case 'j':
          this.y += this.velY;
          break;
      }
    });
  }
  draw(): void {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke()
  }
  checkBounds(): void {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }
    if ((this.x - this.size) <= 0) {
      this.x + this.size;
    }
    if ((this.y + this.size) >= width) {
      this.y -= this.size;
    }
    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }
  collisionDetect(): void {
    for (const boll of balls) {
      if (boll.exists) {
        const dx = this.x - boll.x;
        const dy = this.y - boll.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + boll.size) {
          boll.exists = false;
          count--;
          cont.textContent = `Balls Count: ${count}`;
        }
      }
    }
  }
};

const evilBall: evilCircle = new evilCircle(random(0, width), random(0, height));
