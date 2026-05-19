import { Button, Card, Col, Row, Badge, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {

    const { user } = useAuth()

  return (
    <section>
        <Card className="p-5 shadow-sm border-0">
            
                <Row>
                    <Col md={10}>
                        <h1 className="mb-3 pb-3 border-bottom">Bonjour { user.firstName } { user.lastName }</h1>
                        <p className="text-muted mb-0">Email : { user.email }</p>
                        <p className="text-muted mb-0">Pseudo : { user.username }</p>
                    </Col>
                    <Col md={2}>
                        <img src={ user.image } alt="" />
                    </Col>
                </Row>
                

        </Card>
    </section>
  )
}

export default ProfilePage
