const boxList: any = document.querySelector('#box-list');
const names: any = document.querySelector('#names');
const enter: any = document.querySelector('#enter');

const persons: any = [];

// Created Class of characters
class characters {
  name: string;
  del: string;
  constructor(name: string, del: string) {
    this.name = name;
    this.del = del;
  }
  delName(names: string) {
    const filtName = persons.map((item: any) => item.name).indexOf(names);
    persons.splice(filtName, 1);
    box();
  }
};

// Arrow functions of looped elements in array
const box = () => {
  boxList.textContent = '';
  for (const person of persons) {
    const boxNames = document.createElement('div');
    const itemName = document.createElement('span');
    const delBox = document.createElement('button');

    itemName.textContent = `- ${person.name}`;
    delBox.textContent = `${person.del}`;
    delBox.addEventListener('click', () => person.delName(person.name));

    boxNames.appendChild(itemName);
    boxNames.appendChild(delBox);
    boxList.appendChild(boxNames);
  }
}

const addPersons = () => {
  const character: characters = new characters(names.value, 'Deleted');
  persons.push(character);
  box();
}

enter.addEventListener('click', () => {
  addPersons();
  names.value = '';
  names.focus();
});

names.addEventListener('keydown', (e: any) => {
  if (e.key === 'Enter') {
    addPersons();
    names.value = '';
  }
})

