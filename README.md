# Blagues Carambar : landing page & API

Ce projet propose une API de blagues Carambar (Node.js/Express/SQLite) et un front simple (HTML/JS/CSS) pour afficher des blagues aléatoires.

## Fonctionnalités

- API RESTful pour gérer les blagues (CRUD)
- Endpoint pour obtenir une blague aléatoire
- Frontend statique pour afficher une blague et en demander une nouvelle
- Documentation Swagger disponible

## Déploiement

- **Frontend** : déployé sur [GitHub Pages](https://anacslr.github.io/carambar_project_front/)
- **Backend** : déployé sur [Render.com](https://carambar-project-back.onrender.com)

### Frontend

- Rendez-vous sur la page GitHub Pages du projet
- Cliquez sur "Nouvelle blague" pour afficher une blague aléatoire

### Backend

- repo disponible [ici](https://github.com/anacslr/carambar_project_back)
- API disponible [ici](https://carambar-project-back.onrender.com/api/v1/blagues/)  
- Documentation Swagger [ici](https://carambar-project-back.onrender.com/api-docs)

#### Liste des endpoints

- `GET /api/v1/blagues` : toutes les blagues
- `GET /api/v1/blagues/random` : une blague aléatoire
- `GET /api/v1/blagues/:id` : une blague par ID
- `POST /api/v1/blagues` : ajouter une blague

## Installation locale

### Backend

```bash
cd api
npm install
npm run dev
```

### Frontend

Ouvrez `client/index.html` dans votre navigateur.

## Configuration CORS

Le backend autorise les requêtes du domaine GitHub Pages :
```js
app.use(cors({ origin: "https://anacslr.github.io" }));
```

## Auteur

Anaïs Cieslar

---

Projet réalisé dans le cadre d’un exercice pour la formation CDA.