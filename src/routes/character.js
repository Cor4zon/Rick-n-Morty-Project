import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import APIClient from "../services/APIClient";
import { characters } from "../charactersData";

const Character = () => {
    const [characters, setCharacters ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchCharacters().then((result) => {
            setCharacters(result.data.results);
        });
    }, [])
  return (
    <>
      <CardGrid characters={ characters }/>
    </>
  );
};

export default Character;
