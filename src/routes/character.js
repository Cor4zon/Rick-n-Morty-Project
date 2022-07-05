import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import APIClient from "../services/APIClient";
import { characters } from "../charactersData";

const Character = () => {
    const [characters, setCharacters ] = useState([]);
    const [ nextPageLink, setNextPageLink ] = useState(null);
    const [ prevPageLink, setPrevPageLink ] = useState(null);

    const client = new APIClient();

    useEffect(() => {
        client.fetchCharacters().then((result) => {
            console.log(result.data);
            setCharacters(result.data.results);
            setNextPageLink(result.data.info.next);
        });
    }, [])

    const loadNextPage = () => {
        client.fetchCharacters(nextPageLink).then((result) => {
            setCharacters(result.data.results);
            setNextPageLink(result.data.info.next);
            setPrevPageLink(result.data.info.prev);
        })
    }

    const loadPrevPage = () => {
        client.fetchCharacters(prevPageLink).then((result) => {
            setCharacters(result.data.results);
            setNextPageLink(result.data.info.next);
            setPrevPageLink(result.data.info.prev);
        })
    }

  return (
    <>
      <CardGrid characters={ characters }/>
        <button onClick={loadPrevPage}>prev</button>
        <button onClick={loadNextPage}>next</button>
    </>
  );
};

export default Character;
