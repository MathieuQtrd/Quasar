import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../features/user/userSlice'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

export default function HomePage() {

    const disptach = useDispatch()

    const isConnected = useSelector((state) => state.user.isConnected)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        disptach(login({email, password}))
    }

    if (isConnected) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <Container>
            <Row>
                <Col md={12} className='my-5 d-flex justify-content-center'>
                    <Card className='w-50 shadow-sm border-0'>
                        <Card.Body>
                            <Card.Title className='mb-4'>Connexion</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Votre email"
                                        onChange={(e) => { setEmail(e.target.value)}}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="password"
                                        value={password}
                                        placeholder="Votre Mot de passe"
                                        onChange={(e) => { setPassword(e.target.value)}}
                                    />
                                </Form.Group>
                                <div className="mb-3">
                                    <Button type="submit" variant="outline-dark">
                                        Connexion
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )




}