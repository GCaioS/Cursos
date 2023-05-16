const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

function convertPokemon(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}Bulbasaur</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                
                <img src="./img/bulbasaur-logo-8E729893C5-seeklogo.com-removebg-preview.png" alt="">
            </div>
        </li>
            `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemon(pokemon))
        }
    })
    
    
    .catch(function (error){                                  //catch caso retorne um erro.
        console.error(error)
    })