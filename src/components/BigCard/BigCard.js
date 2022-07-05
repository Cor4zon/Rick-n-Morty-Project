import React from 'react';
import styled from "styled-components";

const ImageCharacter = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const BigCard = ({ character }) => {
    return (
        <div>
            <ImageCharacter
                src={character.image}
                alt={character.name}
            />
            <p> { character.name }</p>
            <p> { character.species}</p>
            <p> { character.status}</p>
        </div>
    );
};

export default BigCard;
