interface obj{
  name: string;
  age: number;
}

class persons {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`I am ${this.name} and ${this.age} years`);
  }
}

class users extends persons {
  constructor(name: string, age: number) {
    super(name, age);
  }
  bay() {
    console.log(`bay ${this.name} of ${this.age} years`);
  }
}

const a: obj = new persons('jhosse', 22);
const b: obj = new users('kevin', 20);
