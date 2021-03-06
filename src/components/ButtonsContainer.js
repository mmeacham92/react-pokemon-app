import TypeButton from "./TypeButton";

const ButtonsContainer = (props) => {
  const types = ["All", ...props.types.map((el) => el.name)];

  const buttons = types.sort().map((type) => {
    return (
      <TypeButton
        name={type}
        selectedType={props.selectedType}
        setSelectedType={props.setSelectedType}
        pokemonList={props.pokemonList}
        setPokemonList={props.setPokemonList}
        allPokemon={props.allPokemon}
        key={type}
      />
    );
  });

  return <div className="buttons__container">{buttons}</div>;
};

export default ButtonsContainer;
