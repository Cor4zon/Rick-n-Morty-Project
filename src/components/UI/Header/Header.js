import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  padding: 2rem;
  background: #202428;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Link to="/characters">Character</Link>
        <Link to="/favorites">Favorites</Link>
        {/* <LikeCounter /> */}
      </Wrapper>
    </>
  );
};

export default Header;
