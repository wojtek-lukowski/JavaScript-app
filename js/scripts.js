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
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
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
  };

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal((`${pokemon.name}`), (`height: ${pokemon.height} m`), pokemon.imageUrl);
    });
  };
  /*
    //"Varying modal content" from Bootstrap documentation

    $('#exampleModal').on('click', function(event) {
      console.log('showModal test');
      let button = $(event.relatedTarget) // Button that triggered the modal
      let titleElement = $('.modal-title');
      let bodyElement = $('.modal-body');
      let modalContent = $('.modal-content');
      // modalContent.empty();
      // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      titleElement = button.data; //do not know how to add name/heights, etc. data to button
      console.log(titleElement);
      let modal = $(this)
      modal.find('.modal-title').text(`${titleElement}`);
      // modalTitle.append(titleElement);
      modal.find('.modal-body').text('height: test');
      modal.find('.modal-body').text('img');
    })*/

  //jQuery
  // function showModal(pokemon) {
  //   console.log('showModal test');
  //   let modalTitle = $('.modal-title');
  //   let modalHeader = $('.modal-header');
  //   let modalContent = $('.modal-content');
  //   modalContent.empty();
  //   let pokemonName = $(`<h5> ${pokemon.name} </h5>`);
  //   modalTitle.append(pokemonName);
  // };

  //vanilla
  function showModal(title, text, image) {
    console.log('showModal running');

    let modalContent = document.querySelector('.modal-content');

    let modalHeader = document.querySelector('.modal-header');
    let modalBody = document.querySelector('.modal-body');
    let modalFooter = document.querySelector('.modal-footer');

    let buttonClose = document.querySelector('#close');


    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imgElement = document.createElement('img');
    imgElement.src = image;

    // modalContent.innerHTML = '';
    modalHeader.innerHTML = '';
    modalBody.innerHTML = '';

    console.log(title, text, image); //this works ok

    modalHeader.appendChild(titleElement);

    modalBody.appendChild(contentElement);
    modalBody.appendChild(imgElement);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    // added "close" btn-primary manually
    modalFooter.appendChild(buttonClose);
    modalContent.appendChild(modalFooter);
  };

  //old modal window
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
    showModal: showModal,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function changeColor() {
  let body = document.querySelector('body');
  let button = document.querySelectorAll('button');
  body.classList.toggle('change-color-body');
  body.classList.toggle('change-color-font');
};
