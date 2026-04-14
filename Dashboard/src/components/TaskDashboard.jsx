import { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
export default function TaskDashboard() {
 
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
                    <TaskForm onAddTask={addTask} />
                </Col>
                <Col lg={8}> 
                    <TaskList tasks={tasks} />
                </Col>
            </Row>
        </>
    )
}
