import React from "react";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <a className="back-home" href="/">Retour à l'accueil</a>
    </div>
  );
}

export default NotFound;
