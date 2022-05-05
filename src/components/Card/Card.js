import React from "react";
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
            {character.species} - 
            {character.status}
          </p>

          <ButtonAdd>Add to Favorites</ButtonAdd>
        </div>
      </Link>
    </div>
  );
};

export default Card;
