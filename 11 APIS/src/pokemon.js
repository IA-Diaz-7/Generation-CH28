const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeContainer = document.getElementById('pokemons-container');
const btnFetch = document.getElementById('btn-fetch');

btnFetch.addEventListener('click', async () => {
    const pokemons = await fetchPokemon();

    pokemons.results.forEach(async (pokemon) => {
    const data = await fetch(BASE_URL + '/pokemon/' + pokemon.name);
    const parsedData = await data.json();
    const card = createPokemonCard(parsedData);
    pokeContainer.appendChild(card);
    })
})

const fetchPokemon = async () => {
    try {
    const data = await fetch(BASE_URL + '/pokemon?limit=152');
    const parsedData = await data.json();
    return parsedData;
    } catch (err) {
    console.error(err);
    }
}

function createPokemonCard(pokemonData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = pokemonData.sprites.front_default;
    image.alt = pokemonData.name;

    const name = document.createElement("h2");
    name.textContent = pokemonData.name;

    const types = document.createElement("ul");
    types.classList.add("types");
    pokemonData.types.forEach((type) => {
    const typeItem = document.createElement("li");
    typeItem.textContent = type.type.name;
    types.appendChild(typeItem);
});

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(types);

    return card;
}
