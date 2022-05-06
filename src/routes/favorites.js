import React from "react";
import App from "../App";
import CardGrid from "../components/CardGrid/CardGrid";

import { characters } from "../charactersData";
import Card from "../components/Card/Card";

const Favorites = () => {
  const favoriteCharacters = JSON.parse(
    localStorage.getItem("favoriteCharacters")
  );

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
