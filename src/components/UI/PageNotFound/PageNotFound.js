import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>The page you're looking for is not found</h1>
      <Link
        to="/characters"
        className="back-link"
      >
        Back to Characters
      </Link>
    </main>
  );
};

export default PageNotFound;
