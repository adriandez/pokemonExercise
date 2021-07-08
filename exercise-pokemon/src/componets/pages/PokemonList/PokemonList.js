import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../context/PokeContext";
import useAxios from "../../../hooks/useAxios";
import useDebounce, {debounce} from "../../../hooks/useDebounce";

import Card from "./Card";

import "./PokemonList.scss";

const PokemonList = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useContext(PokeContext);
  const [url, setUrl] = useState("");
  const { loading, result } = useAxios(url);

  const debouncedSave = useDebounce(
    debounce((nextValue) => setInput(nextValue), 1000)
  );

  const handleChange = (event) => {
    const nextValue = event.target.value
    debouncedSave(nextValue);
  };

  const paintCards = () =>
    pokemon.map((poke, index) => <Card poke={poke} key={index} />);

  useEffect(() => {
    if (input) setUrl(`https://pokeapi.co/api/v2/pokemon/${input}`);
  }, [input]);

  useEffect(() => {
    if (result) {
        setPokemon([...pokemon, result]);
      }
      // eslint-disable-next-line
  }, [result]);

  return (
    <section className="PokemonList">
        <input
          type="text"
          name="input"
          placeholder="Search for a Pokemon"
          onChange={handleChange}
        />
        {loading ? <p>Loading...</p> : paintCards()}
    </section>
  );
};

export default PokemonList;
