import React from "react";
import { useSelector } from "react-redux";

import App from "../App";
import CardGrid from "../components/CardGrid/CardGrid";
import Card from "../components/Card/Card";
import { characters } from "../charactersData";

const Favorites = () => {
  // массив индексов любимых персонажей
  const favoriteCharacters = useSelector(state => state.favoriteCharacters.characters);

  // массив объеков любимых персонажей
  const cards = characters.filter((character, id) =>
    favoriteCharacters.includes(id+1)
  );

  return (
    <div>
      <CardGrid characters={ cards }/>
    </div>
  );
};

export default Favorites;
