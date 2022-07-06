import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import APIClient from "../services/APIClient";

import './character.css';

const Character = () => {
    const [characters, setCharacters ] = useState([]);
    const [ nextPageLink, setNextPageLink ] = useState(null);
    const [ prevPageLink, setPrevPageLink ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);
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
            setPageNumber(pageNumber + 1);
        })
    }

    const loadPrevPage = () => {
        client.fetchCharacters(prevPageLink).then((result) => {
            setCharacters(result.data.results);
            setNextPageLink(result.data.info.next);
            setPrevPageLink(result.data.info.prev);
            setPageNumber(pageNumber - 1);
        })
    }

  return (
    <>
      <CardGrid characters={ characters }/>
        <div className="pageInfo">
            <p>Page { pageNumber } of 42</p>
            <p className="changePageBtn" onClick={loadPrevPage}>{"<< Prev"}</p>
            <p className="changePageBtn" onClick={loadNextPage}>{"Next >>"}</p>
        </div>
    </>
  );
};

export default Character;
