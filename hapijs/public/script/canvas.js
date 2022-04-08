"use strict";

const x = document.querySelector('#x');
const y = document.querySelector('#y');
const w = document.querySelector('#width')
const h = document.querySelector('#height');
const canvas = document.querySelector(".draw");
const width = canvas.width = window.innerWidth;
const height=  canvas.height = window.innerHeight;
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

const degToRad = (degrees) => {
  return degrees * Math.PI / 180;
};

const image = new Image();
image.src = '../image/galaxia.jpg';

image.addEventListener('load', () => {
  ctx.drawImage(image, 0, 0, 500, 500, 0, 0, 500, 500);
});

const start = document.querySelector('#start');
start.addEventListener('click', () => {
  const obj = new square(x.value, y.value, w.value, h.value);
  obj.create();
});
