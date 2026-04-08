import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { Button, Modal } from 'react-bootstrap'

const Cart = () => {
    const { cart } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(cart)

    return (
        <>
            <span className="btn btn-light cursor" onClick={handleShow}>
                <i className="bi bi-cart"></i> {cart.cartCount}
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contenu panier
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart
