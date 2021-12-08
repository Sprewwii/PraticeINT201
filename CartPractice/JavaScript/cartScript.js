import { cart } from "./cart.js";

let divPokemonsInCart = document.querySelector("#cartKhongJing");

window.addEventListener('load', (e) => {
    let pokemonInCart = cart.list();
    pokemonInCart.forEach((pokemon) => {
        showCart(pokemon);
    })
    addDeleteBtn();
})

function showCart(pokemon){
    const hPokemonNameEle = document.createElement('h1');
    const imgPokemonImgEle = document.createElement('img');
    const pPokemonQuantityEle = document.createElement('p');

    hPokemonNameEle.textContent = pokemon.pokemonName;
    imgPokemonImgEle.src = `img/${pokemon.pokemonImage}`;
    pPokemonQuantityEle.textContent = pokemon.pokemonQuantity;

    const divPokemonEle = document.createElement('div');
    divPokemonEle.setAttribute("id",pokemon.pokemonId);
    divPokemonEle.appendChild(imgPokemonImgEle);
    divPokemonEle.appendChild(hPokemonNameEle);
    divPokemonEle.appendChild(pPokemonQuantityEle);
    
    divPokemonsInCart.appendChild(divPokemonEle);

    divPokemonEle.className = "w-1/3";
    hPokemonNameEle.className = "text-red-600";
}


function addDeleteBtn(){
    const deletePokemonAll = document.querySelector('#deleteBtn');
    deletePokemonAll.addEventListener("click", () => {
        cart.delete();
        divPokemonsInCart.remove();
    })
}