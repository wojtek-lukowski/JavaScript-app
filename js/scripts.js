let array = [];
let pokemonList = array;

array = [{
    name: 'Bulbasaur',
    heigth: .7,
    type: ['grass', 'poison']
  },
  {
    name: 'Ivysaur',
    heigth: 1,
    type: ['grass', 'poison']
  },
  {
    name: 'Charizard',
    heigth: 1.7,
    type: ['fire', 'flying']
  },
  {
    name: 'Blastoise',
    heigth: 1.6,
    type: ['water']
  },
  {
    name: 'Ekans',
    heigth: 2,
    type: ['poison']
  },
  {
    name: 'Pikachu',
    heigth: 0.4,
    type: ['electric']
  },
  {
    name: 'Arbok',
    heigth: 3.5,
    type: ['poison']
  },
  {
    name: 'Golurk',
    heigth: 12.8,
    type: ['ghost', 'ground']
  },
  {
    name: 'Clefable',
    heigth: 1.3,
    type: ['fairy']
  },
  {
    name: 'Venomoth',
    heigth: 1.5,
    type: ['bug', 'poison']
  },
  {
    name: 'Abra',
    heigth: .9,
    type: ['psychic']
  },
  {
    name: 'Machamp',
    heigth: 1.6,
    type: ['fighting']
  },
  {
    name: 'Slowpoke',
    heigth: 1.2,
    type: ['psychic', 'water']
  },
  {
    name: 'Chansei',
    heigth: 1.1,
    type: ['normal']
  },
  {
    name: 'Forretrees',
    heigth: 1.2,
    type: ['steel', 'bug']
  },
  {
    name: 'Palpitoad',
    heigth: .8,
    type: ['water', 'ground']
  },
];

//just playing
console.log(pokemonList);
console.log(`Number of Pokemons: ${array.length}`);
console.log(array[2]);
console.log(array[2].name);
console.log(array[0].type);
console.log(array[0].type[1]);

document.querySelector('h1').innerHTML = (`Number of Pokemons: ${array.length}`);
for (let i = 0; i < (array.length); i++) {
  console.log(array[i].name);
  document.write(`${array[i].name} <br>`);
}
