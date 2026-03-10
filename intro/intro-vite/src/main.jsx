// import { StrictMode } from 'react'
// Strictmonde est un outil en phase de dev (npm run dev) pour analyser le code afin que le dev repecte les bonnes pratique et aussi à mieux detecter les erreurs
import { createRoot } from 'react-dom/client'
// createRoot : point d'entrée de l'application (React > v18)
// Avant v18 :
// ReactDOM.render(<Appl/>, document.getElementById('root'))
// > v18
// const root = createRoot(...)
// root.render(...)

// import './index.css'
// import App from './App.jsx'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

// render() : on déclenche l'affichage
createRoot(document.getElementById('root')).render(

   <h1 className='titre'>Bonjour à tous</h1>

)

// Vite / Webpack / Parcel / NextJs / Remix ...
/*
  Gérer les modules (import)
  compiler JSX
  lancer un serveur de dev
  optimiser le code pour la production
*/