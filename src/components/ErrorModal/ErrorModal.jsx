import React from "react";
import "./ErrorModal.scss";

const ErrorModal = ({ closeModal }) => {
  return (
    <div className="ErrorModal">
      <div className="ui modal active">
        <div className="header">Erreur</div>
        <div className="content">
          <p>
            Le champ de recherche est vide. Veuillez entrer un mot-clé pour
            lancer une recherche.
          </p>
        </div>
        <div className="actions">
          <div className="ui approve button" onClick={closeModal}>
            Fermer
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
