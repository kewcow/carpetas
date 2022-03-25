'use strict';
const namePoema = document.querySelector('#box-poema');
const nameImage = document.querySelector('#box-image');
const boxContent = document.querySelector('#box-content');

const updatePoema = async (poema) => {
  while (boxContent.firstChild) {
    boxContent.removeChild(boxContent.firstChild);
  };
  try {
    const path = poema.replace(' ', '').toLowerCase();
    const url = `/texto/${path}.txt`;
    const author = await fetch(url);
    if (!author.ok) {
      throw new Error(`Not Found: ${author.status}`);
    };
    const cite = await author.text();
    const cita = document.createElement('q');
    cita.textContent = cite;
    boxContent.appendChild(cita);
  } catch(e) {
    console.log(e.status);
  }
};

const updateImage = async (img) => {
  boxContent.textContent = '';
  try {
    const path = img.replace(' ', '').toLowerCase();
    const url = `/image/${path}.jpg`;
    const artist = await fetch(url);
    if (!artist.ok) {
      throw new Error(`Not Found: ${artist.status}`);
    };
    const blob = await artist.blob();
    const link = URL.createObjectURL(blob);
    const boxImage = document.createElement('img');
    boxImage.src = link;
    boxContent.appendChild(boxImage);
  } catch(e) {
    console.log(e.status);
  }
};

updatePoema(namePoema.value);

namePoema.addEventListener('change', () => {
  updatePoema(namePoema.value);
});

nameImage.addEventListener('change', () => {
  updateImage(nameImage.value);
});
