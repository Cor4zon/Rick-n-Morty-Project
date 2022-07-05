import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CardGrid from "../components/CardGrid/CardGrid";
import APIClient from "../services/APIClient";

const Favorites = () => {
  const [ characters, setCharacters ] = useState([]);
  const client = new APIClient();

  // массив индексов любимых персонажей
  const favoriteCharacters = useSelector(state => state.favoriteCharacters.characters);


  useEffect(() => {
    const charactersArray = [];
    for (let i = 0; i < favoriteCharacters.length; i++ ) {
      client.fetchOneCharacter(favoriteCharacters[i]).then((result) => {
        charactersArray.push(result.data);
        setCharacters([...charactersArray]);
      })
    }
  }, [favoriteCharacters])

  return (
    <div>
      <CardGrid characters={ characters }/>
    </div>
  );
};

export default Favorites;
