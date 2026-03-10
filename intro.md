# Roles des langages
    FRONT
        - HTML : permet de structurer une page web (régions, médias, liens, ...)
        - CSS  : la mise en forme (couleurs, tailles, bordures, positionnement ...)
        - JS   : Intéractivité, animations (jeux, sliders, évènements ...)
    BACK
        - PHP  : Fonctionnalités (Formulaires (BDD), sécurité, template de page ...) - Python .NET Java ...
        - SQL  : Communication avec les Bases de données (BDD) - Récupération, création, modification et suppression. - MySQL, PostgresSQL, NoSQL ...

# 3 Manières pour mettre en place un site web 
    - From scratch : le développeur fait tout en partant de zéro : temps de dev très long en revanche liberté totale.
    - Framework : React Vuejs Angular (front) ... Laravel Symfony CakePHP (back) ... : temps de dev raccourci, liberté importante.
    - CMS : Content Managing System : Wordpress, Drupal, Prestashop, Magento ... : temps de dev très court, liberté dépend de l'outil. 

# React 
    React est une bibliothèque Javascript pour construite des interfaces web

# Une application React est composée de composants
    Chaque composant représnete une partie de l'interface

# Un composant est une fonction
    Aujourd'hui un composant est une fonction qui retourne du JSX

# L'interface dépend de l'état
    React : l'interface est une fonction de l'état
    Si l'état change, l'interface se met à jour

# React ne tourne pas seul 
    Pour travailler avec React, on utilise :
    Node.js     => pour exécuter les outils
    npm         => pour installer les dépendances
    Vite        => Pour lancer le server et compiler le code

# Le cycle du app React
    - Le dev écrit des composants JSX
    - Vite compile le code
    - React construit l'interface
    - L'utilisateur intéragit
    - L'état change
    - React met à jour la vue automatiquement


# Installation de Node.js 
    https://nodejs.org/fr/download

## Nodejs
    Est un outil qui permet d'exécuter du js hors d'un navigateur
    Avec Nodejs on peut utiliser js pour faire tourner un serveur, des scripts et des outils de developpement
        Pour mettre à jour la version de Node si installé préalablement avec l'executable, télécharger la dernière version et relance rl'exécutable.

## npm
    Est un gestionnaire de dépendance de paquet fourni avec Node.js
    Permet de télécharger et d'installer facilement des bibliothèque Javascript comme React, Bootstrap
    Permet de mettre à jour nos dépendances et ...
        Pour mettre à jour la version de npm : 
            npm install -g npm

## Vite
    Vite est un outil qui sert à créer un ebvironnement de dev pour faire tourner une application web moderne
    Permet de lancer un projet React rapidement, contient un systeme de compilation automatique
    Quand on modifie le code, la pâge se met à jour automatiquement
    Permet dans un projet React optimiser les perfomances et remplace des outils plus anciens et plus lourds
        Pour mettre à jour Vite
            npm update -g vite
            ou
            npm install -g vite@latest

# Pour lancer un projet React avec Vite
    npm create vite@latest nom-du-projet
    npm create vite@latest nom-du-projet -- --template react