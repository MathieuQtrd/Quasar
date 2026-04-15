import { createSlice } from '@reduxjs/toolkit'
// Ce fichier va nous permettre de faire 3 choses :
    // On définit le state initial
    // On définit les outils pour modifier ce state
    // On prépare les actions Redux

// Exemple de slice :
    // userSlice
    // uiSlice
    // tasksSlice
    // commentsSlice
    // ...

// createSlice permet de créer un slice (state + reducers + actions)

// On définit le state initial
const initialState = {
    items: [],
    // un tableau array pour contenir les produit à acheter

    // Par exemple pour gérer des filtres
    filter: "all"
    
    // ...
}


//  On crée le slice 
const shoppingSlice = createSlice({
    // Son nom
    name: 'shopping',

    // on importe le state initial défini plus haut
    initialState,

    reducers: {
        // ajouter un produit
        addItem: (state, action) => {
            // state : le state actuel (initialState puis selon l'évolution)
            // action.payload : les données reçue lors de l'appel (addItem(data))

            state.items.unshift(action.payload);
            // Immer est un bibliotheque qui permet de modifier des objets
            // Logiquement, on ne peut pas affecter directement, il faut passer par les outils qui modifient le state
            // Avec Immer : on facilite l'écriture
            // Mais en réalité voici ce qu'il se passe
            /*
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            */

            /*
                action :
                {
                    type: 'shopping/addItem' // l'action
                    payload: {} : les données fournies en argument
                    meta: {} : infos complémentaires (timestamp, ...)
                    error: false : si une erreur s'est produite 
                }
            */
        },

        // Supprimer un produit
        deleteItem: (state, action) => {
            // action.payload : l'id du produit
            state.items = state.items.filter(
                (item) => item.id !== action.payload
                // on garde tous les produit sauf celui correspondant à l'id de l'item à supprimer
            )
        },

        // Changer le statut acheté / non acheté
        toggleItemStatus: (state, action) => {
            // action.payload : l'id du produit
            const item = state.items.find(
                (item) => item.id === action.payload
            )

            // on vérifie
            if(item) {
                // on inverse
                item.bought = !item.bought 
            }

        },

        // Filtre pour afficher les produit de la liste 
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }

})

// Redux toolkit crée automatiquement 3 choses :
    // Le reducer global : shoppingSlice.reducer
    // Les actions : shoppingSlice.actions
    // shoppingSLice.actions = {
    //     addItem: function,
    //     deleteItem: function,
    //     toggleItemStatus: function, 
    //     // ...
    // }

// Pour appeler dans nos components une action : dispatch(addItem(data))
// En interne : shopping/addItem

// Les actions nous permettent de faire une demande de changement
// le reducer ensuite nous permet d'appliquer le changement

// On exporte les actions pour nos components
export const { addItem, deleteItem, toggleItemStatus, setFilter } = shoppingSlice.actions // le terme .actions est obligatoire

// On exporte le reducer pour le store
export default shoppingSlice.reducer // le terme .reducer est obligatoire