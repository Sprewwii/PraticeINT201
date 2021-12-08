import { pokemons } from './pokemon.js';
import { CookieUtil } from "./cookieUtil.js";

export let cart = {

    items: [],

    add: function(pokemon) {
        let foundIndex = -1;

        foundIndex = cart.items.findIndex(item => item.pokemonId === pokemon.pokemonId)

        if(foundIndex === -1){
            cart.items.push({ pokemonId: pokemon.pokemonId, quantity: 1});
        } else {
            cart.items[foundIndex].quantity += 1;
        }
    },

    save: function() {
        CookieUtil.set('cart', JSON.stringify(this.items), 3);
    },

    load: function() {
       this.items = JSON.parse(CookieUtil.get('cart'));
    },

    delete: function() {
        this.items = [];
        CookieUtil.unset('cart');
    },

    list: function() {
        this.load();
        /*  \\(^0^)//  "สอบเสดสักทีอั่ยเหี้ย"
             // \\    */
        let pokemonList = [];
        this.items.forEach((item) =>{
            // pokemons.forEach((pokemon) => {
            //     if(item.pokemonId === pokemon.pokemonId){
            //         pokemonList.push({ pokemonId: pokemon.pokemonId, 
            //                             pokemonName: pokemon.pokemonName,
            //                             pokemonImage: pokemon.pokemonImage,
            //                             pokemonQuantity: item.quantity })
            //     }
            // })
            let pokemonFound = pokemons.find((pokemon) => item.pokemonId === pokemon.pokemonId)
            if(pokemonFound){
                pokemonList.push({ pokemonId: pokemonFound.pokemonId, 
                    pokemonName: pokemonFound.pokemonName,
                    pokemonImage: pokemonFound.pokemonImage,
                    pokemonQuantity: item.quantity })
            }
        })
             
        return pokemonList;
    }
}
