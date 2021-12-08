import { pokemons } from './pokemon.js';
import {cart} from './cart.js';
import {backgroundColor} from './theme.js';
// แสดงผล pokemon บนหน้าเว็บ
let divPokemons = document.querySelector("#pokemons");


window.addEventListener('load', (e) => {
    addSearch();
    pokemons.forEach((pokemon) => {
        showPokemon(pokemon);
    })
    cart.load();
    addBackgroundColorBtn();
    setBackgroundColor();
})

window.addEventListener('beforeunload', (e) => {
    cart.save();
    backgroundColor.save();
})

function showPokemon(pokemon){
    const hPokemonNameEle = document.createElement('h1');
    const pPokemonTypeEle = document.createElement('p');
    const pPokemonLevelEle = document.createElement('p');
    const imgPokemonImgEle = document.createElement('img');
    const pPokemonStockEle = document.createElement('p')
    const btnBuy = document.createElement('button');

    hPokemonNameEle.textContent = pokemon.pokemonName;
    pPokemonTypeEle.textContent = `TYPE: ${pokemon.pokemonType}`;
    pPokemonLevelEle.textContent = `LEVEL: ${pokemon.pokemonLevel}`;
    imgPokemonImgEle.src = `img/${pokemon.pokemonImage}`;
    pPokemonStockEle.textContent = `STOCK: ${pokemon.pokemonStocks}`;
    btnBuy.textContent = `BUY`;

    const divPokemonEle = document.createElement('div');
    divPokemonEle.setAttribute("id",pokemon.pokemonId);
    divPokemonEle.appendChild(imgPokemonImgEle);
    divPokemonEle.appendChild(hPokemonNameEle);
    divPokemonEle.appendChild(pPokemonTypeEle);
    divPokemonEle.appendChild(pPokemonLevelEle);
    divPokemonEle.appendChild(pPokemonStockEle);
    divPokemonEle.appendChild(btnBuy);
    
    divPokemons.appendChild(divPokemonEle);

    divPokemonEle.className = "w-1/3";
    hPokemonNameEle.className = "text-red-600";
    btnBuy.className = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";
    
    btnBuy.addEventListener("click", () => {
        if(pokemon.pokemonStocks > 0) {
            cart.add(pokemon)
            pokemon.pokemonStocks--;
            pPokemonStockEle.textContent = `STOCK: ${pokemon.pokemonStocks}`;
            cart.save();
            console.log(cart.list());
        } else {
            alert("ไม่มีแล้วอั่ยสัส");
        }
    });
}

function addSearch(){
    const searchIcon = document.querySelector("#search-icon");
    searchIcon.addEventListener("click", (e) => {
        e.preventDefault();
        const searchBar = document.querySelector("#search");
        if(searchBar.classList.contains("invisible")){
            searchBar.classList.remove("invisible")
        } else {
            searchBar.classList.add("invisible")
        }
    })

    const searchButton = document.querySelector("#search-btn");
    const searchInput = document.querySelector("#search-bar");
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        searchPokemon(searchInput.value);
    })
}

function searchPokemon(name){
    pokemons.forEach((pokemon) => {
        const divPokemonEle = document.querySelector(`#${pokemon.pokemonId}`)
        if(pokemon.pokemonName.toLowerCase().includes(name.toLowerCase())){
            divPokemonEle.classList.remove("hidden")
        }else{
            divPokemonEle.classList.add("hidden")
        }
    })
}

function addBackgroundColorBtn(){
    const changeBackgroundBtn = document.querySelector('#theme-icon');
    const body = document.querySelector("body");
    changeBackgroundBtn.addEventListener("click", () => {
        if(body.classList.contains("dark-theme")){
            body.classList.remove("dark-theme");
            backgroundColor.set("white");
        } else {
            body.classList.add("dark-theme");
            backgroundColor.set("dark");
        }
    })
}

function setBackgroundColor(){
    const body = document.querySelector("body");
    backgroundColor.load();

    if(backgroundColor.selectedBg !== "bg-white"){
        body.classList.add("dark-theme");
    }
}