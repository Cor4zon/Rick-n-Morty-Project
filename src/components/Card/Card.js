import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./Card.css";

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

  const BtnClickHandler = (event) => {
    event.preventDefault();

    const pickedCharacter = character.id;
    let favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters')) || [];

    console.log(pickedCharacter);

    if (favoriteCharacters.includes(pickedCharacter)) {
      favoriteCharacters.splice(favoriteCharacters.indexOf(pickedCharacter), 1);
      localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
      setIsFavorite(false);
      return ;
    } 
    
    favoriteCharacters.push(pickedCharacter);
    setIsFavorite(true);

    console.log(isFavorite);
    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
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
