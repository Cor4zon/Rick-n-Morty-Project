import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import App from "./App";
import PageNotFound from "./components/UI/PageNotFound/PageNotFound";
import Character from "./routes/character";
import Favorites from "./routes/favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Character />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="*"
            element={
              <PageNotFound />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
