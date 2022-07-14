import {useEffect, useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Menu from "./components/UI/Menu/Menu";
import styled from "styled-components";

const ContentContainer = styled.div`
  margin: 2rem 4rem;
`;

function App() {
    let location = useLocation();
    const [ showMenu, setShowMenu ] = useState(true);

    useEffect(() => {
        if (location.pathname !== "/characters") {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }, [location]);

    return (
    <div className="App">
      <Header />
        { showMenu ? <Menu /> : null}

      <ContentContainer>
        <Outlet />
      </ContentContainer>

    </div>
    );
}

export default App;
