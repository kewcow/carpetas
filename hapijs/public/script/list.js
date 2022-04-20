"use strict";
const boxList = document.querySelector('#box-list');
const names = document.querySelector('#names');
const enter = document.querySelector('#enter');
const persons = [];
// Created Class of characters
class characters {
    name;
    del;
    constructor(name, del) {
        this.name = name;
        this.del = del;
    }
    delName(names) {
        const filtName = persons.map((item) => item.name).indexOf(names);
        persons.splice(filtName, 1);
        box();
    }
}
;
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
};

const addPersons = () => {
    const character = new characters(names.value, 'Deleted');
    persons.push(character);
    box();
};

enter.addEventListener('click', () => {
    addPersons();
    names.value = '';
    names.focus();
});

names.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addPersons();
        names.value = '';
    }
});
