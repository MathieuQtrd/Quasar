import { Container, Nav, Navbar as BootstrapNavbar, Button } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <BootstrapNavbar
            bg="primary"
            data-bs-theme="dark"
            expand="lg"
            className="shadow-sm"
        >
            <Container>
                <BootstrapNavbar.Brand as={NavLink} to="/">
                    Voyages
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="main-navbar" />
                <BootstrapNavbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/destinations">
                            Destinations
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/search">
                            Rechercher
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">
                            Contact
                        </Nav.Link>

                        {isAuthenticated ? (
                            <>
                                <Nav.Link as={NavLink} to="/profile" className="me-2">
                                    Profil
                                </Nav.Link>
                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout}
                                >
                                    Déconnexion
                                </Button> 
                            </>
                        ): (
                            <>
                                <Nav.Link as={NavLink} to="/register">
                                    Inscription
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/login">
                                    Connexion
                                </Nav.Link>                             
                            </>
                            )}




                    <Nav.Link as={NavLink} to="/about">
                        A propos
                    </Nav.Link>

                </Nav>
            </BootstrapNavbar.Collapse>
        </Container>
            </BootstrapNavbar >            
    )
}
export default Navbar