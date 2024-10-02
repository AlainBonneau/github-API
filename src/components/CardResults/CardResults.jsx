import React from "react";
import "./CardResults.scss";

const CardResults = ({ repo }) => {
  return (
    <div className="CardResults">
      <div className="ui card">
        <div className="image">
          <img src={`${repo.owner.avatar_url}`} alt="Avatar de l'utilisateur" />
        </div>
        <div className="content">
          <a
            href={`https://github.com/${repo.owner.login}`}
            target="_blank"
            className="header"
          >
            {repo.owner.login}
          </a>
          <div className="meta">
            <span className="date"></span>
          </div>
          <div className="description">{repo.description}</div>
        </div>
        <div className="extra content">
          <p>
            <i className="user icon"></i>
            {repo.owner.type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardResults;
