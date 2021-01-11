import React, { useState } from "react";

import PokemonContainer from "./components/PokemonContainer";
import ButtonsContainer from "./components/ButtonsContainer";

import { pokemonData } from "./data/pokemonData.js";
import { types } from "./data/types.js";
import "./styles/App.css";

const App = function () {
  const allPokemon = pokemonData.map((p) => p);
  let [pokemonList, setPokemonList] = useState(allPokemon);
  let [selectedType, setSelectedType] = useState("All");

  return (
    <div className="container">
      {/* <img src='./pokemonLogo.png' alt='' /> */}
      <ButtonsContainer
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        allPokemon={allPokemon}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
      <PokemonContainer
        allPokemon={allPokemon}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </div>
  );
};

export default App;
