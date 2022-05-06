import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./Card.css";

import { decrement, increment } from "../../features/likeCounter/likeCounterSlice";
import { addFavoriteCharacter,  removeFavoriteCharacter} from "../../features/favoriteCharacters/favoriteCharactersSlice";
import { useDispatch, useSelector } from "react-redux";

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
  // TODO: скорее всего текст на кнопке можно менять способом попроще
  const favoriteCharacters = useSelector(state => state.favoriteCharacters.characters);
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
    dispatch(removeFavoriteCharacter(pickedCharacterIndex));
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
    dispatch(increment());
    dispatch(addFavoriteCharacter(pickedCharacter));
    setFavoriteCharacters(favoriteCharacters);
  };

  const getButtonText = () => {
    return favoriteCharacters.includes(character.id) ? `Remove from Favorites` : `Add to Favorites`
  }

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
            { getButtonText() }
          </ButtonAdd>
        </div>
      </Link>
    </div>
  );
};

export default Card;
