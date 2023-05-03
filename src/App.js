import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [pokemon, setPokemon] = useState([])
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=800").then(res => res.json()).then(data => setPokemon(data.results))
    }
  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <ul>
        {pokemon.map(p => (<li>{p.name}</li>))}
        </ul>
    </div>
  );
}

export default App;
