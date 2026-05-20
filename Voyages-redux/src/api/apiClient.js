// URL de base de l'api
const API_URL = "https://qyklv804.webmo.me/api"

/*
admin - Admin@123
ENDPOINT de l'api :
-------------------
    POST    /auth/register.php
    POST    /auth/login.php
    GET     /auth/me.php
    POST    /contact/store.php
    GET     /contact/index.php
    GET     /users/index.php
    GET     /favorites/index.php
    POST    /favorites/store.php
    POST    /favorites/delete.php

    GET 	/regions/index.php
    GET 	/destinations/index.php
    GET 	/destinations/show.php?slug=france
    GET 	/destinations/by-region.php?region=asie
	POST    /destinations/store.php - role admin (la région fournie doit être l'id correspondant, slug doit être unique)
*/

// Fonction réutilisable pour effectuer des requete http (fetch) vers l'api
export async function apiRequest(endpoint, options = {}) {

    // Récupération du token JWT depuis le local storage
    const token = localStorage.getItem('token')

    // Création des headers HTTP
    const headers = {
        "Content-Type": "application/json",

        ...options.headers,
    }

    if(token) {
        // Certains hébergement web bloquent le header Authorization
        // headers.Authorization = `Bearer ${token}`
        
        // mon serveur mutualisé le bloque
        // Solution alternative : header personnalisé
        headers['X-Auth-Token'] = token;
        // le JWT ne change pas
        // Uniquement la façon de l'envoyer à l'API

        // Authorization    header HTTP standard
        // X-Auth-Token     header HTTP personnalisé
    }


    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    })

    const data = await response.json().catch(() => null)
    // si la réponse est vide ou invalide, on retourne null 

    if(!response.ok) {
        throw new Error(data?.message || 'Une erreur est survenue')
    }

    return data;

}