# Github-API

Github-API est une application web développée en **React** qui permet de rechercher des dépôts GitHub via l'API de recherche de GitHub. L'application récupère dynamiquement les résultats de l'API et les affiche à l'utilisateur dans une interface moderne et responsive.

## Fonctionnalités

- **Recherche Dynamique** : L'utilisateur peut saisir un terme de recherche pour obtenir les 30 premiers résultats de GitHub.
- **Gestion des Erreurs** : Une modale s'affiche si le champ de recherche est vide, invitant l'utilisateur à entrer un mot-clé.
- **Interface Moderne** : Utilisation de Semantic UI pour une apparence élégante et une expérience utilisateur fluide.
- **Transitions Douces** : Des effets de transition simples sont appliqués lors de l'affichage des modales.

## Technologies Utilisées

- **React** – Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **Webpack** – Bundler de modules pour compiler et empaqueter le projet.
- **Babel** – Transpileur pour convertir le code moderne (ES6+ et JSX) en JavaScript compatible.
- **SCSS** – Préprocesseur CSS pour écrire des styles modulaires et maintenables.
- **Semantic UI / Semantic UI React** – Framework CSS et composants React pour une interface utilisateur responsive.
- **Axios** – Client HTTP pour effectuer des requêtes vers l'API GitHub.
- **pnpm** – Gestionnaire de paquets rapide et efficace.
- **Vercel** – Plateforme de déploiement et d'hébergement utilisée pour mettre en production l'application.

## API

Le projet utilise l'[API GitHub de recherche de dépôts](https://docs.github.com/en/rest/reference/search#search-repositories) pour récupérer les informations des dépôts en fonction de la requête de l'utilisateur. Même si l'API renvoie seulement 30 résultats par requête, le nombre total de dépôts correspondants est affiché dans l'interface.

## Installation et Utilisation

### Prérequis

- Node.js (version 12 ou supérieure)
- pnpm (ou npm/yarn si vous préférez)

### Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/AlainBonneau/github-API.git
