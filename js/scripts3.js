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
    document.write(`<p>${pokemonList[start].name} has been removed.</p>`);
    console.log(`${pokemonList[start].name} has been removed.`);
    pokemonList.splice(start, number);
  }

  return {
    add: add,
    getAll: getAll,
    remove: remove,
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

// listing the updated list to the console/document + size condition
// pokemonRepository.getAll().forEach(function(pokemon) {
//   if (pokemon.heigth > 2.5) {
//     document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type} - WARNING! - A big Pokemon!</p>`);
//   } else {
//     document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}</p>`);
//   }
// });

pokemonRepository.getAll().forEach(function(pokemon) {
let listContainer = document.querySelector('.list-container');
let paragraph = document.createElement('p');
if (pokemon.heigth > 2.5) {
  paragraph.innerText = (`${pokemon.name}, ${pokemon.heigth}, ${pokemon.type} - WARNING! - A big Pokemon!`);
  listContainer.appendChild(paragraph);
} else {
  paragraph.innerText = (`${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}`);
  listContainer.appendChild(paragraph);
}
});

//adding a button for the removal of a random pokemon
let removal = document.querySelector('.removal');
let button = document.createElement('button');
button.innerText = "Click to remove one Pokemon";
removal.appendChild(button);

button.onclick = function remove() {
  let n = pokemonRepository.getAll().length;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
  let pokemonToRemove = getRandomInt(n);
  pokemonRepository.remove(getRandomInt(pokemonToRemove),1);

  let elementToRemove = document.querySelectorAll('p');
  elementToRemove.parentElement.removeChild(elementToRemove);
};





// removes a random pokemon
// let n = pokemonRepository.getAll().length;
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// };
// let pokemonToRemove = getRandomInt(n);
// pokemonRepository.remove(getRandomInt(pokemonToRemove),1);

// let elementToRemove = document.querySelectorAll('p');
// console.log(elementToRemove);
// elementToRemove.parentElement.removeChild(elementToRemove);

// the refreshed list - the removed pokemon is not there anymore
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.heigth > 2.5) {
    document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type} - WARNING! - A big Pokemon!</p>`);
  } else {
    document.write(`<p>${pokemon.name}, ${pokemon.heigth}, ${pokemon.type}</p>`);
  }
});
