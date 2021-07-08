import React, { useState, createContext } from "react";

export const PokeContext = createContext();

export const PokeProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  return (
    <PokeContext.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </PokeContext.Provider>
  );
};
