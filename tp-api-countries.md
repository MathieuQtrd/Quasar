# COUNTRIES 
-----------
# https://restcountries.com/

- Créer une application permettant d’explorer les pays du monde.

# Fonctionnalités
- liste des pays
- recherche
- filtre région
- page détail

# Endpoints utiles
- /v3.1/all?fields=...
- /v3.1/name/{name}
- /v3.1/region/{region}
- /v3.1/alpha/{code}

# Données utiles d’un pays
- name.common
- flags.svg
- capital
- region

# Architecture conseillée
- pages
- components
- services
- routing

# Bonus
- tri alphabétique
- tri par population
- favoris avec localStorage
- pagination front
- affichage des pays frontaliers
