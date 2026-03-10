# JSX

## https://react.dev/learn/writing-markup-with-jsx 


# Un seul élément parent
    NOK
    .render(
        <h1 className="titre">Bonjour à tous</h1>
        <p>Lorem ipsum</p>

    )

    OK
    .render(
        <div>
            <h1 className="titre">Bonjour à tous</h1>
            <p>Lorem ipsum</p>
        </div>
    )


# Les balises doivent être fermées
        <img > : <img />
        <br > : <br />
        <hr > : <hr />
        voir balises auto fermantes
        https://developer.mozilla.org/fr/docs/Glossary/Void_element


# Les composants
    Un composant est une fonction qui retourne du JSX.
    Convention : un composant commence par une majuscule et utlise le PascalCase, l'html doit être en minuscule

    exemple
    .render(
        <App />

    )


# On affiche les variables / calcul / fonctions / conditions / commentaires (en gros le code JS) avec {}
    const nom = "Mathieu"
    const age = 45
    <h1>Bonjour {nom} {age >= 18 ? "Adulte" : "Mineur"}</h1>


# {/* commentaire JSX */}


# ATTRIBUTS 

## class : className
    <h1 class="titre">Bonjour à tous</h1> : <h1 className="titre">Bonjour à tous</h1>


## for : htmlFor
    <label for="nom">Nom</label> : <label htmlFor="nom">Nom</label>


## Les attributs doivent être en camelCase
    <td colspan="2"></td> : <td colSpan="2"></td>
    <button onclick="alert('bonjour')"> : <button onClick={() => alert("bonjour")}> (avec jsx on passe une fonction )

    il est possible de mettre plusieurs events
    <button onClick={() => {
        alert("bonjour")
        alert("hello")
    }}>
    Clique
    </button>


## Les attributs booléens
    <input disabled> : <input disabled={true} /> ou <input disabled />


## L'attribut style="" utilise un objet js
    <h1 style="color:red; font-size:20px"> : <h1 style={{ color: "red", fontSize: "20px" }}>


