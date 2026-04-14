import { useState, useEffect } from 'react'
import './App.css'

// Une API permet d'échnager des données entre une application front et un serveur (back)
// https://jsonplaceholder.typicode.com/

// useEffect permet d'exécuter du code après le rendu du component
// https://fr.react.dev/reference/react/useEffect

// fetch() permet d'envoyer une requete HTTP
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

export default function App() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   console.log("Chargement du composant")
  //   // le console.log() s'affiche deux fois :
  //     // React test une première fois pour detecter d'éventuelles erreur puis relance une deuxième fois
  //     // Lié au mode Dev
  //     // Ne se produit pas en Prod !
  // }, [])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //   .then((response) => {
      
  //     // fetch ne déclenchera pas d'erreur pour passer dans le catch en cas de 404 ou 500 (erreur serveur)
  //     if(!response.ok) {
  //       throw new Error("ERREUR HTTP")
  //     }
  //     return response.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     setTasks(data)
  //   })
  //   .catch(() => setError("Erreur lors du chargement"))
  //   .finally(() => setLoading(false))
  // }, [])

  useEffect(() => {
    const fetchTasks = async () => {
      // async pour préciser que la fonction est asynchrone
      // synchrone : le code s'exécute ligne par ligne, on attend chaque instruction avant de passer à la suivante
      // asynchrone : le code continu et n'attends pas les instruction précédente (par exemple un traitement ajax (fetch))

      // await ne fonctionne que dans une fonction async
      // await = .then()
      // .then() = lorsque c'est prêt
      // await = tu attends

      try {
        // const response = await fetch("https://gpojpzjgpjz0") // erreur sur le nom de domaine
        // const response = await fetch("https://jsonplaceholder.typicode.com/lsdhlhrgz") //  404
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")

        if(!response.ok) {
          throw new Error("ERREUR HTTP")
        }

        const data = await response.json()
        setLoading(false)
        setTasks(data)

      } catch(error) {
        console.log(error)
        setLoading(false)
        setError("Erreur API")
      }
    }
    fetchTasks();
  }, [])
  

  if(loading) {
    return <p>Chargement ...</p>
  }
  
  if(error) {
    return <p>{error}</p>
  }
  // Placer les taches obtenues dans tasks puis les afficher dans une liste ul li
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.id} : {task.title}</li>
      ))}
    </ul>
  )

}
