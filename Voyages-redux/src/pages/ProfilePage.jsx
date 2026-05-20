import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Badge, Alert, Image } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";

import { useDispatch, useSelector } from "react-redux"

function ProfilePage() {

    const disptach = useDispatch()
    const { user, status, error } = useSelector((state) => state.auth)


    return (
        <section>

            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="p-5 shadow-sm border-0">
                        <Card.Body>
                            <div className="d-flex align-items-center gap-3  mb-3">
                                { user.avatar  || user.image ? (
                                    <Image 
                                        src={user.avatar || user.image}
                                        alt={user.username}
                                        roundedCircle 
                                        width="80"
                                        height="80"
                                        style={{ objectFit: 'cover'}}
                                    />                                    
                                ) : (
                                    <div></div>
                                )}
                                <div>
                                    <p><b>Username :</b> {user.username}</p>
                                    <p><b>Statut :</b> {user.role}</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </section>
    )
}

export default ProfilePage
