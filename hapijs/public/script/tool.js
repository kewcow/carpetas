"use strict";
class persons {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`I am ${this.name} and ${this.age} years`);
  }
}
class users extends persons {
  constructor(name, age) {
    super(name, age);
  }
  bay() {
    console.log(`bay ${this.name} of ${this.age} years`);
  }
}
const a = new persons('jhosse', 22);
const b = new users('kevin', 20);
