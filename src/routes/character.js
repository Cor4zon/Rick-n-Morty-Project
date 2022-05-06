import React from "react";
import CardGrid from "../components/CardGrid/CardGrid";

import { characters } from "../charactersData";

const Character = () => {

  return (
    <>
      <CardGrid characters={ characters }/>
    </>
  );
};

export default Character;
