import React from "react";
import githubLogo from "../../img/githublogo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="github-logo-container">
      <img
        className="github-logo"
        src={githubLogo}
        alt="Logo de notre API Github"
      />
    </header>
  );
}

export default Header;
