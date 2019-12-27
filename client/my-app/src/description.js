import React from "react";
import data from './pokedex.json';
import PokemonList from './Pokemons';

export default class Description extends React.Component{
    
    async fetchListPokemon() {
        const response = await fetch('http://localhost:3000/api/pokemon', {
                headers: {
                    "Content-Type" : "application/json"
                }
        });
        
        const data = await response.json();
        this.State({pokemons : data.pokemons})
    }


    render(){
        return(
            
            <div class="container">
                <input></input>
                <div class="row">
                
                    {data.map((pokemon, ndex) => {
                        return <div class="grid">
                                <table>
                                    <tr>
                                         <td>
                                            <h3>Nom : {pokemon.nom}</h3>
                                            <p>{pokemon.ndex}</p>
                                            <p>{pokemon.nomen}</p>
                                            <p>{pokemon.nomja}</p>
                                            <p>{pokemon.nomtm}</p>
                                            <p>{pokemon.nomde}</p>
                                            <p>Légende : {pokemon.légende}</p>
                                            <p>Espèce : {pokemon.espece}</p>
                                            <p>Taille : {pokemon.taille}</p>
                                            <p>Poids : {pokemon.poids}</p>

                                            </td>
                                          
                                    </tr>

                                </table>
                            
                            </div>
                        
                        }
                    )}
                </div>
            </div>
        )
    }
}