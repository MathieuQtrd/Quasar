import { configureStore} from '@reduxjs/toolkit'
// configureStore :
// Permet de créer le store redux
// Le store est l'endroit central où seront stockées les données globales de l'application
// Le state est centralisé dans le store

import shoppingReducer from '../features/shoppingSlice'
// On importe le reducer du slice 

//  on crée le store
export const store = configureStore({
    reducer: {
        // on appelle ici nos slice
        shopping: shoppingReducer,

        // Un seul store pour autant de slice que nécessaire.
    },
})


// Redux Toolkit crée un store 
// store = {
//     dispatch: function,
//     getState: function,
//     subscribe: function

// }

// On rends le store disponible en englobant notre application depuis main.jsx <Provider store={store}>

// import { useDisptach } from 'react-redux'
// const dispatch = useDisptach()
// Permettra d'appliquer nos actions exemple :
    // dispatch(addItem(data))

// getState : pour récupérer le state actuel
// subscribe : les modification du state

// On utilise useSelector() qui passe par getState et subscribe
// import { useSelector } from 'react-redux'
    // const shopping = useSelector((state) => state.shopping.items)