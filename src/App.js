import { Routes, Route, Link, Outlet } from "react-router-dom";
import Character from "./routes/character";
import Favorites from "./routes/favorites";
import Header from "./components/UI/Header/Header";

import styled from "styled-components";

const ContentContainer = styled.div`
  margin: 2rem 4rem;
`;

function App() {
  return (
    <div className="App">
      <Header />

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    
    </div>
  );
}

export default App;
