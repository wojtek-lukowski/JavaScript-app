// let array = [];
// let pokemonList = array;

let array = [{
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
    heigth: 2.8,
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

document.querySelector('h1').innerHTML = (`Number of Pokemons: ${array.length}`);

//"for" loop
// for (let i = 0; i < (array.length); i++) {
//   if (array[i].heigth > 3) {
//     document.write(`<p>${array[i].name} (heigth: ${array[i].heigth}m) - WOW! That's big!</p>`) //checking for pokemons higher than 3m and addressing them with a special remark
//   } else {
//     document.write(`<p>${array[i].name} (heigth: ${array[i].heigth}m)</p>`); //other pokemons fall here
//   }
// }

// "forEach" loop
// array.forEach(function(pokemon) {
//   document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}</p>`);
// });

// Immediately Invoked Function Exporession/IIFE
let pokemonRepository = (function() {
  let pokemonList = [];

  function add(item) {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

  function getName() {
   pokemonList.name;
    }

  function remove(start, number) {
    pokemonList.splice(start, number);
  }

  // function filter() {
  //   return pokemonList.filter(pokemonList => name.length > 1);
  // }

  return {
    add: add,
    getAll: getAll,
    getName: getName,
    remove: remove,
    //filter: filter,
  };
})();

//adding a new pokemon (object)
pokemonRepository.add({
  name: 'Beedrill',
  heigth: 1,
  type: ['bug', 'poison']
});

//adding all the pokemons from the old list (array)
// to the new one (pokemonRespository)
array.forEach(function(item) {
  pokemonRepository.add(item);
});

//removing a pokemon
// pokemonRepository.remove(0,1);

console.log(pokemonRepository.getAll()); //logs an array
// document.write(pokemonRepository.getAll()); //logs object/object

// listing the updated list to the console/document
// pokemonRepository.getAll().forEach(function(pokemon) {
//   console.log(`${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}`);
//   document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}</p>`);
// });

// listing the updated list to the console/document + size condition
pokemonRepository.getAll().forEach(function(pokemon) {
if (pokemon.heigth > 2.5) {
  document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type} - WARNING! - A big Pokemon!</p>`);
} else {
  document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}</p>`);
}
});

// console.log(pokemonRepository.filter());

// console.log(pokemonRepository.getNames());
