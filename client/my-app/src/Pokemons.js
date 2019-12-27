import React from "react";
import data from './pokedex.json';


export default class PokemonList extends React.Component{
    state = { pokemons : []};

    

    async fetchListPokemon() {
        const response = await fetch('http://localhost:3000/api/pokemon', {
                headers: {
                    "Content-Type" : "application/json"
                }
        });
        
        const data = await response.json();
        this.State({pokemons : data.pokemons})
    }

    handledetail(ndex){

    }

    render(){

        

        return(
            
            <div class="container">
                <input></input>
                <div class="row">
                
                    {data.map((pokemon, ndex) => {
                        return <div class="grid">
                            <a href='./users' onclick="handledetail()">
                                <table>
                                    <tr>
                                         <td> <h4>{pokemon.nom}</h4>
                                          <p>{pokemon.ndex}</p></td>
                                          <td><img alt ='' class='img' src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{ndex}.png'  ></img></td>
                                    </tr>
                                </table>
                            </a>
                            </div>
                        
                        }
                    )}
                </div>
            </div>
        )
    }
}




/*
export default class Pokemons extends React.Component {
    state = { pokemons : []};

    componentDidMount(){
        

    let pokemonAll = fs.readFileSync('./pokedex.json')
    
    JSON.parse(pokemonAll)
        
    }

    // componentWillMount(){
    //     clearInterval
    // }
    
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
        const {pokemons} = this.state

        return(
            <div>
                <h1>Pokemon lists :</h1>
                <ul>
                    {pokemons.map(pokemon => (
                        <p key={pokemon.ndex}>
                            {pokemons}
                        </p>
                    ))}
                </ul>
            </div>
        )
    }

}


*/