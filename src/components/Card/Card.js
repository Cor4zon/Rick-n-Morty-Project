import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./Card.css";

import { decrement, increment } from "../../features/likeCounter/likeCounterSlice";
import { useDispatch } from "react-redux";

const ButtonAdd = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageCharacter = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Card = ({ character }) => {
  const [ isFavorite, setIsFavorite ] = useState(false);
  const dispatch = useDispatch();

  const getFavoriteCharacters = () => {
    return JSON.parse(localStorage.getItem('favoriteCharacters')) || [];
  }

  const setFavoriteCharacters = (favoriteCharacters) => {
    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
  }

  const dislikeCharacter = (favoriteCharacters, pickedCharacter) => {
    const pickedCharacterIndex = favoriteCharacters.indexOf(pickedCharacter);
    favoriteCharacters.splice(pickedCharacterIndex, 1);
    // удалить из localStorage
    setFavoriteCharacters(favoriteCharacters);
    setIsFavorite(false);
    dispatch(decrement());
  }

  const BtnClickHandler = (event) => {
    event.preventDefault();
    const pickedCharacter = character.id;
    const favoriteCharacters = getFavoriteCharacters();

    // Удаление персонажа из списка любимых
    if (favoriteCharacters.includes(pickedCharacter)) {
      dislikeCharacter(favoriteCharacters, pickedCharacter);
      return ;
    } 
    
    favoriteCharacters.push(pickedCharacter);
    setIsFavorite(true);
    dispatch(increment());
    setFavoriteCharacters(favoriteCharacters);
  };

  return (
    <div className="Card">
      <Link
        to={`/character/${character.id}`}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ImageCharacter
          src={character.image}
          alt={character.name}
        ></ImageCharacter>

        <div className="characher-description">
          <h4>{character.name}</h4>
          <p className="character-info">
            {character.species} -{character.status}
          </p>

          <ButtonAdd onClick={BtnClickHandler}>
            {isFavorite ? `Remove from Favorites` : `Add to Favorites`}
          </ButtonAdd>
        </div>
      </Link>
    </div>
  );
};

export default Card;
