//alert('Hello, World!');

let favoriteFood = 'pizza';
document.write(favoriteFood);

let myName = 'Wojtek';
let myAge = 49;

document.write('My name is ' + myName + ', I am ' + myAge + ' years old and I am ready to start.');
console.log(`${myName} ${myAge} ${favoriteFood}`);
document.write(`${myName} ${myAge} ${favoriteFood}`);
document.querySelector('h1').innerHTML = (`Hello, my name is ${myName}, I am ${myAge} years old and my favorite food is ${favoriteFood}.`);

let empty = null;
console.log(empty);

let wojtek = {
  name: 'Wojtek',
  age: 49,
  favFood: 'pizza'
};
console.log(wojtek.name);
console.log(wojtek.age);
console.log(wojtek.favFood);

wojtek.age = 50;
console.log(`New age: ${wojtek.age}`);

let howOld = 'age';
console.log(wojtek[howOld]);

let array = ['pizza', 'pasta', 'sushi', 'soup'];
console.log(array [0]);
array [3] = 'tacos';
console.log(array [3]);
console.log(`The ${array [0]} and ${array [1]} are the best.`);
console.log(array.length);
console.log(array);

console.log(typeof wojtek.name);
console.log(typeof array);
console.log(typeof array [1]);
console.log(typeof wojtek);

let simpleAddition = 2 + 2;
document.write(simpleAddition);

let size = 100;
let doubleSize = size * 2;
document.write(doubleSize);

let minSize = (doubleSize * 2) - (doubleSize / 2);
document.write(minSize);
