const name = 'Taylor';

// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callback and foreach 
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

people.forEach(person => {
  console.log(`hello ${person}`);
});

people.forEach(logPerson);