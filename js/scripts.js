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

// Immediately Invoked Function Exporession/IIFE
let pokemonRepository = (function() {
  let pokemonList = [];


  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function remove(start, number) {
    document.write(`<br><p>${pokemonList[start].name} has been removed.
      </p><p> This is the updated list:</p><br>`);
    console.log(`${pokemonList[start].name} has been removed.`);
    pokemonList.splice(start, number);
  }

  function addListItem(pokemon) {
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('poke-button')
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  return {
    add: add,
    getAll: getAll,
    remove: remove,
    addListItem: addListItem,
  };
})();

//adding a new pokemon (object)
pokemonRepository.add({
  name: 'Beedrill',
  heigth: 1,
  type: ['bug', 'poison']
});

//add another one to have 3 columns * 6 pokemons
pokemonRepository.add({
  name: 'Golbat',
  heigth: 1.6,
  type: ['poison', 'flying']
});

//adding all the pokemons from the old list (array)
// to the new one (pokemonRespository)
array.forEach(function(item) {
  pokemonRepository.add(item);
});


pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});

//h2 with number of pokemons
let n = pokemonRepository.getAll().length;
let numberHeadline = document.querySelector('.number-headline');
let h2 = document.createElement('h2');
h2.innerText = (`Number of Pokemons: ${n}`);
numberHeadline.appendChild(h2);

// headline.appendChild(text);

// removes a random pokemon
// let n = pokemonRepository.getAll().length;
//
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// };
// let pokemonToRemove = getRandomInt(n);
// pokemonRepository.remove(getRandomInt(pokemonToRemove), 1);
