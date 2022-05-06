import React from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

import "./CardGrid.css";

const CardGrid = ({ characters }) => {
  const cards = characters.map((character) => (
      <Card character={character} key={character.id}></Card>
  ));
  
  return <div className="CardGrid">{cards}</div>;
};

export default CardGrid;
