import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

function header() {
  return (
    <header>
      <h2 id="logo">
        <Link to="/">Bingo</Link>
      </h2>
      <ul className="menu">
        <li>
          <Link to="/rule">빙고 규칙</Link>
        </li>
        <li>
          <Link to="/history">빙고 역사</Link>
        </li>
        <li>
        <Link to="/gallery">빙고 갤러리</Link>
        </li>
      </ul>
    </header>
  );
}

export default header;
