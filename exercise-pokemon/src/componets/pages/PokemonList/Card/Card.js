import "./Card.scss";

const Card = ({poke}) => {
  return (
    <div className="Card">
      <h3>{poke? poke.species.name :""}</h3>
      {poke ? (<img src={poke.sprites.front_default} alt="pokemon" />) : ("")}
    </div>
  );
}

export default Card;
