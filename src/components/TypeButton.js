const TypeButton = (props) => {
  return (
    <button
      className="types__button"
      onClick={() => {
        props.setSelectedType(props.name);
        props.setPokemonList(
          props.selectedType === "All"
            ? props.allPokemon.map((p) => p)
            : props.allPokemon.filter((p) =>
                p.types.includes(props.selectedType.toLowerCase())
              )
        );
        console.log(props.selectedType);
        console.log(props.pokemonList);
      }}
    >
      {props.name}
    </button>
  );
};

export default TypeButton;
