import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LikeCounter from "../../LikeCounter/LikeCounter";

const Wrapper = styled.section`
  background: #202428;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    padding: 0 48px;
  }

  nav a {
    color: white;
    font-weight: 700;
    margin-left: 8px;
  }


`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <Link to="/characters">Character</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <LikeCounter counter={0}/>
        
      </Wrapper>
    </>
  );
};

export default Header;
