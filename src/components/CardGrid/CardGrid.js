import React from "react";
import { Link } from "react-router-dom";

import { characters } from "../../charactersData";
import Card from "../Card/Card";

import "./CardGrid.css";

const CardGrid = () => {
  const cards = characters.map((character) => (
    // <Link to={`/character/${character.id}`}>
      <Card character={character} key={character.id}></Card>
    // </Link>
  ));
  return <div className="CardGrid">{cards}</div>;
};

export default CardGrid;
