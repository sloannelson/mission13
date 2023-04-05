import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/podcast">podcast</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
