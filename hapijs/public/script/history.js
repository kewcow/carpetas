'use strict';

const customName = document.querySelector('#name');
const story = document.querySelector('#story');
const press = document.querySelector('#press');

const randomArray = (array) => {
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

const storyText = 'a medida que pasan los :time: llego al mismo lugar donde un dia me senti como un :state:, pero ahora solo me siento :sent:...... J';

const time = [
	'minutos',
	'segundos',
	'dias'
];

const state = [
	'extraño',
	'desconocido',
	'estupido'
];

const sent = [
	'solo',
	'triste',
	'cansado'
];

const result = () => {
	let newStory = storyText;

	const Ti = randomArray(time);
	const St = randomArray(state);
	const Se = randomArray(sent);
	newStory = newStory.replace(':time:', Ti);
	newStory = newStory.replace(':state:', St);
	newStory = newStory.replace(':sent:', Se);

	if (customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replace('J', name);
	}

	if (document.querySelector('#day').checked) {
		story.style.color = '#fff';
	} else {
		story.style.color = '#000';
	}

	story.textContent = newStory;
}

press.addEventListener('click', result);
