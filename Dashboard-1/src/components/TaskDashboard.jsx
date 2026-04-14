import { useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'

export default function TaskDashboard() {

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [priority, setPriority] = useState('')
    // const [done, setDone] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: '',
        done: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const priorityOptions = [
        { value: 'low', label: 'Basse' },
        { value: 'medium', label: 'Moyenne' },
        { value: 'high', label: 'Haute' },
    ];

    {/* EXERCICE 3 : Rajouter un bouton submit, mettre en place l'évènement de validation du form : lors de la validation : on affiche les valeurs dans une alert et on supprime les données du form */}
    const handleSubmit = (e) => {
        e.preventDefault()

        const checkErrors = validate()

        if (Object.keys(checkErrors).length > 0) {
            setErrors(checkErrors)
            return;
        }
        setErrors({})

        // alert('Données du form : Titre : ' + formData.title + ', Description : ' + formData.description + ', Priorité : ' + formData.priority + ', Etat : ' + formData.done)

        addTask(formData)
        console.log(tasks)
        setFormData({
            title: '',
            description: '',
            priority: '',
            done: false,
        })
    }

    {/* EXERCICE 4 : Gestions des erreurs : Le titre et la description ne doivent pas être vide. Gérer l'affichage des erreurs au niveau des champs et on bloque la validation en cas d'erreur */ }
    const [errors, setErrors] = useState({})
    const validate = () => {
        const formErrors = {}
        if (!formData.title.trim()) {
            formErrors.title = 'Le titre est obligatoire'
        }
        if (!formData.description.trim()) {
            formErrors.description = 'La description est obligatoire'
        }
        return formErrors;
    }

    {/* EXERCICE 5 : Faire l'affichage des tâches : au chargement de la page, on affiche deux tâches par défaut, ensuite lors de la validation, la tâche doit se rajouter à la liste */ }
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Faire le devis du projet Automobile',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque iure in eos veniam similique praesentium atque quidem repudiandae animi voluptatibus quia voluptatum, iusto repellendus hic amet. Vel, quis saepe!',
            priority: 'low',
            done: false
        },
        {
            id: 2,
            title: 'Faire le slider du projet blog cuisine',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque iure in eos veniam similique praesentium atque quidem repudiandae animi voluptatibus quia voluptatum, iusto repellendus hic amet. Vel, quis saepe!',
            priority: 'medium',
            done: true
        },
    ])
    const addTask = (newTask) => {
        const taskData = {
            id: Date.now(),
            ...newTask
        }
        setTasks([...tasks, taskData])
    }

    const priorityColor = (priority) => {
        if(priority === 'low') return 'btn btn-success span-cursor'
        if(priority === 'medium') return 'btn btn-warning span-cursor'
        return 'btn btn-danger'
    }

    const priorityText = (priority) => {
        if(priority === 'low') return 'Basse'
        if(priority === 'medium') return 'Moyenne'
        return 'Haute'
    }

    {/* EXERCICE 6 : Afficher dans les blocs prévus le nombre total de taches, le nb terminées et en cours */}
    const totalTasks = tasks.length
    const doneTasks = tasks.filter((task) => task.done).length
    const todoTasks = totalTasks - doneTasks

    {/* 
        EXERCICE 7 : Découper le projet en components 
        ---------------------------------------------
        - Installer un nouveau projet Dashboard
        src/ 
            - App.jsx
            - components/ 
                - TaskDashboard.jsx 
                - TaskForm.jsx - formulaire
                - TaskList.jsx - liste des tâches
                - TaskCard.jsx - bloc d'une tâche
                - TaskInput.jsx - champ du form
                - TaskTextarea.jsx - champ du form
                - TaskSelect.jsx - champ du form
                - TaskCheckbox.jsx - champ du form
                - ErrorMessage.jsx - Message d'erreur en dessous des champs du form       
    */}

    return (
        <>
            {/* 

            - faire un haut de page pour afficher les stats des tâches (Nb total de tâche, tâches terminées, tâches en cours) 
            - En dessous : 2 colonnes
            - à gauche : le formulaire d'ajout
            - à droite l'affichage

            */}
            <div className='mb-4'>
                <h1 className='mb-1'>Dashboard</h1>
                <p className='text-muted mb-0'>Tâches</p>
            </div>

            {/* Stats */}
            <Row className='g-4 mb-4'>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>Total</h2>
                            <p className='fs-2'>{totalTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>Terminées</h2>
                            <p className='fs-2'>{doneTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>En cours</h2>
                            <p className='fs-2'>{todoTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='g-4 mb-4'>
                <Col lg={4}>
                    {/* Formulaire d'ajout */}
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <Card.Title className='mb-4'>Nouvelle tâche</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='title'>
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        placeholder="Saisir un titre"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                    {errors.title && <Form.Text className="text-danger">{errors.title}</Form.Text>}
                                </Form.Group>
                                {/* 
                                    EXERCICE 1 : Faire les 3 champs suivants :
                                    - Description (description) : textarea
                                    - Priorité (priority) : select
                                    - Terminée (done) : checkbox
                                    - Avec les useState pour chaque champ

                                
                                */}
                                <Form.Group className='mb-3' controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="description"
                                        placeholder="Saisir une description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                    {errors.description && <Form.Text className="text-danger">{errors.description}</Form.Text>}
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='priority'>
                                    <Form.Label>Priorité</Form.Label>
                                    <Form.Select name="priority" value={formData.priority} onChange={handleChange}
                                    >
                                        {priorityOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='done'>
                                    <Form.Check
                                        type="checkbox"
                                        label="Terminée"
                                        name="done"
                                        checked={formData.done}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <div className="mb-3">
                                    <Button type="submit" variant="outline-dark">
                                        Ajouter une tâche
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8}>
                    {/* Affichage des tâches */}
                    {/* EXERCICE 2 : Afficher les valeur saisies dans le form. Pour le champ done on affiche : Terminée ou En cours */}
                    <Row className='g-3'>
                        {tasks.map((task) => (
                            <Col md={6} key={task.id}>
                                <Card className='shadow-sm border-0'>
                                    <Card.Body>
                                        <h2 className='h5'>{task.title}</h2>
                                        <p>{task.description}</p>
                                        <div className='d-flex justify-content-between'>
                                            <span className={task.done ? 'btn btn-success span-cursor' : 'btn btn-warning span-cursor'}>
                                                {task.done ? 'Terminée' : 'En cours'}
                                            </span>

                                            <span className={priorityColor(task.priority)}>
                                                {priorityText(task.priority)}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
        </>
    )
}
