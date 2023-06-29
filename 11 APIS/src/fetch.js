const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeContainer = document.getElementById('pokemons-container');
const btnFetch = document.getElementById('btn-fetch');

btnFetch.addEventListener('click', async () => {
    const pokemons = await fetchPokemon(BASE_URL + '/pokemon?limit=152');

    pokemons.results.forEach(async (pokemon) => {
        const data = await fetchPokemon(BASE_URL + '/pokemon/' + pokemon.name);
        console.log(data);
    })
})

// https://pokeapi.co/api/v2/pokemon/
//.foreach para bsucar
//.results para ver en consola e

const fetchPokemon = async (url) => {
    try {
        const data = await fetch(url);
        const parsedData = await data.json();
        return parsedData;
    } catch (err) {
        console.error(err);
    }
}

