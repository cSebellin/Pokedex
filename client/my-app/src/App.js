
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PokemonList from './Pokemons';
import Description from './description';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
              <div id='test'></div>
            </li>
            <li>
              <Link to="/about">Pokedex</Link>
            </li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/about">
            
            <PokemonList />
          </Route>
          <Route path="/users">
            <Description />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        </header>
    </div>
    </Router>
  );
}

