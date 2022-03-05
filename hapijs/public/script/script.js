'use strict';

const boxImg = document.querySelector('#imgBox');

const itemS = (tg, tag) => {
  let xStyle = '';
  if (tag !== undefined) {
    xStyle = tag;
  } else {
    xStyle = tg;
  }
  const yStyle = this.getComputedStyle(xStyle);
  const tStyle = yStyle.getPropertyValue('background-image')
  return tStyle
};

const changeBg = (e) => {
  const imgBox = document.querySelector('#imgItem');
  if (itemS(e.target) !== itemS(e.target, imgBox)) {
    imgBox.style.backgroundImage = itemS(e.target);
  };
};

boxImg.addEventListener('click', changeBg);

class shape {
  name;
  size;
  sizeLength;
  constructor(name, sizeLength, size) {
    this.name = name;
    this.size = size;
    this.sizeLength = sizeLength;
  };
  calcPerm() {
    if (this.size === 3) {
      console.log(`${this.name} - el perimetro es: ${this.size*this.sizeLength}`);
    } else {
    return console.log(`${this.name} - el perimetro es: ${this.sizeLength*4}`);
    }
  };
};

class air extends shape {
  size;
  constructor(name, sizeLength, size) {
    super(name, sizeLength);
    this.size = 4;
  };
  calcAr() {
    console.log(`${this.name} - el area es: ${this.sizeLength**2}`);
  };
};

const square = new air('square', 10);
const triangle = new shape('triangle', 10, 3);

const git = async () => {
  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const obj = await response.json();
  console.log(obj.homeTown);
};
