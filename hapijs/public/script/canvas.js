"use strict";

const x = document.querySelector('#x');
const y = document.querySelector('#y');
const w = document.querySelector('#width')
const h = document.querySelector('#height');
const canvas = document.querySelector(".draw");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight-85;
const ctx = canvas.getContext('2d');

// drawing cincel
class square {
  x;
  y;
  w;
  h;
  constructor(x,y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  create() {
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = 5;
    ctx.strokeRect(this.x, this.y, this.w, this.h)
  }
}

const start = document.querySelector('#start');
start.addEventListener('click', () => {
  const obj = new square(x.value, y.value, w.value, h.value);
  obj.create();
});

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(0, 0, width, height);

const color = document.querySelector('input[type="color"]');
const size = document.querySelector('input[type="range"]');
const output = document.querySelector('.output');
const clear = document.querySelector('.clear-btn');

const rad = (deg) => {
  return deg * Math.PI / 180;
};

size.addEventListener('change', () => output.textContent = size.value);

let curX;
let curY;
let press = false;

document.addEventListener('mousemove', e => {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
});

canvas.addEventListener('mousedown', () => press = true);
canvas.addEventListener('mouseup', () => press = false);

clear.addEventListener('click', () => {
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(0, 0, width, height);
});

const draw = () => {
  if (press) {
    ctx.fillStyle = color.value;
    ctx.beginPath();
    ctx.arc(curX, curY-85, size.value, rad(0), rad(360), false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
};

draw()
