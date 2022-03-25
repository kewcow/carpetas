type path = string | number;
const rickAndMorty: Partial<path> = 'https://rickandmortyapi.com/api/character/';
const pokemons: string = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const worker = new Worker('/script/generate.js');

const start: any = document.querySelector('#start');
start.addEventListener('click', () => {
  worker.postMessage({
    command: 'numbers',
    quota: 'good'
  });
});

worker.addEventListener('message', message => {
  console.log(`Finnish generate: ${message.data} primes`);
});

const stoped: any = document.querySelector('#stop');
stoped.addEventListener('click', () => {
  console.log('Hello Jhosse');
})
