"use strict";
const rickAndMorty = 'https://rickandmortyapi.com/api/character/';
const pokemons = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const worker = new Worker('/script/generate.js');
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    worker.postMessage({
        command: 'age',
        quota: 22
    });
});
worker.addEventListener('message', message => {
    console.log(`Happy Birthday: ${message.data} years`);
});
const stoped = document.querySelector('#stop');
stoped.addEventListener('click', () => {
    console.log('Hello Jhosse');
});
