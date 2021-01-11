import Pokemon from "./Pokemon";

const PokemonContainer = (props) => {
  // need to render all pokemon onto the page initially
  // create Pokemon elements for every object

  const showThese = props.pokemonList.map((pokemon) => {
    return (
      <Pokemon
        name={pokemon.name}
        img_url={pokemon.art_url}
        pkdx_id={pokemon.pkdx_id}
        desc={pokemon.description}
        evolves_to={pokemon.evolutions.to}
        key={pokemon.pkdx_id}
      />
    );
  });

  console.log(props.pokemonList);
  return <div className="pokemon__container">{showThese}</div>;
};

export default PokemonContainer;
