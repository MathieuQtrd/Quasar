import { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { getTasks, createTask, deleteTask } from '../services/services'
import LoadingMessage from './LoadingMessage';
import ErrorAlert from './ErrorAlert';

export default function TaskDashboard() {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadTask() {
            try {
                setLoading(true)
                const data = await getTasks(7)
                setTasks(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadTask()
    }, [])

    const addTask = async (newTask) => {
        try {
            const createdTask = await createTask(newTask);
            setTasks((previousTasks) => [createdTask, ...previousTasks]);
        } catch (err) {
            setError(err.message);
        }
        const taskData = {
            id: Date.now(),
            ...newTask
        }
        setTasks([...tasks, taskData])
    }

    const delTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks((previousTasks) =>
                previousTasks.filter((task) => task.id !== taskId)
            );
        } catch (err) {
            setError(err.message);
        }
    };

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

            <ErrorAlert message={error} />

            {loading ? <LoadingMessage /> : ''}

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
                    <TaskList tasks={tasks} onDeleteTask={delTask} />
                </Col>
            </Row>
        </>
    )
}
