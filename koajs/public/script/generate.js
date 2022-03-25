addEventListener('message', message => {
  if (message.data.command === 'age') {
    jhoss(message.data.quota);
  }
});

class person {
  name;
  constructor(name) {
    this.name = name;
  }
};

class she extends person {
  age;
  constructor(name, age) {
    super(name)
    this.age = age;
  }
}

const jhoss = (quota) => {
  const age = new she('Jhosse', quota);
  postMessage(age.age);
};
