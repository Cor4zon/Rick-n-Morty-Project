import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LikeCounter from "../../LikeCounter/LikeCounter";
import { useSelector } from "react-redux";

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
  const likes = useSelector(state => state.likeCounter.likes);

  return (
    <>
      <Wrapper>
        <nav>
          <Link to="/characters">Character</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <LikeCounter counter={ likes }/>
        
      </Wrapper>
    </>
  );
};

export default Header;
