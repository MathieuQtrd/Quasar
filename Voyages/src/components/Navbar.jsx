import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Navbar() {
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
                            <Nav.Link as={NavLink} to="/about">
                                A propos
                            </Nav.Link>
                            
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>            
    )
}
export default Navbar