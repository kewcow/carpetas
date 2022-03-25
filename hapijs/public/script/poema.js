"use strict";

const poeta = document.querySelector('#box-poema');
const artist = document.querySelector('#box-image');
const boxContent = document.querySelector('#box-content');

const updatePoema = async (item) => {
  while (boxContent.firstChild) {
    boxContent.removeChild(boxContent.firstChild);
  };
  try {
    const path = item.replace(' ', '').toLowerCase();
    const url = `/texto/${path}.txt`
    const poema = await fetch(url);
    if (!poema.ok) {
      throw new Error(`Not Found: ${poema.status}`)
    }
    const txt = await poema.text();
    const cita = document.createElement('q');
    cita.textContent = txt;
    boxContent.appendChild(cita);
  } catch(err) {
    console.log(err.status);
  }
}

const updateImage = async (img) => {
  boxContent.textContent = '';
  try {
    const path = img.replace(' ', '').toLowerCase();
    const url = `/image/${path}.jpg`;
    const boxImg = await fetch(url);
    if (!boxImg) {
      throw new Error(`Not Found: ${boxImg.status}`);
    }
    const blob = await boxImg.blob();
    const imagen = URL.createObjectURL(blob);
    const itemImg = document.createElement('img');
    itemImg.src = imagen;
    boxContent.appendChild(itemImg);
  } catch(err) {
    console.log(err);
  }
};

updatePoema(poeta.value);

artist.addEventListener('change', () => {
  updateImage(artist.value);
});

poeta.addEventListener('change', () => {
  updatePoema(poeta.value);
});


