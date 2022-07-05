// External imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Local imports
import App from "./App";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound";
import Character from "./routes/character";
import Favorites from "./routes/favorites";
import CharacterInfo from "./components/CharacterInfo";

// for Redux
import store from './store';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/*<Route index path="/" element={<Character />} />*/}
            <Route path="characters" element={<Outlet />} >
              <Route index path="" element={<Character />} />
              <Route path=":id" element={<CharacterInfo />} />
            </Route>

            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
