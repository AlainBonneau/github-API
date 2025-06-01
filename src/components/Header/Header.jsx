import React from "react";
import githubLogo from "../../img/githublogo.png";
import Pagination from "../Pagination/Pagination";
import "./Header.scss";

function Header() {
  return (
    <header className="github-logo-container">
      <img
        className="github-logo"
        src={githubLogo}
        alt="Logo de notre API Github"
      />
      <Pagination />
    </header>
  );
}

export default Header;
