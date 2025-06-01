import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <h1>À propos</h1>
      <p>
        Ce site web est le tout premier projet que j'ai réalisé avec{" "}
        <strong>React</strong>, il y a maintenant deux ans. C’était pour moi une
        façon de découvrir et d’apprendre à utiliser ce framework JavaScript
        moderne, tout en créant une application concrète autour d'une API
        publique.
      </p>
      <p>
        J’ai choisi d’utiliser l’API de GitHub parce qu’elle est riche, bien
        documentée, et qu’elle me permettait de m’entraîner à manipuler des
        données en temps réel, à travailler avec des appels réseau via{" "}
        <strong>Axios</strong>, et à construire une interface utilisateur simple
        mais fonctionnelle.
      </p>
      <p>
        À travers ce projet, j’ai appris les bases des composants React, du
        routage avec <strong>React Router</strong>, et même un peu de design
        avec <strong>Semantic UI</strong>. Il représente pour moi un jalon
        important dans mon apprentissage du développement web.
      </p>
      <p>
        Aujourd’hui, je continue de progresser en travaillant sur des projets
        plus ambitieux, mais ce site reste une sorte de "souvenir" technique de
        mes débuts. Merci de votre visite !
      </p>
      <p>
        Vous pouvez retrouvé mon portfolio en cliquant{" "}
        <a href="https://www.alain-web.fr/" target="_blank">
          ici
        </a>
      </p>
    </div>
  );
}

export default About;
