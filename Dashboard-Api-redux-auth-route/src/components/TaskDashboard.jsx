import { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import LoadingMessage from './LoadingMessage';
import ErrorAlert from './ErrorAlert';

import { useDispatch, useSelector } from 'react-redux'

import { fetchTasks } from '../features/tasks/tasksSlice';

import { logout } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';



export default function TaskDashboard() {

    const disptach = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        disptach(logout())
        navigate('/', { replace: true } )
    }

    const tasks = useSelector((state) => state.tasks.items)
    const filter = useSelector((state) => state.tasks.filter)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)

    useEffect(() => {
        if(tasks.length === 0) {
            disptach(fetchTasks())
        }
    }, [])

    
    const totalTasks = tasks.length
    const doneTasks = tasks.filter((task) => task.done).length
    const todoTasks = totalTasks - doneTasks

    return (
        <>
            <div className='mb-4'>
                <h1 className='mb-1'>Dashboard</h1>
                <p className='text-muted mb-0'>Tâches</p>
                <p><button className="btn btn-outline-danger" onClick={handleLogout}>Déconnexion</button></p>
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
                    <TaskForm />
                </Col>
                <Col lg={8}>
                    <TaskList tasks={tasks} />
                </Col>
            </Row>
        </>
    )
}
