import { Row, Col } from 'react-bootstrap'
import TaskCard from './TaskCard'

import { setFilter } from '../features/tasksSlice';

export default function TaskList({ tasks }) {
    return (
        <Row className='g-3'>
            {tasks.map((task) => (
                <Col md={6} key={task.id}>
                    <TaskCard task={task} />
                </Col>
            ))}
        </Row>
    )
}