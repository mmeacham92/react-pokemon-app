const TypeButton = (props) => {
  const changePokemonList = (e) => {
    props.setSelectedType(props.name);
    props.setPokemonList(
      e.target.name === "All"
        ? props.allPokemon.map((p) => p)
        : props.allPokemon.filter((p) =>
            p.types.includes(e.target.name.toLowerCase())
          )
    );
  };

  return (
    <button
      className={`type__button ${props.name.toLowerCase()}__button`}
      onClick={changePokemonList}
      name={props.name}
    >
      {props.name}
    </button>
  );
};

export default TypeButton;
