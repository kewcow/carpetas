'use strict';

const boxImg = document.querySelector('#imgBox');

/*const changeBg = (e) => {
	const itemImg = document.querySelector('#imgItem');
	const imgStyle = window.getComputedStyle(itemImg);
	const imgPro = imgStyle.getPropertyValue('background-image');
	const item = e.target;
	const itemStyle = window.getComputedStyle(item);
	const itemPro = itemStyle.getPropertyValue('background-image');
	if (imgPro !== itemPro) {
		itemImg.style.backgroundImage = itemPro;
	}
};

boxImg.addEventListener('click', changeBg);*/

const images = ['galaxia.jpg', 'estrella.jpg', 'images.jpg', 'planeta.jpg'];

for (let img of images) {
	const item = document.createElement('img');
	const atry = item.setAttribute('src', `image/${img}`);
	boxImg.appendChild(item);
	boxImg.addEventListener('click', (e) => {
		const imgContent = document.querySelectorAll('img')[0];
		imgContent.src = e.target.src;
	});
}

function people(name) {
	this.name = name;
	this.day = function() { console.log(`mi nombre es: ${this.name}`) };
};

const person = new people('kevin');
const animal = new people('lucy');
