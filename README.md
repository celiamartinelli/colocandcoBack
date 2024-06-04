# Coloc&Co Backend

## Description

Coloc&Co est une application web dédiée à la gestion de colocation. Ce dépôt contient la partie backend de l'application, développée avec Node.js et Express. Le backend gère l'API RESTful pour les fonctionnalités de gestion des tâches, des profils utilisateurs et liste de courses commune.

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.21.37.png "Titre optionnel")

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.22.01.png "Titre optionnel")

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)

## Fonctionnalités

- **API RESTful** : Fournit des endpoints pour la gestion des utilisateurs, des tâches et des dépenses.
- **Authentification JWT** : Sécurise les endpoints avec JSON Web Tokens.
- **Gestion des utilisateurs** : Inscription, connexion et gestion des profils utilisateurs.
- **Gestion des tâches** : Création, mise à jour et suppression des tâches.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **JSON Web Token (JWT)** : Standard pour sécuriser les échanges entre deux parties.

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.21.20.png "Titre optionnel")

## Installation

Pour installer et exécuter le backend localement :

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/celiamartinelli/colocandcoBack.git
   ```

2. Accédez au dossier du projet :

   ```bash
   cd colocandcoBack
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet et en ajoutant les informations suivantes :

   ```plaintext
    PORT= 3000
    PG_URL= postgresql://admin:bdd_password@localhost:5432/bdd_name
    JWT_SECRET= unsecretbiengarder
    SALT_ROUNDS= nbre de tour

   ```

5. Démarrez l'application :
   ```bash
   npm run dev
   ```

## Utilisation

L'API fournit plusieurs endpoints pour gérer les utilisateurs, les tâches et les dépenses. Utilisez des outils comme Postman pour interagir avec les endpoints.

### Exemples de requêtes :

- **Inscription** : `POST /api/users/register`
- **Connexion** : `POST /api/users/login`
- **Créer une tâche** : `POST /api/tasks`
- **Liste des dépenses** : `GET /api/expenses`

## Profil d'un colocataire

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.22.43.png "Titre optionnel")

## EditMode de son Profil

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.24.36.png "Titre optionnel")

![Texte alternatif](./public/capture/Capture%20d’écran%202024-06-04%20à%2008.24.18.png "Titre optionnel")
