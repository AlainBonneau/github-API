import React from "react";
import "./ReposResults.scss";

const ReposResults = ({ searchQuery, repositories, count }) => {
  return (
    <div className="ReposResults">
      <div className="ui segments">
        <div className="ui segment">
          {repositories.length ? (
            <p>Voici les résultat pour votre recherche sur : {searchQuery}</p>
          ) : (
            <p>Merci de saisir une recherche</p>
          )}
        </div>
        <div className="ui secondary segment">
          {repositories.length ? (
            <p>
              Votre recherche à donnée : {count} résultats
            </p>
          ) : (
            <p>Votre recherche à donnée : 0 résultat</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReposResults;
