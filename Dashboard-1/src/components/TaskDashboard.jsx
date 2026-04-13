import { useState } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'

export default function TaskDashboard() {

    const [title, setTitle] = useState('')

    return (
        <>
            {/* 

            - faire un haut de page pour afficher les stats des tâches (Nb total de tâche, tâches terminées, tâches en cours) 
            - En dessous : 2 colonnes
            - à gauche : le formulaire d'ajout
            - à droite l 'affichage

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
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>Terminées</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>En cours</h2>
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
                            <Form>
                                <Form.Group className='mb-3' controlId='title'>
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="title"
                                        placeholder="Saisir un titre"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    {/* 
                        EXERCICE 1 : Faire les 3 champs suivants :
                        - Description (description) : textarea
                        - Priorité (priority) : select
                        - Terminée (done) : checkbox
                        - Avec les useState pour chaque champ

                    
                    */}
                </Col>
                <Col lg={8}>
                    {/* Affichage des tâches */}

                </Col>
            </Row>
        </>
    )
}
