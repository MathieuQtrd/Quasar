import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HomePage() {

    // on récupère l'id de la tache concernée
    const { id } = useParams()

    const task = useSelector((state) => state.tasks.items.find((task) => task.id === Number(id)))

    if(!task) {
        return <p>Tâche introuvable</p>
    }

    return (
        <>
            <hr />
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.priority}</p>
            <p>{task.done ? 'Terminée' : 'En cours'}</p>
            <Link to="/dashboard">Retour</Link>
            <hr />
        </>
    )
}