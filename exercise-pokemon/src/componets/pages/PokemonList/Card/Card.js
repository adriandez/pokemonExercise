import "./Card.scss";

const Card = ({poke}) => {
  return (
    <article className="Card">
      <h3>{poke? poke.species.name :""}</h3>
      {poke ? (<img src={poke.sprites.front_default} alt="pokemon" />) : ("")}
    </article>
  );
}

export default Card;
