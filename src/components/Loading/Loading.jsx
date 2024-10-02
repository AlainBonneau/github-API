import React from "react";
import "./Loading.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="ui active centered inline loader"></div>
      <p>Recherche en cours...</p>
    </div>
  );
};

export default Loader;
