import React from "react";

import Pokemon from "./components/Pokemon";
import { data } from "./data.js";
import './styles/App.css';


const App = function () {
  const pokemonArray = data.map(pokemon => {
    return <Pokemon
        name={pokemon.name}
        img_url={pokemon.art_url}
        pkdx_id={pokemon.pkdx_id}
        desc={pokemon.description}
        evolves_to={pokemon.evolutions.to}
        key={pokemon.pkdx_id}
      />
  });

  return (
    <div className="pokemon__container">
      {pokemonArray}
    </div>
  );
};

export default App;
