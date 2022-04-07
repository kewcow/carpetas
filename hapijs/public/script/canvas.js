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


ctx.strokeStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 100);
const triHeigh = 100 * Math.tan(degToRad(60));
ctx.lineTo(250, 50 + triHeigh);
ctx.lineTo(200, 100);
ctx.lineWidth = 5
ctx.stroke();

ctx.strokeStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
const triHeight = 100 * Math.tan(degToRad(60));
ctx.lineTo(150, 50 + triHeight);
ctx.lineTo(100, 100);
ctx.stroke();

const start = document.querySelector('#start');
start.addEventListener('click', () => {
  const drawing = new square(x.value, y.value, w.value, h.value);
  drawing.create();
});
