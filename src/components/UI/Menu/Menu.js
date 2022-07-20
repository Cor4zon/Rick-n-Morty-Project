import React from 'react';

import {
    addSelectedCharacters,
    setNextPage,
    setPrevPage
} from "../../../features/selectedCharacters/selectedCharactersSlice";
import {useDispatch} from "react-redux";
import APIClient from "../../../services/APIClient";
import './Menu.css';

const Menu = () => {
    const dispatch = useDispatch();
    const client = new APIClient();

    const getCharactersType = (event) => {
        const characterType = event.target.className.split(" ")[1];

        client.fetchCharactersBySpecies(characterType).then((result) => {
            console.log(result.data);
            dispatch(addSelectedCharacters(result.data.results));
            dispatch(setNextPage(result.data.info.next))
            dispatch(setPrevPage(result.data.info.prev))
        });
    }

    return (
        <div className="menu">
            <ul className="characters__categories">
                <li className="character__type All" onClick={getCharactersType}>All</li>
                <li className="character__type Human" onClick={getCharactersType}>Human</li>
                <li className="character__type Animal" onClick={getCharactersType}>Animal</li>
                <li className="character__type Alien" onClick={getCharactersType}>Alien</li>
            </ul>

            <form action="" method="get" className="formSearchCharacter">
                <input type="text" name="name" id="name" required placeholder="Search by name..." />
                <button type="submit" className="searchBtn">Search</button>
            </form>
        </div>
    );
};

export default Menu;
