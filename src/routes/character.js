import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import CardGrid from "../components/CardGrid/CardGrid";
import APIClient from "../services/APIClient";

import {addSelectedCharacters, setNextPage, setPrevPage} from "../features/selectedCharacters/selectedCharactersSlice";
import './character.css';

const Character = () => {
    const [ pageNumber, setPageNumber ] = useState(1);
    const client = new APIClient();

    const dispatch = useDispatch();
    const characters = useSelector(state => state.selectedCharacters.selectedCharacters);
    const nextPageLink = useSelector(state => state.selectedCharacters.nextPage);
    const prevPageLink = useSelector(state => state.selectedCharacters.prevPage);
    const characterType = useSelector(state => state.selectedCharacters.characterType);

    useEffect(() => {

        if (characterType) {
            client.fetchCharactersBySpecies(characterType).then((result) => {
                dispatch(addSelectedCharacters(result.data.results));
                dispatch(setNextPage(result.data.info.next))
                dispatch(setPrevPage(result.data.info.prev))
            });
        } else {
            client.fetchCharacters().then((result) => {
                dispatch(addSelectedCharacters(result.data.results));
                dispatch(setNextPage(result.data.info.next))
                dispatch(setPrevPage(result.data.info.prev))
            });
        }

    }, [])

    const loadNextPage = () => {
        console.log(nextPageLink);
        client.fetchCharacters(nextPageLink).then((result) => {
            dispatch(addSelectedCharacters(result.data.results));
            dispatch(setNextPage(result.data.info.next))
            dispatch(setPrevPage(result.data.info.prev))
            setPageNumber(pageNumber + 1);
        })
    }

    const loadPrevPage = () => {
        client.fetchCharacters(prevPageLink).then((result) => {
            dispatch(addSelectedCharacters(result.data.results));
            dispatch(setNextPage(result.data.info.next))
            dispatch(setPrevPage(result.data.info.prev))
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
