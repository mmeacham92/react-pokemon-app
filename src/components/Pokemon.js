const Pokemon = (props) => {
  return (
    <div className="pokemon" id={props.name}>
      <h2 className="pokemon__name">
        <span>#{props.pkdx_id}</span>. {props.name}
      </h2>
      <img className="pokemon__image" src={props.img_url} alt="" />
      <p className="pokemon__desc">{props.desc}</p>
    </div>
  );
};

export default Pokemon;
