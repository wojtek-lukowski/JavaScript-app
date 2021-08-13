// Immediately Invoked Function Exporession/IIFE
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    listItem.classList.add('group-list-item');
    listItem.classList.add('col-lg-4', 'col-md-6', 'col');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-lg', 'btn-primary');
    button.dataset.target = "#exampleModal";
    button.dataset.toggle = "modal";
    listItem.appendChild(button);
    list.appendChild(listItem);
    // button.addEventListener('click', function(event) {
    //   showDetails(pokemon);
    // });
  };

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        // console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  //modal-window
  // function showDetails(pokemon) {
  //   loadDetails(pokemon).then(function() {
  //     showModal((`${pokemon.name}`), (`height: ${pokemon.height} m`), pokemon.imageUrl);
  //   });
  // };

  // function showModal(pokemon) {
  //   console.log('test');
  //   let modalTitle = document.querySelector('.modal-title');
  //   let modalContent = document.querySelector('.modal-content');
  //   let modalHeader = document.querySelector('.modal-header');
  //   modalContent.innerHTML = '';
  //
  //   let pokemonName = document.createElement('h5');
  //   pokemonName.innerText = 'test';
  //
  //   modalTitle.appendChild(pokemonName);
  // };



  function showModal(pokemon) {
    console.log('test');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
    let modalContent = $('.modal-content');
    modalContent.empty();
    let pokemonName = $(`<h5> ${pokemon.name} </h5>`);
    modalTitle.append(pokemonName);
  };






  //from exercise
  // function showModal(title, text, image) {
  //   let modalContainer = document.querySelector('#modal-container');
  //
  //   modalContainer.innerHTML = '';
  //
  //   let modal = document.createElement('div')
  //   modal.classList.add('modal');
  //
  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close';
  //   closeButtonElement.addEventListener('click', hideModal);
  //
  //   let titleElement = document.createElement('h1');
  //   titleElement.innerText = title;
  //
  //   let contentElement = document.createElement('p');
  //   contentElement.innerText = text;
  //
  //   let imgElement = document.createElement('img');
  //   imgElement.src = image;
  //
  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modal.appendChild(imgElement);
  //   modalContainer.appendChild(modal);
  //   modalContainer.classList.add('is-visible');
  // };
  //
  // function hideModal() {
  //   let modalContainer = document.querySelector('#modal-container');
  //   modalContainer.classList.remove('is-visible');
  // };
  //
  // window.addEventListener('keydown', (e) => {
  //   let modalContainer = document.querySelector('#modal-container');
  //   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   };
  // });
  //
  // let modalContainer = document.querySelector('#modal-container');
  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });

  return {
    add: add,
    getAll: getAll,
    remove: remove,
    addListItem: addListItem,
    loadList: loadList,
    loadDetils: loadDetails,
    showModal: showModal
    // showDetils: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//h2 with number of pokemons
// let n = pokemonRepository.getAll().length;
// let numberHeadline = document.querySelector('.number-headline');
// let h2 = document.createElement('h2');
// h2.innerText = (`Number of Pokemons: ${n}`);
// numberHeadline.appendChild(h2);
